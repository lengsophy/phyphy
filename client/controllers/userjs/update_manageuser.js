Template.updateuser.helpers({
	showUser: function(){
		return Meteor.users.find({});
	},
	 getrole: function(per){
        return per.mygroup[0];
    },
    allrole: function(){
        return Meteor.roles.find({});
    }
});

//Click to update Accounts
Template.updateuser.events({
    "submit form": function (e,tpl){
        e.preventDefault();
        id = this._id;
        var firstname = tpl.$('#firstname').val();
        var lastname = tpl.$('#lastname').val();
        var email = tpl.$('#email').val();
        var role = tpl.$('#role').val();
        var image =$('#image').val();
        var img_id = Session.get('UPDATEIMAGEID');
        var attrRole={
            mygroup:[role]
        };
        Meteor.call('editUsers',id,firstname,lastname,email,img_id);
        Meteor.call('updateRole',id,attrRole);
        Router.go('/admin/manageuser');
    },
    'change #image': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        Session.set('UPDATEIMAGEID', fileObj._id);
      });
    }
  }
});

//validation on manage user update form
Template.updateuser.onRendered( function() {
  $( "#editUsers" ).validate({
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      email: {
        required: true
      },
       password: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      firstname: {
        required: "<p style='color:red;'>Please enter your first name!</p>"
      },
      lastname: {
        required: "<p style='color:red;'>Please enter your lastname!</p>"
      },
      email: {
        required: "<p style='color:red;'>Please enter your valid email!</p>"
      },
      password: {
        required: "<p style='color:red;'>Please enter your password!</p>",
        minlength: "<p style='color:red;'>Use at least 4 characters, please.</p>"
      }
    }
  });
});
