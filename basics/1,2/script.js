//First problem
alias=prompt("Enter your name: ");
alert("Hello " + alias +" ,welcome to our website");

//Second problem
age=prompt("Enter your age: ");
confirmation=confirm("Are you sure "+age+ " is your real age?");
if (confirmation){
    alert("Great! Let's continue");
}
else{
    alert("Oops! Let's try again.");
}

