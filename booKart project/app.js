var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);  //making a module and name of module is myApp.
																								//2nd parameter "ngRoute" & "ngAnimate" array of other module as dependencies.

myApp.config(function($routeProvider) {   //this config will communicate with ng-view."$routeProvider" is used to tell it to
																					/* communicate with our partial files. */
	$routeProvider
		.when("/books", {     //route url is /book
			templateUrl: "partials/book-list.html",  //templeurl is path to our parcal file.
			controller: "BookListCtrl"    // controller for this parcal
		})
		.when("/kart", {     //link
			templateUrl: "partials/kart-list.html",  //path
			controller: "KartListCtrl"  //controller
		})
		.otherwise({
			redirectTo: "/books"     //This will be the default link when the page loads.
	});
});




//creating a kartservice dependency

myApp.factory("kartService", function() {
	var kart = [];  // we are creating variable kart which can be used to add book to the kart. We need 3 function one to get the kart
									// 2nd functin to add book to the kart and one to buy the book

	return {
			getKart: function() {
							return kart;
							},
			addToKart: function(book) {
							kart.push(book);  					 //console.log("add to kart: ",book); try this to add log to console.
						},
	   	buy: function(book) {
						alert("Thanks for buying: ", book.name);
						}
  	}
});



//creating a dependency for books

myApp.factory("bookService", function() { //we are creating our dependencies. we have 2 parameters "bookService" is name of dependency, factory function.
	var books = [  // we are creating a variable "book" assigning all the data to it. After that we are returning data below
		{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... <a href='#'>View More<a>"
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 227,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 124,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings... View More"
		}
	];

	return {
		getBooks: function() {  // we are creating a getter function which will retunr the selected_books
			return books;
		},
		addToKart: function(book) {

		}
	}
});


////////////////////////////controller are below///////////////////////////////




myApp.controller("KartListCtrl", function($scope, kartService) {   // we are moving our global variables "KartListCtrl" into the module.
	$scope.kart = kartService.getKart();

	$scope.buy = function(book) {
		kartService.buy(book);
		//console.log("buy: ",book);
	}
});

myApp.controller("HeaderCtrl", function($scope,$location) { // we are moving our global variables "HeaderCtrl" into the module.
																	//$location object help us get different part of the url.$location is a angularjs thing
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "Welcome to my book Store";

//	checking if path parameter match with $location.path which is url after html (#/kart or #/book)
	$scope.nav ={};
	$scope.nav.isActive =function(path){
		if(path === $location.path()){
		return true;
		}
	}
});



myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
	$scope.books = bookService.getBooks();   //This will return the list of book. Our data is provided by our service "bookService"

	$scope.addToKart = function(book) {    //adding the book to the kart is responsibility of kart service object. Therefore, we add the kartService dependency next to $scope
		kartService.addToKart(book);
	}
});
