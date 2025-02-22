q-4
{
    let a=prompt("enter first angle :");
    let b=prompt("enter second angle :");
    let c=prompt("enter third angle :");
    
    if(a!=0 && b!=0 && c!=0)
    {
        if(a==b && b==c ){
            console.log("this triangle is equilateral");
        }
        else{
            if(a==b || b==c || a==c){
                console.log("this triangle is isosceles");
            }
            else{
                console.log("this triangle is scalene");
            }
        }
    }
    else{
        console.log("invalid angle");
    }
}