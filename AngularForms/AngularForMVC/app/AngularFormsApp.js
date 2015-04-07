var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

        //$scope.addNewEmployee = function () {
        //    $location.path('/newEmployeeForm');
        //};

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
            //$modal.open({
            //    templateUrl: 'app/EmployeeForm/efTemplate.html',
            //    controller: 'efController'
            //});

        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
    });