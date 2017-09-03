var rl = require('readline-sync'); // readline-sync module

// add function 
function add(num1, num2){ 
    return num1 + num2; // adds two numbers
}

// multiply function
function sub(num1, num2){
    return num1 - num2; // multiplies two numbers
}

// subtract function
function mult(num1, num2){
    return num1 * num2; // subtracts two numbers
}

// divide function
function div(num1, num2){
    return num1 / num2; // divides two numbers
}

// takes readline question integer module 
//used to ask for a number
// only excepts numbers
// and places it in a variable named question
var question = rl.questionInt('Please enter a number?');

// prints question(number) to the terminal
console.log(question);

// puts question(number) in variable called num
var num1 = question;

// same as questions 
// except places it in a variable named question2
var question2 = rl.questionInt('Please enter another number?');

// prints question2(number) to the terminal
console.log(question2);

// puts question2(number) in variable called num2
var num2 = question2;

// ask for one of four operators 
// addition, subtraction, multiplication and division
var question3 = rl.question('Please enter a operator (+, -, *, /)');

// puts the operator(+ , -, *, /)
// in a variable called operator
var operator = question3;

if(operator === '+'){ // if the operator is the string of plus

    console.log(add(num1,num2)); // calls the add function and adds the first number and second number together then console.logs the results
} 
else if(operator === '-'){ // if the operator is the string of minus

    console.log(sub(num1,num2)); // calls the sub function and subtracts the first number and second number together then console.logs the results
} 
else if(operator === '*'){ // if the operator is the string of multiply

    console.log(mult(num1,num2)); // calls the mult function and multiplies the first number and second number together then console.logs the results
} 
else if(operator === '/'){ // if the operator is the string of divide

    console.log(div(num1,num2)); // calls the div function and divides the first number and second number together then console.logs the results
}

