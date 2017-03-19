/**
 * Created by Omkar Dusane on 27-Oct-16.
 */

var sampleApp = angular.module('sampleApp', ['ngRoute','home',]);

sampleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: 'pages/home/view.html',
            controller: 'homectrl'
        })
        .when("/signup", {
            templateUrl: 'pages/signup.html',
            controller: 'signupctrl'
        })
        .when("/signin", {
            templateUrl: 'pages/signin.html',
            controller: 'signinctrl'
        })
        .otherwise({
            templateUrl: 'pages/signin.html',
            controller: 'signinctrl'
        })
        ;

});

sampleApp.service('api',function ($http) {
    // sample http api POST request
    this.sampleHttpApiCallGet = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "params": (jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                next();
            }else{
                alert("Error");
            }
        });
    };

     this.sampleHttpApiCallPost = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "data": $.param(jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                next();
            }else{
                alert("Error");
            }
        });
    };
});

sampleApp.controller('signinctrl', signinctrl);
sampleApp.controller('signupctrl', signupctrl);


function signinctrl($scope,api){
    console.log($scope);
}


function signupctrl($scope,api){
    console.log($scope);

}