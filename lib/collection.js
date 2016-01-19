users = Meteor.users;
product = new Mongo.Collection("product");
images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "D:/NOOLAP/sellforce/Esell/public/images"})]

});
categorys = new Mongo.Collection("categorys");
brands = new Mongo.Collection("brands");
