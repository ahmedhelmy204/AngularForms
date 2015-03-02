angularFormsApp.controller('efController',
        function efController($scope, DataService) {

            $scope.employee = DataService.employee;

            $scope.departments = [
                "Engineering",
                "Marketing",
                "Finance",
                "Administration"
            ];

            $scope.submitForm = function () {

            }

        });