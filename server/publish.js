Meteor.publish('product', function() {
    return product.find({})
});

Meteor.publish('images', function (){ 
  return images.find({})
});
Meteor.publish('categorys', function (){ 
  return categorys.find({})
});
Meteor.publish('brands', function (){ 
  return brands.find({})
});
Meteor.publish('users', function (){ 
  return users.find({})
});