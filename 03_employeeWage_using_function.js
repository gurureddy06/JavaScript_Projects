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
employeeWage();