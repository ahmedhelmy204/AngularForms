﻿angularFormsApp.factory('DataService',
    function () {

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    fullName: "Milton Waddams",
                    notes: "The ideal employee. Just don't touch his red staple",
                    department: "Administration",
                    dateHired: "July 11 2014",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"

                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });