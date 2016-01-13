users = Meteor.users;
product = new Mongo.Collection("product");
images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "/home/rakmsey/Desktop/alibaba/phyphy/public/images"})]

});
categorys = new Mongo.Collection("categorys");
brands = new Mongo.Collection("brands");
