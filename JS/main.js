function myFunction1(){
	alert("Welcome");



}

function myFunction2(){
	let username = prompt("What's your name?");

alert("Hello " + username);



}

function myFunction3(){

	let userNumber = prompt("What's your number?");
	alert("Hello " + userNumber + " is a good number");

}


function biggerNum(){

var num1=parseInt(prompt("Enter first number"));
var num2=parseInt(prompt("Enter second number"));

	if (num1>num2){
		console.log(num1+" is the bigger number");
	}else if(num2>num1){
		console.log(num2+" is the bigger number");
	}else if(num1==num2){
		console.log("The numbers are the same");
	}else{
		console.log("You didn't enter two numbers");
	}
}



