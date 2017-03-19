/**
 * Created by Omkar Dusane on 27-Oct-16.
 */
var home = angular.module('home',['ngRoute']).config(function ($routeProvider) {});
home.controller('homectrl',
    function ($scope) {
        $scope.sample = "Click on signin/signup";

    });