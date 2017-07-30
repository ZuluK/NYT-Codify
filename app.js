var app = angular.module('myApp',[]);

app.controller('firstCtrl',function($scope, $http){
  //take in user input from input and feed to my api call
  $scope.searchFunction = function(x){
    //nyt api key
    $http.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +x+ "&api-key=1631fa7cab4d4873838b4c2f850d2594"
    ).then(function(response){
      //store arry of objects in my scope variable
      $scope.articles = response.data.response.docs;
    });
  }
});
