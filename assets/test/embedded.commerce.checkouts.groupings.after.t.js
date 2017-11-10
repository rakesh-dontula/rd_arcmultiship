/**
 * This is a scaffold for unit tests for the custom function for
 * `embedded.commerce.checkouts.groupings.after`.
 * Modify the test conditions below. You may:
 *  - add special assertions for code actions from Simulator.assert
 *  - create a mock context with Simulator.context() and modify it
 *  - use and modify mock Mozu business objects from Simulator.fixtures
 *  - use Express to simulate request/response pairs
 */

'use strict';

var Simulator = require('mozu-action-simulator');
var assert = Simulator.assert;

var actionName = 'embedded.commerce.checkouts.groupings.after';

describe('embedded.commerce.checkouts.groupings.after implementing embedded.commerce.checkouts.groupings.after', function () {

  var action;

  before(function () {
    action = require('../src/domains/commerce.checkouts/embedded.commerce.checkouts.groupings.after');
  });

  it('runs successfully', function(done) {
    this.timeout(10000);
    var callback = function(err) {
      assert.ok(!err, "Callback was called with an error: " + err);
      // more assertions
      
      done();
    };

    var context = Simulator.context(actionName, callback);
    var groupings = context.get.checkoutGroupings();
    
    context.exec.setGroupings = function(g) {
      assert(Array.isArray(g), "g is not an array")
		};
    var items = context.get.orderItems();  

    Simulator.simulate(actionName, action, context, callback);
  });

  it('splits groupings correctly', function(done) {
    this.timeout(30000);
    var callback = function(err) {
      assert.ok(!err, "Callback was called with an error: " + err);
      // more assertions
      
      done();
    };
    
    var context = Simulator.context(actionName, callback);
    var items = context.get.orderItems();  
    
    //#region set up data
    items = [
      {
        "id": "5106a55bad9d4ff48152a81d00da0bd7",
        "destinationId": "2838688a560f4841966ba81d00da0163",
        "originalCartItemId": "ecf77de1c30a4eaea9e7a81d00d3af08",
        "fulfillmentLocationCode": "atx-whse",
        "fulfillmentMethod": "Ship",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 1,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/c7075816-4e93-4565-a3b6-68c1670a288c",
          "variationProductCode": null,
          "options": [
            {
              "name": "Case add-on",
              "value": "case-felt-full",
              "shopperEnteredValue": null,
              "attributeFQN": "tenant~case-add-on",
              "dataType": null,
              "stringValue": "Felt Case - Full Size"
            }
          ],
          "properties": [],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 210,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Bundle",
          "bundledProducts": [
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "oring",
              "name": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "description": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 0.5
                },
                "width": {
                  "unit": "in",
                  "value": 3
                },
                "length": {
                  "unit": "in",
                  "value": 3
                },
                "weight": {
                  "unit": "lbs",
                  "value": 0.5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": 10,
              "deltaPrice": null,
              "productCode": "gift-card-addon-10",
              "name": "$10 Gift Card",
              "description": "$10 Gift Card",
              "goodsType": "DigitalCredit",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": null,
                "width": null,
                "length": null,
                "weight": null
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "ducky-shine-5-blu",
              "name": "Ducky Shine 5 Blue",
              "description": "Ducky Shine 5 - \"The Color Makes Different\"",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 3
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": "tenant~case-add-on",
              "optionValue": "case-felt-full",
              "creditValue": null,
              "deltaPrice": 10,
              "productCode": "case-felt-full",
              "name": "Felt Case - Full Size",
              "description": "These felt keyboard cases are as stylish as they are protective.",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 1
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 1
                }
              },
              "fulfillmentStatus": "Pending"
            }
          ],
          "productCode": "ducky-shine-5-bundle",
          "name": "Ducky Shine 5 Bundle",
          "description": "Ducky Shine 5 Bundle",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 210,
        "extendedTotal": 210,
        "taxableTotal": 210,
        "discountTotal": 0,
        "discountedTotal": 210,
        "itemTaxTotal": 17.33,
        "shippingTaxTotal": 1.6,
        "shippingTotal": 19.34,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 247.85,
        "unitPrice": {
          "extendedAmount": 210,
          "listAmount": 210,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": null,
        "productDiscounts": [],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {
          "updateDate": "2017-10-31T17:50:57.458Z",
          "createDate": "2017-10-31T17:50:57.458Z",
          "updateBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f",
          "createBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f"
        },
        "shippingAmountBeforeDiscountsAndAdjustments": 19.34,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "8f4230811e6c4a3796aaa81d00d3bb3f",
        "destinationId": "68f6da273edd439c8ba3a81d00d9e5a8",
        "originalCartItemId": "ecf77de1c30a4eaea9e7a81d00d3af08",
        "fulfillmentLocationCode": "atx-whse",
        "fulfillmentMethod": "Ship",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 2,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/c7075816-4e93-4565-a3b6-68c1670a288c",
          "variationProductCode": null,
          "options": [
            {
              "name": "Case add-on",
              "value": "case-felt-full",
              "shopperEnteredValue": null,
              "attributeFQN": "tenant~case-add-on",
              "dataType": null,
              "stringValue": "Felt Case - Full Size"
            }
          ],
          "properties": [],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 210,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Bundle",
          "bundledProducts": [
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "oring",
              "name": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "description": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 0.5
                },
                "width": {
                  "unit": "in",
                  "value": 3
                },
                "length": {
                  "unit": "in",
                  "value": 3
                },
                "weight": {
                  "unit": "lbs",
                  "value": 0.5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": 10,
              "deltaPrice": null,
              "productCode": "gift-card-addon-10",
              "name": "$10 Gift Card",
              "description": "$10 Gift Card",
              "goodsType": "DigitalCredit",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": null,
                "width": null,
                "length": null,
                "weight": null
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "ducky-shine-5-blu",
              "name": "Ducky Shine 5 Blue",
              "description": "Ducky Shine 5 - \"The Color Makes Different\"",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 3
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": "tenant~case-add-on",
              "optionValue": "case-felt-full",
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "case-felt-full",
              "name": "Felt Case - Full Size",
              "description": "These felt keyboard cases are as stylish as they are protective.",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 1
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 1
                }
              },
              "fulfillmentStatus": "Pending"
            }
          ],
          "productCode": "ducky-shine-5-bundle",
          "name": "Ducky Shine 5 Bundle",
          "description": "Ducky Shine 5 Bundle",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 210,
        "extendedTotal": 210,
        "taxableTotal": 210,
        "discountTotal": 0,
        "discountedTotal": 210,
        "itemTaxTotal": 17.33,
        "shippingTaxTotal": 0.68,
        "shippingTotal": 8.22,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 236.23,
        "unitPrice": {
          "extendedAmount": 210,
          "listAmount": 210,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": null,
        "productDiscounts": [],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {
          "updateDate": "2017-10-31T17:50:57.458Z",
          "createDate": "2017-10-31T17:50:57.458Z",
          "updateBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f",
          "createBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f"
        },
        "shippingAmountBeforeDiscountsAndAdjustments": 8.22,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "8f4230811e6c4a3796aaa81d00d3bb4f",
        "destinationId": null,
        "originalCartItemId": "ecf77de1c30a4eaea9e7a81d00d3af08",
        "fulfillmentLocationCode": "atx-arb",
        "fulfillmentMethod": "Pickup",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 2,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/c7075816-4e93-4565-a3b6-68c1670a288c",
          "variationProductCode": null,
          "options": [
            {
              "name": "Case add-on",
              "value": "case-felt-full",
              "shopperEnteredValue": null,
              "attributeFQN": "tenant~case-add-on",
              "dataType": null,
              "stringValue": "Felt Case - Full Size"
            }
          ],
          "properties": [],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 210,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Bundle",
          "bundledProducts": [
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "oring",
              "name": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "description": "Cherry MX Rubber O-Ring Switch Dampener (125pcs)",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 0.5
                },
                "width": {
                  "unit": "in",
                  "value": 3
                },
                "length": {
                  "unit": "in",
                  "value": 3
                },
                "weight": {
                  "unit": "lbs",
                  "value": 0.5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 2,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": 10,
              "deltaPrice": null,
              "productCode": "gift-card-addon-10",
              "name": "$10 Gift Card",
              "description": "$10 Gift Card",
              "goodsType": "DigitalCredit",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": null,
                "width": null,
                "length": null,
                "weight": null
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": null,
              "optionValue": null,
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "ducky-shine-5-blu",
              "name": "Ducky Shine 5 Blue",
              "description": "Ducky Shine 5 - \"The Color Makes Different\"",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 3
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 5
                }
              },
              "fulfillmentStatus": "Pending"
            },
            {
              "quantity": 1,
              "optionAttributeFQN": "tenant~case-add-on",
              "optionValue": "case-felt-full",
              "creditValue": null,
              "deltaPrice": null,
              "productCode": "case-felt-full",
              "name": "Felt Case - Full Size",
              "description": "These felt keyboard cases are as stylish as they are protective.",
              "goodsType": "Physical",
              "isPackagedStandAlone": false,
              "productReservationId": null,
              "allocationId": null,
              "allocationExpiration": null,
              "measurements": {
                "height": {
                  "unit": "in",
                  "value": 1
                },
                "width": {
                  "unit": "in",
                  "value": 8
                },
                "length": {
                  "unit": "in",
                  "value": 16
                },
                "weight": {
                  "unit": "lbs",
                  "value": 1
                }
              },
              "fulfillmentStatus": "Pending"
            }
          ],
          "productCode": "ducky-shine-5-bundle",
          "name": "Ducky Shine 5 Bundle",
          "description": "Ducky Shine 5 Bundle",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 210,
        "extendedTotal": 210,
        "taxableTotal": 210,
        "discountTotal": 0,
        "discountedTotal": 210,
        "itemTaxTotal": 17.33,
        "shippingTaxTotal": 0.68,
        "shippingTotal": 8.22,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 236.23,
        "unitPrice": {
          "extendedAmount": 210,
          "listAmount": 210,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": null,
        "productDiscounts": [],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {
          "updateDate": "2017-10-31T17:50:57.458Z",
          "createDate": "2017-10-31T17:50:57.458Z",
          "updateBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f",
          "createBy": "2dc2c0ab49ee4bfe8febeb9503c9e09f"
        },
        "shippingAmountBeforeDiscountsAndAdjustments": 8.22,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "4f04e2573d264fba9ae5a81d010ae216",
        "destinationId": null,
        "originalCartItemId": "18deb7364762474f8752a81d010ad371",
        "fulfillmentLocationCode": "atx-arb",
        "fulfillmentMethod": "Pickup",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 4,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip",
            "InStorePickup"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/d301c112-5877-4c35-ab4b-2b687514178d",
          "variationProductCode": null,
          "options": [],
          "properties": [
            {
              "attributeFQN": "tenant~isoversized",
              "name": "IsOverSized",
              "dataType": "Bool",
              "isMultiValue": false,
              "values": [
                {
                  "stringValue": null,
                  "value": true
                }
              ]
            }
          ],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 200,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Standard",
          "bundledProducts": [],
          "productCode": "ergo-inf-clr",
          "name": "Ergodox Infinity Keyboard",
          "description": "All keyboard designs begin with a simple goal: Create a device that allows people to use their hands to communicate with a computer. The ErgoDox, first invented by Dominic Beauchamp, has been completely re-imagined by Jacob Alexander and the team at Input Club. This iteration of the ErgoDox is the most technically sophisticated split keyboard to date and has a host of innovative features.",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 200,
        "extendedTotal": 200,
        "taxableTotal": 190,
        "discountTotal": 10,
        "discountedTotal": 190,
        "itemTaxTotal": 15.68,
        "shippingTaxTotal": 0,
        "shippingTotal": null,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 205.68,
        "unitPrice": {
          "extendedAmount": 200,
          "listAmount": 200,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": {
          "appliesToSalePrice": false,
          "discountQuantity": 1,
          "productQuantity": 1,
          "impactPerUnit": 0,
          "impact": 10,
          "discount": {
            "id": 8,
            "name": "Discount of the Future!",
            "itemIds": null,
            "expirationDate": null
          },
          "couponCode": null,
          "excluded": false
        },
        "productDiscounts": [
          {
            "appliesToSalePrice": false,
            "discountQuantity": 1,
            "productQuantity": 1,
            "impactPerUnit": 0,
            "impact": 10,
            "discount": {
              "id": 8,
              "name": "Discount of the Future!",
              "itemIds": null,
              "expirationDate": null
            },
            "couponCode": null,
            "excluded": false
          }
        ],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {},
        "shippingAmountBeforeDiscountsAndAdjustments": 0,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "4f04e2573d264fba9ae5a81d010ae217",
        "destinationId": null,
        "originalCartItemId": "18deb7364762474f8752a81d010ad371",
        "fulfillmentLocationCode": "atx-aus",
        "fulfillmentMethod": "Pickup",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 4,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip",
            "InStorePickup"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/d301c112-5877-4c35-ab4b-2b687514178d",
          "variationProductCode": null,
          "options": [],
          "properties": [
            {
              "attributeFQN": "tenant~isoversized",
              "name": "IsOverSized",
              "dataType": "Bool",
              "isMultiValue": false,
              "values": [
                {
                  "stringValue": null,
                  "value": true
                }
              ]
            }
          ],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 200,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Standard",
          "bundledProducts": [],
          "productCode": "ergo-inf-clr",
          "name": "Ergodox Infinity Keyboard",
          "description": "All keyboard designs begin with a simple goal: Create a device that allows people to use their hands to communicate with a computer. The ErgoDox, first invented by Dominic Beauchamp, has been completely re-imagined by Jacob Alexander and the team at Input Club. This iteration of the ErgoDox is the most technically sophisticated split keyboard to date and has a host of innovative features.",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 200,
        "extendedTotal": 200,
        "taxableTotal": 190,
        "discountTotal": 10,
        "discountedTotal": 190,
        "itemTaxTotal": 15.68,
        "shippingTaxTotal": 0,
        "shippingTotal": null,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 205.68,
        "unitPrice": {
          "extendedAmount": 200,
          "listAmount": 200,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": {
          "appliesToSalePrice": false,
          "discountQuantity": 1,
          "productQuantity": 1,
          "impactPerUnit": 0,
          "impact": 10,
          "discount": {
            "id": 8,
            "name": "Discount of the Future!",
            "itemIds": null,
            "expirationDate": null
          },
          "couponCode": null,
          "excluded": false
        },
        "productDiscounts": [
          {
            "appliesToSalePrice": false,
            "discountQuantity": 1,
            "productQuantity": 1,
            "impactPerUnit": 0,
            "impact": 10,
            "discount": {
              "id": 8,
              "name": "Discount of the Future!",
              "itemIds": null,
              "expirationDate": null
            },
            "couponCode": null,
            "excluded": false
          }
        ],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {},
        "shippingAmountBeforeDiscountsAndAdjustments": 0,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "e7ddff602c35434eb01ea81f00ed4d61",
        "destinationId": "68f6da273edd439c8ba3a81d00d9e5a8",
        "originalCartItemId": "f9a66c72732343feb7e7a81d00d39f67",
        "fulfillmentLocationCode": "atx-whse",
        "fulfillmentMethod": "Ship",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 3,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip",
            "InStorePickup"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/d301c112-5877-4c35-ab4b-2b687514178d",
          "variationProductCode": null,
          "options": [],
          "properties": [
            {
              "attributeFQN": "tenant~isoversized",
              "name": "IsOverSized",
              "dataType": "Bool",
              "isMultiValue": false,
              "values": [
                {
                  "stringValue": null,
                  "value": true
                }
              ]
            }
          ],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 200,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Standard",
          "bundledProducts": [],
          "productCode": "ergo-inf-clr",
          "name": "Ergodox Infinity Keyboard",
          "description": "All keyboard designs begin with a simple goal: Create a device that allows people to use their hands to communicate with a computer. The ErgoDox, first invented by Dominic Beauchamp, has been completely re-imagined by Jacob Alexander and the team at Input Club. This iteration of the ErgoDox is the most technically sophisticated split keyboard to date and has a host of innovative features.",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 200,
        "extendedTotal": 200,
        "taxableTotal": 380,
        "discountTotal": 20,
        "discountedTotal": 180,
        "itemTaxTotal": 31.35,
        "shippingTaxTotal": 0,
        "shippingTotal": null,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 211.35,
        "unitPrice": {
          "extendedAmount": 200,
          "listAmount": 200,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": {
          "appliesToSalePrice": false,
          "discountQuantity": 2,
          "productQuantity": 2,
          "impactPerUnit": 0,
          "impact": 20,
          "discount": {
            "id": 8,
            "name": "Discount of the Future!",
            "itemIds": null,
            "expirationDate": null
          },
          "couponCode": null,
          "excluded": false
        },
        "productDiscounts": [
          {
            "appliesToSalePrice": false,
            "discountQuantity": 2,
            "productQuantity": 2,
            "impactPerUnit": 0,
            "impact": 20,
            "discount": {
              "id": 8,
              "name": "Discount of the Future!",
              "itemIds": null,
              "expirationDate": null
            },
            "couponCode": null,
            "excluded": false
          }
        ],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {},
        "shippingAmountBeforeDiscountsAndAdjustments": 0,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      },
      {
        "id": "bb334c3097ed42b6b492a81f00ee0443",
        "destinationId": null,
        "originalCartItemId": "f9a66c72732343feb7e7a81d00d39f67",
        "fulfillmentLocationCode": "atx-whse",
        "fulfillmentMethod": "Ship",
        "dutyAmount": null,
        "localeCode": null,
        "lineId": 5,
        "product": {
          "mfgPartNumber": null,
          "upc": null,
          "fulfillmentTypesSupported": [
            "DirectShip",
            "InStorePickup"
          ],
          "imageAlternateText": "",
          "imageUrl": "//cdn-tp1.NGDev06.dev.kibocommerce.com/18297-22317/cms/22317/files/d301c112-5877-4c35-ab4b-2b687514178d",
          "variationProductCode": null,
          "options": [],
          "properties": [
            {
              "attributeFQN": "tenant~isoversized",
              "name": "IsOverSized",
              "dataType": "Bool",
              "isMultiValue": false,
              "values": [
                {
                  "stringValue": null,
                  "value": true
                }
              ]
            }
          ],
          "categories": [
            {
              "id": 1,
              "parent": null
            }
          ],
          "price": {
            "price": 200,
            "salePrice": null,
            "tenantOverridePrice": null,
            "msrp": null,
            "creditValue": null,
            "priceListCode": null,
            "priceListEntryMode": null
          },
          "discountsRestricted": false,
          "discountsRestrictedStartDate": null,
          "discountsRestrictedEndDate": null,
          "isRecurring": null,
          "isTaxable": true,
          "productType": "Keyboard",
          "productUsage": "Standard",
          "bundledProducts": [],
          "productCode": "ergo-inf-clr",
          "name": "Ergodox Infinity Keyboard",
          "description": "All keyboard designs begin with a simple goal: Create a device that allows people to use their hands to communicate with a computer. The ErgoDox, first invented by Dominic Beauchamp, has been completely re-imagined by Jacob Alexander and the team at Input Club. This iteration of the ErgoDox is the most technically sophisticated split keyboard to date and has a host of innovative features.",
          "goodsType": "Physical",
          "isPackagedStandAlone": false,
          "productReservationId": null,
          "allocationId": null,
          "allocationExpiration": null,
          "measurements": {
            "height": {
              "unit": "in",
              "value": 1
            },
            "width": {
              "unit": "in",
              "value": 1
            },
            "length": {
              "unit": "in",
              "value": 1
            },
            "weight": {
              "unit": "lbs",
              "value": 1
            }
          },
          "fulfillmentStatus": "Pending"
        },
        "quantity": 1,
        "isRecurring": null,
        "isTaxable": null,
        "subtotal": 200,
        "extendedTotal": 200,
        "taxableTotal": 380,
        "discountTotal": 20,
        "discountedTotal": 180,
        "itemTaxTotal": 31.35,
        "shippingTaxTotal": 0,
        "shippingTotal": null,
        "handlingAmount": null,
        "feeTotal": 0,
        "total": 211.35,
        "unitPrice": {
          "extendedAmount": 200,
          "listAmount": 200,
          "saleAmount": null,
          "overrideAmount": null
        },
        "productDiscount": {
          "appliesToSalePrice": false,
          "discountQuantity": 2,
          "productQuantity": 2,
          "impactPerUnit": 0,
          "impact": 20,
          "discount": {
            "id": 8,
            "name": "Discount of the Future!",
            "itemIds": null,
            "expirationDate": null
          },
          "couponCode": null,
          "excluded": false
        },
        "productDiscounts": [
          {
            "appliesToSalePrice": false,
            "discountQuantity": 2,
            "productQuantity": 2,
            "impactPerUnit": 0,
            "impact": 20,
            "discount": {
              "id": 8,
              "name": "Discount of the Future!",
              "itemIds": null,
              "expirationDate": null
            },
            "couponCode": null,
            "excluded": false
          }
        ],
        "shippingDiscounts": [],
        "data": null,
        "taxData": null,
        "auditInfo": {},
        "shippingAmountBeforeDiscountsAndAdjustments": 0,
        "weightedOrderAdjustment": null,
        "weightedOrderDiscount": 0,
        "adjustedLineItemSubtotal": null,
        "totalWithoutWeightedShippingAndHandling": null,
        "weightedOrderTax": null,
        "weightedOrderShipping": null,
        "weightedOrderShippingDiscount": 0,
        "weightedOrderShippingManualAdjustment": null,
        "weightedOrderShippingTax": null,
        "weightedOrderHandlingFee": null,
        "weightedOrderHandlingFeeTax": null,
        "weightedOrderHandlingFeeDiscount": 0,
        "weightedOrderDuty": null,
        "totalWithWeightedShippingAndHandling": null,
        "weightedOrderHandlingAdjustment": null
      }
    ];
    var groupings = context.get.checkoutGroupings();
    //overwrite groupings
    groupings =  [
      {
        "id": "c8a231f8185c4b25bdce1a8754f6a959",
        "destinationId": "2838688a560f4841966ba81d00da0163",
        "fulfillmentMethod": "Ship",
        "orderItemIds": [
          "5106a55bad9d4ff48152a81d00da0bd7"
        ],
        "shippingMethodCode": null,
        "shippingMethodName": null,
        "shippingDiscounts": null,
        "handlingDiscounts": null,
        "dutyAmount": null,
        "dutyTotal": 0,
        "shippingAmount": null,
        "shippingSubTotal": 0,
        "itemLevelShippingDiscountTotal": 0,
        "orderLevelShippingDiscountTotal": 0,
        "shippingTax": null,
        "shippingTaxTotal": 0,
        "shippingTotal": 0,
        "handlingAmount": null,
        "handlingSubTotal": 0,
        "itemLevelHandlingDiscountTotal": 0,
        "orderLevelHandlingDiscountTotal": 0,
        "handlingTax": null,
        "handlingTaxTotal": 0,
        "handlingTotal": 0,
        "taxData": null
      },
      {
        "id": "8d58fb2907be4220bc74e6fd7fb914d9",
        "destinationId": "68f6da273edd439c8ba3a81d00d9e5a8",
        "fulfillmentMethod": "Ship",
        "orderItemIds": [
          "8f4230811e6c4a3796aaa81d00d3bb3f",
          "e7ddff602c35434eb01ea81f00ed4d61"
        ],
        "shippingMethodCode": null,
        "shippingMethodName": null,
        "shippingDiscounts": null,
        "handlingDiscounts": null,
        "dutyAmount": null,
        "dutyTotal": 0,
        "shippingAmount": null,
        "shippingSubTotal": 0,
        "itemLevelShippingDiscountTotal": 0,
        "orderLevelShippingDiscountTotal": 0,
        "shippingTax": null,
        "shippingTaxTotal": 0,
        "shippingTotal": 0,
        "handlingAmount": null,
        "handlingSubTotal": 0,
        "itemLevelHandlingDiscountTotal": 0,
        "orderLevelHandlingDiscountTotal": 0,
        "handlingTax": null,
        "handlingTaxTotal": 0,
        "handlingTotal": 0,
        "taxData": null
      },
      {
        "id": "a617d0eb99a64b9aa1639c23ba5bdbd1",
        "destinationId": null,
        "fulfillmentMethod": "Pickup",
        "orderItemIds": [
          "4f04e2573d264fba9ae5a81d010ae216",
          "8f4230811e6c4a3796aaa81d00d3bb4f",
          "4f04e2573d264fba9ae5a81d010ae217"
        ],
        "shippingMethodCode": null,
        "shippingMethodName": null,
        "shippingDiscounts": null,
        "handlingDiscounts": null,
        "dutyAmount": null,
        "dutyTotal": 0,
        "shippingAmount": null,
        "shippingSubTotal": 0,
        "itemLevelShippingDiscountTotal": 0,
        "orderLevelShippingDiscountTotal": 0,
        "shippingTax": null,
        "shippingTaxTotal": 0,
        "shippingTotal": 0,
        "handlingAmount": null,
        "handlingSubTotal": 0,
        "itemLevelHandlingDiscountTotal": 0,
        "orderLevelHandlingDiscountTotal": 0,
        "handlingTax": null,
        "handlingTaxTotal": 0,
        "handlingTotal": 0,
        "taxData": null
      },
      {
        "id": "7fd4bfebe8d04352abdf8acaede16c70",
        "destinationId": null,
        "fulfillmentMethod": "Ship",
        "orderItemIds": [
          "bb334c3097ed42b6b492a81f00ee0443"
        ],
        "shippingMethodCode": null,
        "shippingMethodName": null,
        "shippingDiscounts": null,
        "handlingDiscounts": null,
        "dutyAmount": null,
        "dutyTotal": 0,
        "shippingAmount": null,
        "shippingSubTotal": 0,
        "itemLevelShippingDiscountTotal": 0,
        "orderLevelShippingDiscountTotal": 0,
        "shippingTax": null,
        "shippingTaxTotal": 0,
        "shippingTotal": 0,
        "handlingAmount": null,
        "handlingSubTotal": 0,
        "itemLevelHandlingDiscountTotal": 0,
        "orderLevelHandlingDiscountTotal": 0,
        "handlingTax": null,
        "handlingTaxTotal": 0,
        "handlingTotal": 0,
        "taxData": null
      }
    ];

    //#endregion
   
    context.get.orderItems = function() {
      return items;
    }
  
    context.get.checkoutGroupings = function() {
      return groupings;
    }
    context.exec.setGroupings = function(g) {
      assert(Array.isArray(g), "g is not an array")
		};   

    Simulator.simulate(actionName, action, context, callback);
  });
  
});
