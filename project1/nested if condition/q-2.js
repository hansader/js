q-2
{
    let year=prompt("entre a year :");
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) 
        {
            console.log( "this year is a leap year");
         } 
         else
         {
            console.log( "this year is not a leap year");
         }
    } 
    else 
    {
      console.log( "this year is a leap year");
    }
  } 
  else 
  {
    console.log( "this year is not a leap year");
  }
}