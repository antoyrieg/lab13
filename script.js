var app = angular.module("simulator", []);

app.controller("wordController", function($scope) {
console.log("hello");
	$scope.words = [];
	$scope.random = [{text: "why?", style: "blue" },
 					 {text: "hungry", style: "blue"},
 					 {text: "sleepy", style: "blue"},
 					 {text: "you're mean", style: "blue"},
 					 {text: "cookie", style: "blue"} ];
 	// take words from "random" array
 	//add words to view AND words array
	$scope.addWord = function () {
		var randomWord = $scope.random[Math.floor(Math.random()*5)];
		var newObject = {text: randomWord.text};
  	$scope.words.push(newObject);
	}

	$scope.decoratedWord = function(){
	$scope.words.push($scope.random[Math.floor(Math.random()*5)])
	console.log("hi");
	}

	$scope.moreWords = function(){
		var randomWord = $scope.random[Math.floor(Math.random(2)*5)];
		var newObject = {text: randomWord.text};
  	$scope.words.push(newObject);

	}

});
