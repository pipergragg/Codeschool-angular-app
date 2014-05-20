(function(){
  var app = angular.module('gemStore', []);
   app.controller("PanelController", function(){
   	this.tab=3; 
   	this.selectTab= function(setTab) {
   		this.tab = setTab;
   	};
   	this.isSelected = function(checkTab){
   		return this.tab ===checkTab;
   	};
   });

   app.controller('ReviewController', function(){
   	this.review = {};

   	this.addReview = function(product) {
   		product.reviews.push(this.review);
   	};
   });

   app.controller('StoreController', function(){
   	this.products = gems;
   });

   var gems= [
   {
   	name: 'Dodecahedron',
   	price: 110.5,
   	description: "This is the description, in the app.js!",
   	canPurchase: true ,
   	soldOut: false,
   	images: [{full: 'dodecahedron-01-full.jpg',thumb: 'dodecahedron-01-full.jpg'}], 	
   	reviews: [
   	{stars:5,body: "I love this.",author: "joe@thomas.com"},
   	{stars:1,body: "I Do NOT love this.",author: "Minnie@h8er.com"}]
   },
   {
   	name: 'Pentagonal Gem',
   	price: 100.25,
   	description: "Such a nice gem, Penta!",
   	canPurchase: true ,
   	soldOut: false,
   	images: [{full: 'dodecahedron-01-full.jpg',thumb: 'dodecahedron-01-full.jpg'}], 	
   	reviews: [
   	{stars:5,body: "I love this.",author: "joe@thomas.com"},
   	{stars:1,body: "I Do NOT love this.",author: "Minnie@h8er.com"}]
   },

   ];

})();