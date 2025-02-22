q-9
{
    let marks=prompt("enter the marks :");
    if(marks >=90){
        console.log("you got A grade");
    }
    else{
        if(marks<=89 && marks>=80){
        console.log("you got B grade");
    }
    else{
        if(marks<=79 && marks>=70){
        console.log("you got C grade");
    }
    else{
        if(marks<=69 && marks>=60){
        console.log("you got D grade");
    }
    else{
        if(marks <60){
        console.log("you fail");
    }
    else{
        console.log("invalid marks");
    }
    }
    }
    }
    }
}