Template.home.helpers({
	categories: function(){
		return categorys.find({},{limit: 6});
	},
	newProduct:function(){
		return product.find({},{limit: 4});
	},
	popularProduct:function(){
		return product.find({},{limit: 4});
	}

});