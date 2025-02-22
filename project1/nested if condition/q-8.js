q-8
{
    let no1=prompt("enter 1 number : ");
    let no2=prompt("enter 2 number : ");
    let no3=prompt("enter 3 number : ");
    if(no1>=no2 && no1>=no3){
        console.log("no1 is greater ");
    }
    else{
        if(no2>=no1 && no2>=no3){
            console.log("no2 is greater");
        }
        else{
            console.log("no3 is greater");
        }
    }
}