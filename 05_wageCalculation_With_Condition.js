function calculateWageWithLimits() {
    const noTime = 0
    const partTime = 1
    const fullTime = 2
    const workingDays = 20
    const perHourWage = 20
    const maxHoursInMonth = 160
    let totalWorkingHours = 0
    let totalWorkingDays = 0;

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

calculateWageWithLimits()