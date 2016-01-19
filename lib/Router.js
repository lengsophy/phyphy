Router.configure({
    layoutTemplate: 'layoutTemplate',
    notFoundTemplate: "notFound"
});
Router.route('/',{
	name:'home'
});/*
Router.route('/register',{
	name:'register'
});
Router.route('/login',{
	name:'login'
});*/
Router.route('/admin/dashboard', {
    name: 'dashboard'
});

//Manage user

Router.route('/admin/manageuser', {
    name: 'manageuser'
});
Router.route('/admin/user/edit/:_id', {
    name: 'updateuser',
     data:function(){
        return Meteor.users.findOne({_id:this.params._id})
    }
});
// Crude product
Router.route('/admin/manageproduct',{
	name: 'manageproduct'
});
Router.route('/admin/listproduct',{
	name: 'listProduct'
});
Router.route('/admin/updateproduct/:_id', {
    name: 'updateProduct',
    data:function(){
        return product.findOne({_id:this.params._id});
    }
});
// Router.route('/products',{
//     name:'products'
// });
// Router.route('/product/:_id',{
//     name:'productdetail',
//     data:function(){
//         return product.findOne({_id:this.params._id});
//     }
// });
// end Crude product
Router.route('/admin/category',{
	name: 'category'
});
Router.route('/admin/category/edit/:_id', {
    name: 'updatecategory',
    data:function(){
        return categorys.findOne({_id:this.params._id});
    }
});
Router.route('/admin/managebrand',{
	name: 'managebrand'
});
Router.route('/detailcategory',{
    name: 'detailcategory'
});
Router.route('/detailproduct',{
    name: 'detailproduct'
});
Router.route('/admin/brand/edit/:_id', {
    name: 'updatebrand',
    data:function(){
        return brands.findOne({_id:this.params._id});
    }
});
Router.route('/add-sale', function () {
  this.render('addSale');
});

