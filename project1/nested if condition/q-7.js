q-7
{
    let num=prompt("enter the number :");
    if( num %3==0 && num %5==0 ){
        console.log("this number is divisible by 3&5 both");//15, 30, 45
    }
    else{
        if(num %3==0 ){
            console.log("this number is divisible by 3");//3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48
        }
        else{
            if(num %5==0){
            console.log("this number is divisible by 5");//5, 10, 20, 25, 35, 40, 50
            }
            else{
                console.log("invalid");
            }
        }
    }
}