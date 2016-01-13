Router.configure({
	layoutTemplate:'layoutTemplate'
});
Router.route('/', function () {
  this.render('index');
});
