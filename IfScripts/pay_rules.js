"use script";

function calculateGrossPay(payRate, hoursWorked){
    if(hoursWorked <= 40){
        console.log((payRate * hoursWorked).toFixed(2));
    }
    else{
        var regularPay = payRate * 40;
        var overtimPay = (hoursWorked - 40) * (payRate * 1.5)
        console.log((regularPay + overtimPay).toFixed(2));
    }
}

calculateGrossPay(12.5, 20);
calculateGrossPay(25,40);
calculateGrossPay(17.30,45);
