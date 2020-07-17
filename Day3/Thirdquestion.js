//ternery
marks=prompt("Enter your marks");
marks>90? console.log("marks are "+marks+" and grade is A"):marks>80? console.log("marks are "+marks+" and grade is B"):marks>70 ?console.log("marks are "+marks+" and grade is C"):marks>60 ? console.log("marks are "+marks+" and grade is D"):marks>50?console.log("marks are "+marks+" and grade is E"):console.log("marks are "+marks+" and grade is F")
//if-else
if(marks>90)
{
    console.log("marks are "+marks+" and grade is A");
}
else if(marks>80)
{
    console.log("marks are "+marks+" and grade is B");
}
else if(marks>70)
{
    console.log("marks are "+marks+" and grade is C")
}
else if(marks>60)
{
    console.log("marks are "+marks+" and grade is D");
}
else if(marks>50)
{
    console.log("marks are "+marks+" and grade is E");
}
else
{
    console.log("marks are "+marks+" and grade is F");
}
//switch statement
marks=parseInt(marks/10);
switch (marks)
{
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    case 5:
        console.log("E");
        break;
    default:
        console.log("F")
        break;
}