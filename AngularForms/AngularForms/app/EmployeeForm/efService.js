angularFormsApp.factory('efService',
    function () {
        return {
            employee: {
                fullName: "Milton Waddams",
                notes: "The ideal employee. Just don't touch his red staple",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });