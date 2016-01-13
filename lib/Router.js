Router.configure({
    layoutTemplate: 'layoutTemplate',
    notFoundTemplate: "notFound"
});
Router.route('/admin/dashboard', {
    name: 'dashboard'
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
Router.route('/admin/brand/edit/:_id', {
    name: 'updatebrand',
    data:function(){
        return brands.findOne({_id:this.params._id});
    }
});