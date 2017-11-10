module.exports = function(context, callback) {
	var cart = context.get.cart();
	var cartItem = context.get.cartItem();
	var isHazardousCart = false;

	cart.items.forEach(function(item) {
		item.product.properties.forEach(function(property) {
			if (property.attributeFQN === 'tenant~hazardous') {
				isHazardousCart = true;
			}

			if (isHazardousCart && property.attributeFQN === 'tenant~hazardous') {
				context.exec.removeItem();
			}
		});
	});
	callback();
};