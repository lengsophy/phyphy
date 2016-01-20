Meteor.startup(function(){
   process.env.MAIL_URL="smtp://chaksaray%40gmail.com:cccsaray@smtp.gmail.com:465/";});
Meteor.methods({
  sendEmail: function (html) {
    //check([text], [String]);

    this.unblock();

    Email.send({
      to: 'saray.chak007@gmail.com',
      from: 'chaksaray@gmail.com',
      subject: 'Order Products',
      html: html
    });
  }
});

// // In your server code: define a method that the client can call
// Meteor.methods({
//   sendEmail: function (to, from, subject, text) {
//     check([to, from, subject, text], [String]);

//     // Let other method calls from the same client start running,
//     // without waiting for the email sending to complete.
//     this.unblock();

//     //actual email sending method
//     Email.send({
//       to: to,
//       from: from,
//       subject: subject,
//       text: text
//     });
//   }
// });









// ---server---
// Meteor.startup(function () {
//    //  process.env.MAIL_URL="smtp://tinhamly%40gmail.com:0977484889@smtp.gmail.com:465/";
//      process.env.MAIL_URL="smtp://houttyty7%40gmail.com:tytyhout7@smtp.gmail.com:465/";
// });
// Meteor.methods({
//   mysendEmail: function (to, subject, html) {
//     this.unblock();
//     Email.send({
//       to: to,
//       from: 'houttyty7@gmail.com',
//       subject: subject,
//       html: html
//     });
//   }
// });
// ---------------controller
// ----------
// // In your client code: asynchronously send an email
// // send mail
// Template.sendmail.events({
//     'click #submit': function(event, tmp){
//      event.preventDefault();


//      var subject = $('#subject').val();
//      var to = $('#email').val();
//      var text = $('#message').val();

//         var dataContext={
//           message:"Hello!",
//           url:"http://noo-lab.com",
//           title:"Join with us, click me !"
//         };
//         var html=Blaze.toHTMLWithData(Template.shareEmailContent,dataContext);
//      Meteor.call('mysendEmail',to,subject,html,function(err){
//             if(err){
//                 console.log("error"+err.reason);
//             }
//         });
//      Router.go('/sendmail');
     
//     }

// });