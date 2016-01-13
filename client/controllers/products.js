Template.manageproduct.events({
    "submit form": function(e, tpl) {
        e.preventDefault();
        alert("You submit success");
        var title = tpl.$("#title").val();
        var description = tpl.$("#description").val();
        var price = tpl.$("#price").val();
        var category = tpl.$("#category").val();
        var brand = tpl.$("#brand").val();
        var image = tpl.$("#txtimg").val();
        var img_id = Session.get('ADDIMAGEID');
        if (typeof img_id === 'undefined') {
            img_id = "";
        }
        var attr = {
            title: title,
            description: description,
            price: price,
            category_id:category,
            brand_id: brand,
            image_id: img_id
        };
        Meteor.call('insertproduct', attr,function(err){
            if(err){
                console.log('manageproduct err'+err.reason);
            }else{
                Router.go("/admin/listproduct")
            }
        });
    },
    'change #txtimg': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            images.insert(files[i], function(err, fileObj) {
                Session.set('ADDIMAGEID', fileObj._id);
            });
        }
    }
});

// helpers displays category in manageproduct
Template.manageproduct.helpers({
    allCategory:function(){
        return categorys.find({},{sort: {name:1}});
    }
});

// helpers displays brand in manageproduct
Template.manageproduct.helpers({
    allBrand:function(){
        return brands.find({},{sort: {title:1}});
    }
});

// validation manageproduct
Template.manageproduct.onRendered( function() {
  $( "#add-product" ).validate({
    rules: {
      productTitle: {
        required: true
      },
      price: {
        required: true,
        digits: true
      },
      description: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      productTitle: {
        required: "<p style='color:red;'>Enter product title here!</p>"
      },
      price: {
        required: "<p style='color:red;'>Enter price here!</p>",
        digits: "<p style='color:red;'>Enter number only!</p>"
      },
      description: {
        required: "<p style='color:red;'>Enter your description here!</p>",
        minlength:"<p style='color:red;'>Please enter description at least 10 character</p>"
      }
    }
  });
});


//list product template
// helpers to display category
Template.listProduct.helpers({
    categoryName: function(id) {
        return categorys.findOne({
            _id: id
        });
    }
});

// helpers to display brand
Template.listProduct.helpers({
    brandName: function(id) {
        return brands.findOne({
            _id: id
        });
    }
});

//list product
Template.listProduct.helpers({
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
// remove product
Template.listProduct.events({
    "click #removeProduct": function(e, tpl) {
        var id = this._id;
        Meteor.call('removeProduct', id);
    }
});

// search product
Template.listProduct.helpers({
  allProduct: function() {
    return product.find({}).limit(5);
  },
  
  getImage: function(id){
    var img = images.findOne({_id:id});
    if(img){
        console.log(img.copies.images.key);
        return img.copies.images.key;
        }else{
            return;
        }
  }

});

Template.listProduct.events({  
  'click .loadmore': function(e,tpl){
    console.log('click');
    
  }

});

// update product
Template.updateProduct.events({
    "submit form": function(e, tpl) {
        e.preventDefault();
        var id = this._id;
        var title = tpl.$("#title").val();
        var description = tpl.$("#description").val();
        var price = tpl.$("#price").val();
        var category = tpl.$("#category").val();
        var brand = tpl.$("#brand").val();
        var img_id = Session.get('UPDATEIMAGEID');
        var attr = {
            title: title,
            description: description,
            price: price,
            category_id: category,
            brand_id: brand,
            image_id: img_id
        };
        Meteor.call('updateproducts', id, attr);
        Router.go("/admin/listProduct");
    },
    'change #txtimg': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            images.insert(files[i], function(err, fileObj) {
                Session.set('UPDATEIMAGEID', fileObj._id);
            });
        }
    }
});

// dipaly Brand and Cetegory
Template.updateProduct.helpers({
    getcategeory:function(id){
        var categoryid =id;
        var getcategeory =  categorys.find({_id:categoryid});
        return getcategeory;
    },
    allCategory: function(categoryid){
        return categorys.find({});
    },
    allBrand: function(brandid){
        return brands.find({});
    }
});


// validation update product
Template.updateProduct.onRendered( function() {
  $( "#updateProducts" ).validate({
    rules: {
      productTitle: {
        required: true
      },
      price: {
        required: true,
        digits: true
      },
      description: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      productTitle: {
        required: "<p style='color:red;'>Enter product title here!</p>"
      },
      price: {
        required: "<p style='color:red;'>Enter price here!</p>",
        digits: "<p style='color:red;'>Enter number only!</p>"
      },
      description: {
        required: "<p style='color:red;'>Enter your description here!</p>",
        minlength:"<p style='color:red;'>Please enter description at least 10 character</p>"
      }
    }
  });
});
