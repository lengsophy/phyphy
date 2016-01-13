Template.category.events({
	"submit form": function(e, tpl) {
		 e.preventDefault();
		var name=tpl.$("#catname").val();
		var date= new Date();
		Meteor.call('insertCat', name, date);
		
	} 
});
//Category form validation
Template.category.onRendered( function() {
  $( "#addCategory" ).validate({
    rules: {
      catname: {
        required: true
      }
    },
    messages: {
      catname: {
        required: "<p style='color:red;'>Please enter your category name!</p>"
      }
    }
  });
});

Template.category.helpers({
	allCategory: function(){
		return categorys.find({});
	}
});
Template.category.events({
	"click #remove": function(e, tpl) {
		var id=this._id;
		Meteor.call('deleteCat', id);
		
	} 
});
Template.updatecategory.events({
	"click #updatecat": function(e, tpl) {
		var id=this._id;
		var name=tpl.$("#catname").val()
		var attr={
	  		name:name
	  	};
		Meteor.call('updateCat',id,attr);
		Router.go("category");
	} 
});

//form validation
Template.updatecategory.onRendered( function() {
$("#categories").validate({
    rules: {
      catname: {
        required: true
      }
    },
    messages: {
      catname: {
        required: "<p style='color:red;'>Please enter your category name!</p>"
      }
    }
  });
});