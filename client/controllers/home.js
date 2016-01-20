
Template.home.helpers({
	categories: function(){
		return categorys.find({},{limit: 6});
	},
	newProduct:function(){
		return product.find({},{limit: 4});
	},
	popularProduct:function(){
		return product.find({},{limit: 4});
	},
     getImage: function(id) {
        var img = images.findOne({
            _id: id
        });
        if (img) {
            console.log(img.copies.images.key);
            return img.copies.images.key;
        } else {
            return;
        }
    }
});