Template.addSale.events({
	'submit form#contactForm':function(e){
		var contactForm = $(e.currentTarget),
			fname = contactForm.find('#firstName').val(),
			lname = contactForm.find('#lastName').val(),
			email = contactForm.find('#email').val(),
			phone = contactForm.find('#phone').val(),
			message = contactForm.find("#message").val();
		//isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
		if(fname !="" && lname!="" && email!="" && phone!="" && message!="" && email!=""){
			//var dataText = "Message from: " + fname + " " + lname + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:" + message;
			 var dataText={
			 	From:fname,
          		Phone:phone,
          		Email: email,
          		Message:message
        };
			//Meteor.call('sendEmail', dataText);
			 var html=Blaze.toHTMLWithData(Template.shareEmailContent,dataText);
    			 Meteor.call('sendEmail',html,function(err){
           		if(err){
	                console.log("error"+err.reason);
	            }
       		 });
			//throwAlert is my helper method which creates popup with message
			//throwAlert('Email send.', 'success');
		}else{
			//throwAlert('An error occurred. Sorry', 'error');
			return false;
		}
	}
});