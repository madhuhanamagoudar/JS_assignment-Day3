function even_or_odd(n)
{
    if (n%2==0)
    {
       return true;
    }
    else
    {
       return false;
    }
}
number=prompt("Enter the number to be checked");
result=even_or_odd(number);
if(result==true)
{
    console.log("The number entered is " +number+" and Number is Even");
}
else
{
    console.log("The number entered is "+number+" and Number is odd")
}