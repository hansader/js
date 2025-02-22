q-5
{
    let marks=prompt("enter marks :");
    if(marks <0)
    {
        if(marks >= 90){
            console.log("congrats...you got distinction ");
        }
        else{
            if(marks >=35 && marks <=89){
                console.log("good job you PASS it");
            }
            else{
                console.log("Oops,try again next time");
            }
        }
    }
    else{
        console.log("invalid marks");
    }
}