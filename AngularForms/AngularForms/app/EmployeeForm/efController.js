﻿angularFormsApp.controller('efController',
        //function efController($scope, $window, $routeParams, $modalInstance, DataService) {
        function efController($scope, $window, $routeParams, DataService) {

            if ($routeParams.id)
                $scope.employee = DataService.getEmployee($routeParams.id);
            else
                $scope.employee = { id: 0 };

            //$scope.employee = DataService.employee;

            $scope.editableEmployee = angular.copy($scope.employee);

            $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
            ];

            $scope.shouldShowFullName = function () {
                return true;
            };

            $scope.programmingLanguages = [
                 "C",
                 "C++",
                 "C#",
                 "JavaScript",
                 "Java",
                 "Pascal",
                 "Perl",
                 "PHP"
            ];

            $scope.hoveringOver = function (value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / 10);
            };

            $scope.submitForm = function () {

                $scope.$broadcast('show-errors-event');

                if ($scope.employeeForm.$invalid)
                    return;

                if ($scope.editableEmployee.id == 0) {
                    // insert new employee
                    DataService.insertEmployee($scope.editableEmployee);
                }
                else {
                    // update the employee
                    DataService.updateEmployee($scope.editableEmployee);
                }

                $scope.employee = angular.copy($scope.editableEmployee);
                $window.history.back();

                //$modalInstance.close();
            };

            $scope.cancelForm = function () {
                $window.history.back();

                //$modalInstance.dismiss();
            }

            $scope.resetForm = function () {
                $scope.$broadcast('hide-errors-event');
            }

        });