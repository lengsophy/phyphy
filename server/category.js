Meteor.methods({
	insertCat: function(name, date) {
		var attr={
			name:name,
			date:date
		};
		return categorys.insert(attr);
	},
	deleteCat: function(id) {
		categorys.remove(id);
	},
	updateCat: function(id,attr){
		return categorys.update({_id:id},{$set: attr});
	},
});