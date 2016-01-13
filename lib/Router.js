Router.configure({
    layoutTemplate: 'layoutTemplate',
    notFoundTemplate: "notFound"
});
Router.route('/admin/dashboard', {
    name: 'dashboard'
});