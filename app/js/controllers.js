/* 'use strict';
Controllers 

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
*/

// Chapter 0
/*angular.module('myApp.controllers', []).controller('FinanceController', function(this){
	this.salary = 0;
	this.percentage = 0;
	this.result = function(){
		return $f.salary * this.percentage * 0.01;
	};
});*/

// Chapter 1
/*
(function(){
angular.module('firstModule',[]).controller('firstCOntroler', function(){
	// register a controller
	// your rocking controller
}).directive('firstDirective', function(){
	// register a directive
	return {

	};
});
angular.module('secondModule',['moduleA','moduleB']);
})();*/

angular.module('myApp',[]).controller('GreetingController', function($scope){
	this.now = new Date();
	this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
	this.greeting = this.helloMessages[1];
	this.getRandomHelloMessage = function(){
	this.greeting = this.helloMessages[parseInt((Math.random() * this.helloMessages.length))];
};
});