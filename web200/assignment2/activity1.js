function returnText() {
    let wage = parseFloat(document.getElementById("hoursInput").value);
    let hours = parseFloat(document.getElementById("wageInput").value);
    const calculateYearly = hours * wage * 52;
    const calculateMonthly = hours * wage * 4;
    const calculateWeekly = hours * wage * 1;

    window.alert(["Your weekly salary is " + calculateWeekly + ", your monthly salary is " + calculateMonthly + ", and your yearly salary is " + calculateYearly +"."]);

    //const wage = returntext();
    
    //document.getElementById("totalSalary").innerHTML = calculateYearly;
    //document.getElementById("totalSalary").innerHTML = calculateMonthly;
    //document.getElementById("totalSalary").innerHTML = calculateWeekly;
}
