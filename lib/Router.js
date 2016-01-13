Router.configure({
    layoutTemplate: 'layoutTemplate',
    notFoundTemplate: "notFound"
});
Router.route('/',{
	name:'home'
});
Router.route('/register',{
	name:'register'
});
Router.route('/login',{
	name:'login'
});
Router.route('/admin/dashboard', {
    name: 'dashboard'
});

