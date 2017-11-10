var _ = require('underscore');

module.exports = function (context, callback) {  
  console.log('start..');
  var orderItems = context.get.orderItems();
  var groupings = context.get.checkoutGroupings();
  console.log("number of items in checkout",orderItems.length);
  console.log("number of groupings in checkout",groupings.length);
    
  if (orderItems.length > 1 ) {
    orderItems.forEach(function (item,index) {
      //check if item is oversized by looking at the property
      var isOverSizedItem = _.find(item.product.properties, function(property){
        return isOverSized(property);
      });
      if (isOverSizedItem) {
        console.log("Found over sized item. Checking if groups are valid..");
        //find the group the item belongs to
        var existingGroup = _.find(groupings,function(group){return _.contains(group.orderItemIds, item.id); });
        var productCode = item.product.productCode;
        var fulfillmentMethod = item.fulfillmentMethod;
        var destinationId =  item.destinationId;
        if(existingGroup && existingGroup.orderItemIds.length > 1 && doesGroupContainDifferentItems(existingGroup,orderItems,productCode)) {
          console.log("Items in existing group", existingGroup.orderItemIds);
          //check if the item is already in a group by itself
          var groupAlreadyPresent = _.find(groupings, function(group){
            return isOnlyItemInGroup(group,orderItems, productCode,fulfillmentMethod, destinationId);
          });
          if(groupAlreadyPresent){
            console.log("Found a group that can be used.. Adding item to the group with Id:", groupAlreadyPresent.id);
            groupAlreadyPresent.orderItemIds.push(item.id);
          }
          else{
            //create a new group
            console.log("Found more than one item in the group. Creating a new group");
            var newGroup = createnewGroup(item);
            console.log("New group created for the item.", newGroup);
            groupings.push(newGroup);
          }
          var filterIds = _.reject(existingGroup.orderItemIds, function(itemId){ return itemId === item.id; });
          console.log("Now..removing the item from existing group");
          existingGroup.orderItemIds = filterIds;
          console.log("Group items after removing over sized item", existingGroup.orderItemIds);
        }
        else{
          console.log("Groups are valid for this item..");
        }
      }
      //Split Pick up groups by location


    });

  }

  //Split pickup groups by location
  var nonShipGroups = _.reject(groupings,function(item){
     return item.fulfillmentMethod === "Ship";
  });

  nonShipGroups.forEach(function(group){
    group.explicitNonShipGroup = true;
    if(group.fulfillmentMethod === "Pickup" && group.orderItemIds.length > 1){
      
      //Check if orderItemIds have different fulfillment location
      var items = groupItemsByFullfillmentLocation(orderItems,group.orderItemIds);  
      _.each(
        _.sortBy(
            _.toArray(items), function (num) {
                return num;
            }
        ).reverse().slice(1),
        function (array) {
          console.log("Spliting pickup groups by fullfillment location-", array[0].fulfillmentLocationCode);
          console.log("Creating new pick up group for",array[0].fulfillmentLocationCode)
          var newGroup = {};
          newGroup.orderItemIds = [];
          newGroup.destinationId = group.destinationId;
          newGroup.fulfillmentMethod = group.fulfillmentMethod;
          array.forEach(function(item){           
            newGroup.orderItemIds.push(item.id);
            console.log("Removing item from existing group",item.id)
            var filterIds = _.reject(group.orderItemIds, function(itemId){ return itemId === item.id; });
            group.orderItemIds = filterIds;
          });   
          console.log("new group items",newGroup.orderItemIds);
          groupings.push(newGroup);       
        }
    );      
    }
  });  
  
  console.log("Total number of groupings= " + groupings.length);
  context.exec.setGroupings(groupings);
  console.log("Finish..");
  callback();
};

function isOverSized(property) {
  if (property.attributeFQN === "tenant~isoversized") {
    return _.findWhere(property.values, {"value": true});
  }
  else {
    return false;
  }
}

function doesGroupContainDifferentItems(group, orderItems, productCode) {
  var productList = [];
  group.orderItemIds.forEach(function(itemId){
    var orderItem = _.findWhere(orderItems, {id : itemId});
    productList.push(orderItem.product.productCode);
  });
  return !_.every(productList, function(prod) { return prod === productCode; });
}


function isOnlyItemInGroup (group, orderItems, productCode, fulfillmentMethod, destinationId){
  return group.orderItemIds.every(function(itemId){
    var orderItem = _.findWhere(orderItems, {id : itemId});
    return orderItem.product.productCode === productCode && orderItem.fulfillmentMethod === fulfillmentMethod && orderItem.destinationId === destinationId;
  });
}

function createnewGroup(item) {
  var newGroup = {};
  newGroup.orderItemIds = [item.id];
  newGroup.destinationId = item.destinationId;
  newGroup.fulfillmentMethod = item.fulfillmentMethod;
  if(item.fulfillmentMethod === 'Pickup'){
    newGroup.explicitNonShipGroup = true;
  }  
  return newGroup;
}


function groupItemsByFullfillmentLocation(orderItems,itemIds){
  
  var filteredItems = _.filter(orderItems, function(item){
    return _.contains(itemIds,item.id);
  });
  return _.groupBy(filteredItems,'fulfillmentLocationCode');  
}

