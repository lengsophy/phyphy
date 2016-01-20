//Searchproduct
Template.home.helpers({
    listproducts: function(limit) {
        return product.find({});
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