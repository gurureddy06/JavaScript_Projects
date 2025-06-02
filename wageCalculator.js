function checkEmployeeAvailability() {
    const absent = 0;
    let check = Math.floor(Math.random() * 2);
    if (check == absent) {
        console.log("Absent");
    } else {
        console.log("Present");
    }
}

function employeeWage() {
    const noTime = 0
    const partTime = 1
    const fullTime = 2
    let empTime = Math.floor(Math.random() * 3)
    let workingHours = 0
    let perHourWage = 20
    switch(empTime){
        case noTime:
            console.log("Employee is Absent");
            workingours = 0
            break;
        case partTime:
            console.log("Employee is Part Time");
            workingHours = Math.floor(Math.random() * 5)
            break;
        case fullTime:
            console.log("Employee is Full Time");
            workingHours = Math.floor(Math.random() * 5)
            break;
        default:
            console.log("invalid employee")
    }
    let employee_Wage =  workingHours * perHourWage
    console.log(`working hours : ${workingHours}`);
    console.log(`Employee Wage : ${employee_Wage}`);
}

function employeeMonthlyWages() {
    const noTime = 0
    const partTime = 1
    const fullTime = 2
    const workingDays = 20
    const perHourWage = 20
    let totalWorkingHours = 0
    for(let day = 0; day < workingDays; day++) {
        let empCheck = Math.floor(Math.random() * 3)
        let workingHours = 0
        switch(empCheck){
            case partTime:
                workingHours = 4;
                console.log(`Day ${day}: Part Time`);
                break;
            case fullTime:
                workingHours = 8;
                console.log(`Day ${day}: Full Time`);
                break;
            default:
                console.log(`Day ${day}: Absent`);
        }
        totalWorkingHours += workingHours;
    }

    let totalWage = totalWorkingHours * perHourWage;
    console.log("Total Working Hours: " + totalWorkingHours);
    console.log("Total Monthly Wage: " + totalWage);
}


function calculateWageWithLimits() {
    const noTime = 0
    const partTime = 1
    const fullTime = 2
    const workingDays = 20
    const perHourWage = 20
    const maxHoursInMonth = 160
    let totalWorkingHours = 0
    let totalWorkingDays = 0
    
    function getDailyHours(empCheck) {
        switch (empCheck) {
            case partTime:
                return 4;
            case fullTime:
                return 8;
            default:
                return 0;
        }
    }
    while (totalWorkingHours < maxHoursInMonth && totalWorkingDays < workingDays) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 3) 
        let dailyHours = getDailyHours(empCheck);

        totalWorkingHours += dailyHours;
        console.log(`Day ${totalWorkingDays}: Worked ${dailyHours} hours`);
    }
    let totalWage = totalWorkingHours * perHourWage;
    
    console.log("Total Days Worked: ", totalWorkingDays);
    console.log("Total Hours Worked: ", totalWorkingHours);
    console.log("Total Wage for the Month: " + totalWage);
}


module.exports = {
    checkEmployeeAvailability,
    employeeWage,
    employeeMonthlyWages,
    calculateWageWithLimits
};
