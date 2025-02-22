q-6
{
    let char=prompt("enter the character :");
    if(char >="A" && char <="Z")
    {
            console.log("this character is uppercase");
    }
    else{
            if(char >="a" && char <="z"){
                console.log("this character is lowercase");
            }
            else{
                if(char >="0" && char <="9"){
                    console.log("this is an digit");
                }
                else{
                    console.log("invalid input");
                }
            }
    }
}