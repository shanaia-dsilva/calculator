
var input = ""; var second = ""; var output, op; var len; var flag = 0;
var firstOperand, secondOperand; var lenFirst = ""; var div = 0;
const container=document.getElementById('container');

function insert(num) {
	input += num; 
	document.getElementById('prev').innerHTML += num;
	firstOperand = parseFloat(input); 
	len = (firstOperand.toString()).length; 
}
function calculate() {
	
	

	// let min=0; let max=seven.length-1;
	// let rand=Math.floor(Math.random() * (max - min + 1)) + min;
	// console.log(rand);
	// switch (input) {
	// 	case '7':
	// 	container.innerHTML=seven[rand];
	// 		break;
	// 	case "21.11.23":
	// 		container.innerHTML="Hi baby, I love you THE ABSOLUTE most <333"; 
	// }
	second = input.substring((len + 1), (input.length));
	secondOperand = parseFloat(second);
	let operator = input.substring(len, (len + 1));

	switch (operator) {
		case '+':
			output = firstOperand + secondOperand;
				document.getElementById('container').innerHTML = output;
			break;
		case '-':
			output = firstOperand - secondOperand;	document.getElementById('container').innerHTML = output;
			break;
		case '×':
			output = firstOperand * secondOperand;
			document.getElementById('container').innerHTML = output;
			break;
		case '÷':
			div = firstOperand / secondOperand;  
			document.getElementById('container').innerHTML = div;
			break;
		case '%':
			output = (firstOperand / 100) * secondOperand;
			document.getElementById('container').innerHTML = output;
			break;
		case '^':
			output = 1;
			for (let i = 1; i <= secondOperand; i++) {
				output *= firstOperand;
			}
			document.getElementById('container').innerHTML = output;
			break;
	}
	input = output;
	len = 0; firstOperand = output; secondOperand = 0; output = 0;
}
function AC() {
	document.getElementById('prev').innerHTML = '';
	document.getElementById('container').innerHTML = '';
	input = "";
}

function C() {
	var ip = document.getElementById('prev').innerHTML; clear = ip.substring(0, (input.length - 1));
	document.getElementById('prev').innerHTML = clear;
	document.getElementById('container').innerHTML = '';
	input = clear;
}
