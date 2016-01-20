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

/* Meteor.startup(function () {
//     // The correct way
//     //navigator.geolocation.getCurrentPosition(success));
var obj = [{"name": "Apparel, Textiles & Accessories"},
{"name": "Auto & Transportation"},
{"name": "Electronics"},
{"name": "Machinery, Industrial Parts & Tools"},
{"name": "Gifts, Sports & Toys"},
{"name": "Home, Lights & Construction"},
{"name": "Health & Beauty"},
{"name": "Bags, Shoes & Accessories"},
{"name": "Electrical Equipment, Components & Telecom"},
{"name": "Agriculture & Food"},
{"name": "Packaging, Advertising & Office"},
{"name": "Metallurgy,Chemicals & Plastics"}];

 _.each(obj, function(item) {
      console.log("item "+item.name);
      var attr = {
      	name:item.name
      }
      categorys.insert(attr);
      });
});*/
//  Meteor.startup(function () {
// //     // The correct way
// //     //navigator.geolocation.getCurrentPosition(success));
// var obj = [{"name": "Apparel, Textiles & Accessories"},
// {"name": "Auto & Transportation"},
// {"name": "Electronics"},
// {"name": "Machinery, Industrial Parts & Tools"},
// {"name": "Gifts, Sports & Toys"},
// {"name": "Home, Lights & Construction"},
// {"name": "Health & Beauty"},
// {"name": "Bags, Shoes & Accessories"},
// {"name": "Electrical Equipment, Components & Telecom"},
// {"name": "Agriculture & Food"},
// {"name": "Packaging, Advertising & Office"},
// {"name": "Metallurgy,Chemicals & Plastics"}];

//  _.each(obj, function(item) {
//       console.log("item "+item.name);
//       var attr = {
//       	name:item.name,
//       	price:item.price,
//       	image: item.image,
//       	categoryId: "CvF2z67k52urunTk9"
//       }

//       //categorys.insert(attr);

//       });
// });





