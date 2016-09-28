var portfolioController = angular.module('portfolioController', []);

portfolioController.controller('IntroPageController', ['$scope', '$http', function ($scope, $http) { 

	// jQuery
$.getScript('js/scroll_animations.js', function()
{
    // script is now loaded and executed.
    // put your dependent JS here.
});


}]);//END OF INTRO CONTROLLER






//THE BEGINNING OF PORTFOLIO CONTROLLER	
portfolioController.controller('PortfolioListController', ['$scope', '$http', function ($scope, $http) { 

	$http.get('js/data.json').success(function(data) {
		$scope.portfolioList = data;


	});
    $(document).ready(function(){
        var setDim = $("#mainGallery li").innerWidth();
        $("#mainGallery li").css('height', setDim );
  });



  //size tiles  when window is resizedso that they're always square;
  $(window).bind("resize", sizeFunction);
  function sizeFunction() {
    var innerW = $("#mainGallery li").innerWidth();
    //console.log(innerW);
    $("#mainGallery li").css('height', innerW );
  }; 



  
}]);

portfolioController.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) { 

	$http.get('js/data.json').success(function(data) {
		$scope.detailsList = data;
		$scope.whichItem = $routeParams.itemId;

	$(document).ready(function() {
      $("#wrapper").tosrus({
      	slides     : {
      	scale      : "fill"
   		},
   		caption    : {
      	add        : true
   		},
   		pagination : {
      	add        : true,
      	type       : "thumbnails"
   		},
   		buttons    : true
      });
   	});
}); 

}]);

