var guitarapp=angular.module('guitarapp',["ui.router"]);

	guitarapp.controller('ictrl',function($scope,$http,$location,selecteddata){
	   	$scope.info=[];
	   	$scope.slides = [ '../Images/guitar1.png' ,
	   					  '../Images/guitar2.png' ,
	   					  '../Images/guitar3.png',
	   					  '../Images/guitar4.jpg',
	   					  '../Images/guitar5.jpg',
	   					  '../Images/guitar6.jpg',
	   					  '../Images/guitar7.jpg'];
  		
  		$scope.index=0;			//index value for slides intialize to zero for slides
  		$scope.slide=$scope.slides[$scope.index];
  		var toggle=function(){
  		$scope.val=false;
  		$scope.sval=false;
  	 }
  	 toggle();

  	 $scope.cinfo=function(){		//function for custmore info div
  		if($scope.cval==false){
  			$scope.cval=true;
  		}
  		else{
  			$scope.cval=false;
  		}
    }

 	 $scope.pinfo=function(){			//function for pruduct info div
  		if($scope.val==false){
  			$scope.val=true;
  		}
  		else{
  			$scope.val=false;
  		}
  	}
  	$scope.sinfo=function(){			//function for shipping info div
  		if($scope.sval==false){
  			$scope.sval=true;
  		}
  		else{
  			$scope.sval=false;
  		}
  	}
  	$http.get('guitardata.json')			//http request to get jason Data
		.success(function(rest){
			function onload(){
			$scope.info=rest.allProducts[$scope.index];
		 	selecteddata.name1 = $scope.info;
		 }
		 onload();
		$scope.next=function(){		//fuction for next button
	  	if($scope.index==$scope.slides.length-1){
	  	 	$scope.index=-1;
	  	 }
	  	 $scope.index+=1;			//increment the index values
	  	 $scope.slide=$scope.slides[$scope.index];
	  	 toggle();
	  	 onload();
    }

  	$scope.previous=function(){			//function for previous button
  		if($scope.index<1){
  	 		$scope.index=$scope.slides.length;
  	 	}
	  	 $scope.index-=1;				//decrement the index value
	  	 $scope.slide=$scope.slides[$scope.index];
	  	 toggle();
	  	 onload();
    }		
	})
		$scope.purchase=function(){
	   		$location.path('/purchase');		//change url path on click of buy button.
	   		selecteddata.name=$scope.slides[$scope.index];	//share data using 'selecteddata' service.
	   	}
	});

	