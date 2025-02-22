q-3
{
    let age=prompt("enter your age :");
    if(age != 0 )
    {
        if(age >=1 && age <=12){
            console.log("you are child");
        }
        else{
              if(age >=13 && age<=19){
                    console.log("you are teen");
                }
                else{
                     console.log("you are adult");
                }  
            }
    }
    else{
            console.log("invalid input");
        }
}