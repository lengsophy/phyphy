//Delete users
Template.manageuser.events({
    "click #remove":function (){
       id=this._id;
      Meteor.call('deleteuser',id);
    }
});