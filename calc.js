
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
	
	
	const seven=["Hi baby, reminding you that i love you THE MOST <33 ITS TOO MUCH LOOVE, ITS TOO BIG FOR YOU TO HANDLE. THAT MUCH LOVE, SO MUCH LOVE I HAVE FOR YOU!!!.","Baby, whatever it maybe thats making you feel low, i'm here for you. I'm here to support you. I'm here to listen to you. I'm here to love you. I know it may feel like nothing is going your way, but i also know that you always figure a way out and you've been the strongest person i know baby. You've got this babyyy, i wish i could make you feel better, you are worthy of all the joy and happiness in the world. Keep smiling that trillion dollar smile.", "Hi, my precious sweetie, i love you so much, please go drink water rn, tyvm bye.","Hi baby, i love you so much, please go sleep if its past 12 a.m tyvm bye.", "Hi baby, i love you so much, *sending you lots of love and motivation* may you achieve all that you strive for and may god bless you with all the joy and happiness in this world.", "I love you so much baby, i hope you have a great day and i wish you the best.", "If only you could see yourself through my eyes, you would know how perfect you are baby. If you ever feel insecure, or think you arent good enough, let me remind you that you are. Your kindness, passion, hard work, discipline towards your goals and the immense love you have in that heart of yours are all the things that make you more than worthy. I hope you know how rare it is to find people like you in this world. I love you so much baby. Never doubt it.", ""];

	let min=0; let max=seven.length-1;
	let rand=Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(rand);
	switch (input) {
		case '7':
		container.innerHTML=seven[rand];
			break;
		case "21.11.23":
			container.innerHTML="Hi baby, I love you THE ABSOLUTE most <333"; 
	}
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