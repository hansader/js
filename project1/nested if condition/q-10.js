q-10
{
    let income = prompt("Enter income:"); 
    let creditScore = prompt("Enter credit score:"); 
    if (income >= 3000) { 
        if (creditScore >= 700) { 
            console.log("eligible for a loan.");
        } else {
            console.log("not eligible for a loan.");
        }
    } else {
        console.log("not eligible for a loan.");
    }
}