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
employee_Monthly_Wages();