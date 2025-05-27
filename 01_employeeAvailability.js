function checkEmployeeAvailability() {
    const absent = 0;
    let check = Math.floor(Math.random() * 2);
    if (check == absent) {
        console.log("Absent");
    } else {
        console.log("Present");
    }
}
checkEmployeeAvailability()