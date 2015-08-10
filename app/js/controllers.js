/* 'use strict';

Controllers 

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
*/

/*angular.module('myApp.controllers', []).controller('FinanceController', function($scope){
	$scope.salary = 0;
	$scope.percentage = 0;
	$scope.result = function(){
		return $scope.salary * $scope.percentage * 0.01;
	};
});*/
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
})();