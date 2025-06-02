const {
    checkEmployeeAvailability,
    employeeWage,
    employeeMonthlyWages,
    calculateWageWithLimits
} = require('./wageCalculator');


function main() {
    console.log("\n Employee Availability Check");
    checkEmployeeAvailability();

    console.log("\n Single day wage");
    employeeWage();

    console.log("\n Monthly wage without hour limit");
    employeeMonthlyWages();

    console.log("\n Monthly wage with hour and day limits");
    calculateWageWithLimits();
}

main();