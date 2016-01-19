Meteor.methods({
	insertproduct: function(attr){
		return product.insert(attr);
	},
	removeProduct: function(id) {
		product.remove(id);
	},
	updateproducts: function(id,attr){
		return product.update({_id:id},{$set: attr});
	}
});

//  Meteor.startup(function () {
// //     // The correct way
// //     //navigator.geolocation.getCurrentPosition(success));
// var obj = [{"price": "US $ 0~8", "name": "anti-slip tru sox football sock/sport luxury socks", "image": "http://g03.s.alicdn.com/kf/HTB1cELGHpXXXXbWXFXXq6xXFXXXM/anti-slip-tru-sox-football-sock-sport.jpg_220x220.jpg"},
// {"price": "US $ 0.88~2", "name": "2015 made in China compression sock custom football sock wholesale soccer sock", "image": "http://g03.s.alicdn.com/kf/HTB1OHNgIVXXXXafXVXXq6xXFXXXG/2015-made-in-China-compression-sock-custom.jpg_220x220.jpg"},
// {"price": "US $ 0.8~0.95", "name": "Woman Striped Football Socks", "image": "http://i00.i.aliimg.com/photo/v8/621655182_1/Woman_Striped_Football_Socks.jpg_220x220.jpg"},
// {"price": "US $ 0.9~2.4", "name": "Royal Gold Sports Compression Football Soccer Socks/Wholesale Custom Own Logo Socks/Compression Socks Mens---AMY154171", "image": "http://sc02.alicdn.com/kf/HTB1EpBuHFXXXXaaXFXXq6xXFXXX3/Royal-Gold-Sports-Compression-Football-Soccer-Socks.jpg_220x220.jpg"},
// {"price": "US $ 2~4.48", "name": "crossfit football socks promotional football sock solid football socks", "image": "http://g03.s.alicdn.com/kf/HTB1yNDSKpXXXXctXFXXq6xXFXXX0/crossfit-football-socks-promotional-football-sock-solid.jpg_220x220.jpg"},
// {"price": "US $ 2.5~5", "name": "custom non slip socks/custom football socks wholesale", "image": "http://g02.s.alicdn.com/kf/HTB1j1FcLXXXXXXvXpXXq6xXFXXXq/custom-non-slip-socks-custom-football-socks.jpg_220x220.jpg"},
// {"price": "US $ 0.4~0.9", "name": "Knee High Crossfit Football Socks", "image": "http://g02.s.alicdn.com/kf/HTB1OzfBKpXXXXbxXXXXq6xXFXXXA/Knee-High-Crossfit-Football-Socks.jpg_220x220.jpg"},
// {"price": "US $ 0.5~0.9", "name": "new fashion style cotton sport football sock", "image": "http://g01.s.alicdn.com/kf/HTB1_WEbHFXXXXaEXpXXq6xXFXXXU/new-fashion-style-cotton-sport-football-sock.jpg_220x220.jpg"},
// {"price": "US $ 0.60~1.30", "name": "football socks", "image": "http://g01.s.alicdn.com/kf/HTB1uXvDKFXXXXaLXVXXq6xXFXXXv/football-socks.jpg_220x220.jpg"},
// {"price": "US $ 0.05~0.8", "name": "custom logo soccer football sport sock elite basketball running cycling socks boot socks", "image": "http://g01.s.alicdn.com/kf/HTB1Lr6AKVXXXXX0XpXXq6xXFXXXh/custom-logo-soccer-football-sport-sock-elite.jpg_220x220.jpg"},
// {"price": "US $ 0.5~0.8", "name": "bulk wholesale football socks /athletic socks/elite basketball socks", "image": "http://sc01.alicdn.com/kf/HTB1OrDdKXXXXXbhXpXXq6xXFXXXG/bulk-wholesale-football-socks-athletic-socks-elite.jpg_220x220.jpg"},
// {"price": "US $ 1.29~3.59", "name": "football socks provider wholesale plain white tube socks", "image": "http://g02.s.alicdn.com/kf/HTB1bpiSKXXXXXcAXXXXq6xXFXXXt/football-socks-provider-wholesale-plain-white-tube.jpg_220x220.jpg"},
// {"price": "US $ 2.49~4.49", "name": "compression sock , wholesale soccer sock , custom football sock", "image": "http://sc01.alicdn.com/kf/HTB1jQWeIXXXXXcKXpXXq6xXFXXX0/compression-sock-wholesale-soccer-sock-custom-football.jpg_220x220.jpg"},
// {"price": "US $ 0.4~1.2", "name": "silk basketball sock\tH0T658\tblack football basketball socks", "image": "http://sc01.alicdn.com/kf/HTB1Pr7eJXXXXXaXXpXXq6xXFXXXB/silk-basketball-sock-H0T658-black-football-basketball.jpg_220x220.jpg"},
// {"price": "US $ 1.6~1.8", "name": "Long bulk wholesale custom colorful football /soccer thigh high socks", "image": "http://g03.s.alicdn.com/kf/HTB1sr6hIpXXXXaqXFXXq6xXFXXXl/Long-bulk-wholesale-custom-colorful-football-soccer.jpg_220x220.jpg"}
// ];

//  _.each(obj, function(item) {
//       console.log("item "+item.name);
//       var attr = {
//       	name:item.name
//       }
//       categorys.insert(attr);
//       });
// });