//  Meteor.startup(function () {
// //     // The correct way
// //     //navigator.geolocation.getCurrentPosition(success));
// var obj =[
//   {
//     "name":"Horticulture perlite",
//     "price":"US $30-57 / Cubic Meter ( FOB Price); 75 Cubic Meters (Min. Order)",
//     "brandName":"KDH",
//     "manuName":"; Shijiazhuang Kedahua Imp. & Exp. Trade Co., Ltd.; Contact Details; Trade Assurance; 67.8%",
//     "image":"http://sc02.alicdn.com/kf/HTB17_ICIVXXXXbGXpXXq6xXFXXX9/Horticulture-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"1-3mm/ white/ expanded /perlite vermiculite / perlite & vermiuclite /widely used in filfteraid and building",
//     "price":"US $48-90 / Metric Ton ( FOB Price); 1 Metric Ton (Min. Order)",
//     "brandName":"S.M.N",
//     "manuName":"; Shijiazhuang Mining Imp & Exp Trade Co., Ltd.; Contact Details; Trade Assurance; 85.2%",
//     "image":"http://sc01.alicdn.com/kf/HTB1ZFrLKFXXXXckXXXXq6xXFXXXd/1-3mm-white-expanded-perlite-vermiculite-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Slag remover for molten iron slag accretion",
//     "price":"US $320-500 / Metric Ton ( FOB Price); 1 Metric Ton (Min. Order)",
//     "brandName":"2.15-1.12mm",
//     "manuName":"; Xiangtan Hexinsheng New Material Co., Ltd.; Contact Details; 83.3%",
//     "image":"http://sc01.alicdn.com/photo/v0/1697141491/Slag_remover_for_molten_iron_slag_accretion.jpg_220x220.jpg"
//   },
//   {
//     "name":"Slag Remover for Cast Iron",
//     "price":"US $888-999 / Ton ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"kagalite",
//     "manuName":"; Qingdao FSK Foundry Materials Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/kf/HTB1vn.YHpXXXXbHXVXXq6xXFXXXn/Slag-Remover-for-Cast-Iron.jpg_220x220.jpg"
//   },
//   {
//     "name":"expanded/raw perlite powder seller",
//     "price":"US $50-100 / Ton ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"HYKY",
//     "manuName":"; Hebei Hiwin Mineral Products Co., Ltd.; Contact Details; 75.0%",
//     "image":"http://sc01.alicdn.com/kf/HTB1OgXPKVXXXXcTXFXXq6xXFXXXP/expanded-raw-perlite-powder-seller.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded Perlite for Cryogenic Insulation",
//     "price":"US $20-30 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Tianjin Incom Science & Technology Co., Ltd.; Contact Details; 0.0%",
//     "image":"http://sc02.alicdn.com/kf/HTB1Z1LtHVXXXXXSXVXXq6xXFXXXs/Expanded-Perlite-for-Cryogenic-Insulation.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded Perlite Powder .perlite ore",
//     "price":"US $30-70 / Ton ( FOB Price); 500 Kilograms (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Hebei Chuangsen Technology Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/kf/HTB1DN9UJVXXXXaVXVXXq6xXFXXXg/Expanded-Perlite-Powder-perlite-ore.jpg_220x220.jpg"
//   },
//   {
//     "name":"Horticulture Perlite",
//     "price":"US $29.5-58 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; MURAT OGUZ ALTUNTAS BRODEKS IC VE DIS TICARET; Contact Details; 5.6%",
//     "image":"http://sc01.alicdn.com/kf/UT87Q2WXtBXXXagOFbXe/Horticulture-Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"4-8mm horticulture Expanded perlite for potting Substrate",
//     "price":"US $62-100 / Cubic Meter ( FOB Price); 5 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; DFL Minmet Refractories Corp.; Contact Details; Trade Assurance; 62.5%",
//     "image":"http://sc01.alicdn.com/photo/v0/60085121124/4_8mm_horticulture_Expanded_perlite_for_potting.jpg_220x220.jpg"
//   },
//   {
//     "name":"Agricultural perlite for sale",
//     "price":"US $38-46 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Shijiazhuang Kedahua Imp. & Exp. Trade Co., Ltd.; Contact Details; Trade Assurance; 67.8%",
//     "image":"http://sc02.alicdn.com/kf/HTB1LVsNJXXXXXawXVXXq6xXFXXX7/Agricultural-perlite-for-sale.jpg_220x220.jpg"
//   },
//   {
//     "name":"Horticultural And Agriculture Expanded Perlite Sale Price",
//     "price":"US $100-500 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Dalian Jufeng Ruisheng Int'l Trading Co., Ltd.; Contact Details; Trade Assurance; 88.9%",
//     "image":"http://sc01.alicdn.com/photo/v20/1674862109_1/Horticultural_And_Agriculture_Expanded_Perlite_Sale_Price.jpg_220x220.jpg"
//   },
//   {
//     "name":"perlite ore",
//     "price":"US $80-90 / Ton ( FOB Price); 25 Tons (Min. Order)",
//     "brandName":"13.13",
//     "manuName":"; VINAYAK GYPSUM AND INTERIORS PRIVATE LIMITED; Contact Details; 15.0%",
//     "image":"http://sc01.alicdn.com/kf/HTB1l7VLKFXXXXa2XVXXq6xXFXXXQ/perlite-ore.jpg_220x220.jpg"
//   },
//   {
//     "name":"Raw & Expanded Perlite",
//     "price":"US $25-50 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; RAHBORD TEJARAT SABA CO; Contact Details",
//     "image":"http://sc01.alicdn.com/photo/v0/158427656/Raw_Expanded_Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Horticultural Soil Amendment Expanded Perlite",
//     "price":"US $30-50 / Cubic Meter ( FOB Price); 30 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Garden Industrial (Dalian) Co., Ltd.; Contact Details; Trade Assurance; 97.0%",
//     "image":"http://sc02.alicdn.com/kf/HTB1_4DJHpXXXXc1XVXXq6xXFXXXU/Horticultural-Soil-Amendment-Expanded-Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded Perlite Nanoclay",
//     "price":"US $10-100 / Case ( FOB Price); 1 Kilogram (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; INTELLIGENT MATERIALS PRIVATE LIMITED; Contact Details; 60.0%",
//     "image":"http://sc01.alicdn.com/kf/HTB1MQ6wJVXXXXb2XFXXq6xXFXXX4/Expanded-Perlite-Nanoclay.jpg_220x220.jpg"
//   },
//   {
//     "name":"High Quality Agriculture Insulation Perlite Board",
//     "price":"10 Cubic Meters (Min. Order)",
//     "brandName":"construction",
//     "manuName":"; Wuxi Tianyin Refractories Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/kf/HTB1X7V7HpXXXXcWapXXq6xXFXXXF/High-Quality-Agriculture-Insulation-Perlite-Board.jpg_220x220.jpg"
//   },
//   {
//     "name":"Density 60-90kg/m3 Expanded perlite",
//     "price":"US $0-60 / Cubic Meter ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Pingxiang Kangyu New Power Technology Co., Ltd.; Contact Details; Trade Assurance; 78.3%",
//     "image":"http://sc01.alicdn.com/kf/HTB1fn5yHFXXXXc3XXXXq6xXFXXXR/Density-60-90kg-m3-Expanded-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Perlite Sand",
//     "price":"US $800.00-999.00 / Ton ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"CASTING",
//     "manuName":"; Qingdao FSK Foundry Materials Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/photo/v0/1082794947_1/Perlite_Sand.jpg_220x220.jpg"
//   },
//   {
//     "name":"LangFang Pearly sand or Expanded perlite",
//     "price":"US $18-20 / Cubic Meter ( FOB Price); 50 Cubic Meters (Min. Order)",
//     "brandName":"CN;HEB",
//     "manuName":"; Yongqing Julide Chemical Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/kf/HTB1SDKMLpXXXXb_aXXXq6xXFXXXi/LangFang-Pearly-sand-or-Expanded-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded/kiln insulation/gardening/wall insualtion/heat insulation perlite",
//     "price":"US $56-99 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; DFL Minmet Refractories Corp.; Contact Details; Trade Assurance; 45.2%",
//     "image":"http://sc01.alicdn.com/kf/HTB19e.7IXXXXXb7XVXXq6xXFXXXk/Expanded-kiln-insulation-gardening-wall-insualtion-heat.jpg_220x220.jpg"
//   },
//   {
//     "name":"SLAG REMOVER",
//     "price":"20 Metric Tons (Min. Order)",
//     "brandName":"Unexpanded",
//     "manuName":"; SHINIL EDI; Contact Details",
//     "image":"http://sc02.alicdn.com/kf/UT8hlUtXepcXXagOFbXD/SLAG-REMOVER.jpg_220x220.jpg"
//   },
//   {
//     "name":"Perlite Filter Aid Fa",
//     "price":"",
//     "brandName":"",
//     "manuName":"; UNITED PERLITE CORPORATION; Contact Details",
//     "image":"http://sc01.alicdn.com/photo/v0/50011992096/Perlite_Filter_Aid_Fa.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded Perlite",
//     "price":"",
//     "brandName":"SA",
//     "manuName":"; ARABIAN VERMICULITE INDUSTRIES; Contact Details",
//     "image":"http://sc01.alicdn.com/photo/v1/141794507/Expanded_Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"High quality Horticulture Expanded Perlite",
//     "price":"US $100-300 / Metric Ton ( FOB Price); 1 Metric Ton (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Dalian Holy Trading Co., Ltd.; Contact Details; Trade Assurance; 25.6%",
//     "image":"http://sc02.alicdn.com/kf/HTB1vdFyIVXXXXbvXpXXq6xXFXXX5/High-quality-Horticulture-Expanded-Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"EZFlow 20 - Milled Expanded Perlite Filter Aid Powder",
//     "price":"US $700-1100 / Tonne ( FOB Price); 18 Tonnes (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; ALUMINIUM PROFESSIONALS AUSTRALIA; Contact Details; 2.9%",
//     "image":"http://sc01.alicdn.com/kf/HTB1vaiGKpXXXXaBaXXXq6xXFXXXG/EZFlow-20-Milled-Expanded-Perlite-Filter-Aid.jpg_220x220.jpg"
//   },
//   {
//     "name":"Shijiazhuang ShengPing Brand Horticultural Soil Amendment Expanded Perlite",
//     "price":"US $30-95 / Cubic Meter ( FOB Price); 10 Metric Tons (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Shijiazhuang Shengping Minerals Co., Ltd.; Contact Details; Trade Assurance; 75.0%",
//     "image":"http://sc02.alicdn.com/kf/HTB1ur8DJpXXXXc4XFXXq6xXFXXX2/Shijiazhuang-ShengPing-Brand-Horticultural-Soil-Amendment-Expanded.jpg_220x220.jpg"
//   },
//   {
//     "name":"Perlite - Size: 0-1 & 1-2 mm - Suitable for Insulation & Horticulture",
//     "price":"US $75-81 / Metric Ton ( FOB Price)",
//     "brandName":"Fillers, lightweight plaster cement, plaster mortar and concrete, etc",
//     "manuName":"; MARJAN GOLDEN TRADING; Contact Details",
//     "image":"http://sc02.alicdn.com/kf/UT8aO9lXpRaXXagOFbXo/Perlite-Size-0-1-1-2-mm.jpg_220x220.jpg"
//   },
//   {
//     "name":"3-6mm horticulture perlite as soil fertilizer",
//     "price":"US $50-60 / Cubic Meter ( FOB Price); 15 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Shijiazhuang Rijia Import&Export Trading Co., Ltd.; Contact Details; Trade Assurance; 66.7%",
//     "image":"http://sc01.alicdn.com/kf/HTB1wcBTKFXXXXXRXFXXq6xXFXXXL/3-6mm-horticulture-perlite-as-soil-fertilizer.jpg_220x220.jpg"
//   },
//   {
//     "name":"SUNSHINE BRAND 3-6mm horticulture expanded perlite",
//     "price":"US $49-70 / Cubic Meter ( FOB Price); 5 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Laizhou Sunshine Trading Co., Ltd.; Contact Details; Trade Assurance; 100%",
//     "image":"http://sc01.alicdn.com/kf/HTB1r9ynJXXXXXazXVXXq6xXFXXXr/SUNSHINE-BRAND-3-6mm-horticulture-expanded-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"4-8MM/3-6MM/2-4MM/1-3MM Expanded Perlite",
//     "price":"US $0.049-0.055 / Liter ( FOB Price); 1000 Liters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Tianjin Haohang International Trade Co., Ltd.; Contact Details; Trade Assurance; 86.7%",
//     "image":"http://sc01.alicdn.com/photo/v1/1317579938/4_8MM_3_6MM_2_4MM_1.jpg_220x220.jpg"
//   },
//   {
//     "name":"High Quality Perlite for sale",
//     "price":"US $80-152 / Cubic Meter ( FOB Price); 15 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Lingshou County Jiaqi Mineral Processing Factory; Contact Details; Trade Assurance; 29.9%",
//     "image":"http://sc02.alicdn.com/kf/HTB1rO2.KpXXXXbvXXXXq6xXFXXXh/High-Quality-Perlite-for-sale.jpg_220x220.jpg"
//   },
//   {
//     "name":"325 mesh chinese factory high purity good quality high efficiency Expanded Perlite used for filter aid",
//     "price":"US $18.05-33.72 / Cubic Meter ( FOB Price); 5 Tons (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Shijiazhuang Banyue Imp & Exp Trade Co., Ltd.; Contact Details; 65.7%",
//     "image":"http://sc01.alicdn.com/photo/v0/60164633557/325_mesh_chinese_factory_high_purity_good.jpg_220x220.jpg"
//   },
//   {
//     "name":"high quality expanded agricultural perlite",
//     "price":"US $368-400 / Ton ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Hebei Penglong Technology Co., Ltd.; Contact Details; Trade Assurance; 55.9%",
//     "image":"http://sc02.alicdn.com/kf/HTB1H1ghIFXXXXXfXVXXq6xXFXXXB/high-quality-expanded-agricultural-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Gardening white color expanded perlite powder",
//     "price":"US $0-30 / Cubic Meter ( FOB Price); 1 Cubic Meter (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Longdan International Trading (Shanghai) Co., Ltd.; Contact Details; Trade Assurance; 71.1%",
//     "image":"http://sc02.alicdn.com/kf/HTB1KL9yKpXXXXXxXFXXq6xXFXXXu/Gardening-white-color-expanded-perlite-powder.jpg_220x220.jpg"
//   },
//   {
//     "name":"Expanded Perlite",
//     "price":"US $230-250 / Metric Ton ( FOB Price); 6 Metric Tons (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Tianjin Elong Co., Ltd.; Contact Details; Trade Assurance; 74.5%",
//     "image":"http://sc01.alicdn.com/kf/HTB1E.ThKFXXXXbJXpXXq6xXFXXXu/Expanded-Perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"Perlite expanded /3-6mm4-8mm/agricultural and hydroponics grade",
//     "price":"US $48-90 / Metric Ton ( FOB Price); 5 Metric Tons (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Shijiazhuang Mining Imp & Exp Trade Co., Ltd.; Contact Details; Trade Assurance; 85.2%",
//     "image":"http://sc02.alicdn.com/kf/HTB1wpn0KVXXXXaOXXXXq6xXFXXXK/Perlite-expanded-3-6mm4-8mm-agricultural-and.jpg_220x220.jpg"
//   },
//   {
//     "name":"expanded perlite",
//     "price":"US $18-50 / Piece ( FOB Price)",
//     "brandName":"Various underground construction",
//     "manuName":"; Zhangjiagang Tianyuan Machinery Manufacturing Co., Ltd.; Contact Details; Trade Assurance; 37.5%",
//     "image":"http://sc02.alicdn.com/kf/HTB1NtbWKVXXXXakXFXXq6xXFXXXK/expanded-perlite.jpg_220x220.jpg"
//   },
//   {
//     "name":"cheap expanded perlite powder",
//     "price":"US $50-100 / Ton ( FOB Price); 1 Ton (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Hebei Hiwin Mineral Products Co., Ltd.; Contact Details; 75.0%",
//     "image":"http://sc01.alicdn.com/kf/HTB1bOdEKVXXXXXMaXXXq6xXFXXXU/cheap-expanded-perlite-powder.jpg_220x220.jpg"
//   },
//   {
//     "name":"Hot sale!!China factory perlite insulation in garden, chemival and filtration in perlite",
//     "price":"1 Metric Ton (Min. Order)",
//     "brandName":"Unexpanded",
//     "manuName":"; Shanghai Baijin Chemical Group Co., Ltd.; Contact Details",
//     "image":"http://sc01.alicdn.com/kf/HTB1uzXhHFXXXXcNXXXXq6xXFXXXG/Hot-sale-China-factory-perlite-insulation-in.jpg_220x220.jpg"
//   },
//   {
//     "name":"perlite and expanded vermiculite",
//     "price":"US $98-205 / Ton ( FOB Price); 5 Tons (Min. Order)",
//     "brandName":"water proof",
//     "manuName":"; Shijiazhuang Jinli Mineral Co., Ltd.; Contact Details; Trade Assurance; 70.4%",
//     "image":"http://sc02.alicdn.com/kf/HTB18qykKpXXXXXDXFXXq6xXFXXXC/perlite-and-expanded-vermiculite.jpg_220x220.jpg"
//   },
//   {
//     "name":"perlite powder",
//     "price":"US $335-370 / Ton ( FOB Price); 20 Tons (Min. Order)",
//     "brandName":"used for agar",
//     "manuName":"; Tianjin Credit International Co., Ltd.; Contact Details; Trade Assurance; 61.4%",
//     "image":"http://sc02.alicdn.com/kf/HTB12rhGIVXXXXaUXVXXq6xXFXXXR/perlite-powder.jpg_220x220.jpg"
//   },
//   {
//     "name":"Perlite Slag Remover for clearing molten steel",
//     "price":"US $200-300 / Metric Ton ( FOB Price); 20 Metric Tons (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Lianyungang Jinli Carbon Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/photo/v0/60041223065/Perlite_Slag_Remover_for_clearing_molten_steel.jpg_220x220.jpg"
//   },
//   {
//     "name":"Horticulture Expanded perlite",
//     "price":"US $50-100 / Cubic Meter ( FOB Price); 72 Cubic Meters (Min. Order)",
//     "brandName":"Expanded",
//     "manuName":"; Gansu Jinshi Chemical Co., Ltd.; Contact Details; Trade Assurance",
//     "image":"http://sc01.alicdn.com/photo/v1/501061693/Horticulture_Expanded_perlite.jpg_220x220.jpg"
//   }
// ];

//  _.each(obj, function(item) {
//       console.log("item "+item.name);
//       var attr = {
//       	name:item.name,
//       	price:item.price,
//       	image: item.image,
//       	categoryId: "5WAi5s5DqM7JPksJh",
//       	brandName: item.brandName,
//       	ma_name: item.manuName
//       }
//       //product.insert(attr);
//       });
// });