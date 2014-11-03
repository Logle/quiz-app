'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
function QuizzService(){
      var quizInit = [{ 
        "q": "Who is the best ping pong player at FSA?", 
        'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
        'answer': "Nimit",

      },
      { "q": "Which robot name was chanted during Lego Mindstorms?", 
        'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
        'answer':'noHope.js'
      },
      { 
        'q': "Out of the following frontend frameworks, which framework is most rails-like", 
        'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
        'answer':'Ember.js'
      },
      { 
        'q': "Which project used a local data store?", 
        'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
        'answer':'Twitter.js'
      }];

      return {quizInit : quizInit};
}

angular
  .module('quizApp')
  .factory('QuizzService', QuizzService)
  .controller('MainCtrl', ['QuizzService', '$scope', function (QuizzService, $scope) {
   
    $scope.quiz = QuizzService.quizInit;
    $scope.score =0;
  	
    $scope.addChoice = function(){
      $scope.nextQuestion.options.push({value:""});
    };
    $scope.removeChoice = function(index){
      $scope.nextQuestion.options.splice(index,1);
    }

  	$scope.selectAnswer = function(choice, question) {
  		if (!question.answered) { 
	  		question.choice = choice.value;
	  		if (choice.value=== question.answer) {
	  			$scope.score +=10
	  		}
	  		question.answered = true;
  		}	
  	};
  	$scope.answerAll = function(){
  		if ($scope.score === $scope.quiz.length*10) {
  			return true;
  		}
  		return false;
  	}
    $scope.nextQuestion = {
      'q':'',
      'options':[],
      'answer':''
    };
    $scope.addNextQuestion = function (){
      $scope.quiz.unshift($scope.nextQuestion);
      $scope.nextQuestion = {
        'q':'',
        'options':[],
        'answer':''
      };
    }
}]);

