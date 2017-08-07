var app = angular.module("simulator", []);

app.controller("wordController", function($scope) {
console.log("hello");
	$scope.words = [];
	var random = [{text: "why?", style: "blue" }, 
 					 {text: "hungry", style: "blue"},
 					 {text: "sleepy", style: "blue"},
 					 {text: "you're mean", style: "blue"},
 					 {text: "cookie", style: "blue"} ];
 	// take words from "random" array
 	//add words to view AND words array				 
	$scope.addWord = function () {
  var x = "";
  	x.word=random.text[Math.floor(Math.random() * random.length)];
  $scope.words.push(x);
  
  //$scope.words.push($scope.random[Math.floor(Math.random()*5)])
	//console.log("hi);
		
	
	
	}	
	
	
	
	});				 
	
	