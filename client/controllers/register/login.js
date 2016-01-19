Session.set("loginError","");
Template.navigation.events({
    'submit form': function(event,tpl){
		event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
		
        Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
				Bert.alert(error.reason, 'danger', 'fixed-top', 'fa-frown-o');
			} else {
				Bert.alert("login successful!", 'success', 'fixed-top', 'fa-frown-o');
				 var loggedInUser = Meteor.user();
				 var group = 'mygroup';

				var currentRouter1 = Session.get('content');
				var currentRouter2 = Session.get('profile');
				var currentRouter3 = Session.get('addUser');
				var currentRouter4 = Session.get('content');
				if( currentRouter1 == 1){
					Router.go('/content');
				}
				else if( currentRouter2 == 2){
					Router.go('/profile');
				}
				else if (Roles.userIsInRole(loggedInUser, ['admin'], group)) {
					Router.go('/admin/dashboard');
					$('.close').click();
				}
				else if (Roles.userIsInRole(loggedInUser, ['member'], group)) {	
					Router.go('/');
						$('.close').click();
				}
				else{
					Router.go('/');
					 $('.close').click();
				}
			}
		});
    }
	
});

Template.navigation.helpers({
	loginError:function(){
		var msg = Session.get("loginError");
		if( msg ) return true;
		else return false;
	},
	loginErrormsg: function(){
		return Session.get("loginError");
	}
});
