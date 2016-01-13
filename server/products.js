Meteor.methods({
	insertproduct: function(attr){
		return product.insert(attr);
	},
	removeProduct: function(id) {
		product.remove(id);
	},
	updateproducts: function(id,attr){
		return product.update({_id:id},{$set: attr});
	}
});
