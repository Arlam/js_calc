
var model = new CalcModel();
function init(){
	document.getElementById("btn0").addEventListener("click", function(){handleDigit(0)});
	document.getElementById("btn1").addEventListener("click", function(){handleDigit(1)});
	document.getElementById("btn2").addEventListener("click", function(){handleDigit(2)});
	document.getElementById("btn3").addEventListener("click", function(){handleDigit(3)});
	document.getElementById("btn4").addEventListener("click", function(){handleDigit(4)});
	document.getElementById("btn5").addEventListener("click", function(){handleDigit(5)});
	document.getElementById("btn6").addEventListener("click", function(){handleDigit(6)});
	document.getElementById("btn7").addEventListener("click", function(){handleDigit(7)});
	document.getElementById("btn8").addEventListener("click", function(){handleDigit(8)});
	document.getElementById("btn9").addEventListener("click", function(){handleDigit(9)});
	
	document.getElementById("btnEqual").addEventListener("click", function(){handleCommand(Command.EQUAL)});
	document.getElementById("btnPlus").addEventListener("click", function(){handleCommand(Command.PLUS)});
	document.getElementById("btnMinus").addEventListener("click", function(){handleCommand(Command.MINUS)});
	document.getElementById("btnDivision").addEventListener("click", function(){handleCommand(Command.DIVISION)});
	document.getElementById("btnMultiplication").addEventListener("click", function(){handleCommand(Command.MULTIPLICATION)});

	document.getElementById("btnCancel").addEventListener("click", function(){handleCancel()});
}



function handleDigit(digit){
	console.log("Pressed: " + digit);
	var result = setDigit(digit);
	showResult(result);
}

function handleCancel(){
	console.log("Cancel");
	model.command = Command.EQUAL;
	model.isNewNumber = true;
	model.result = 0;
	model.number = 0;
	showResult(model.number);
}

function handleCommand(command){
	console.log("Command: " + command);
	model.result = model.command.execute(model.result, model.number);
	model.number = model.result;

	model.isNewNumber = true;
	model.command = command;
	showResult(model.number);
}

function setDigit(digit) {
	if(model.isNewNumber) {
		model.isNewNumber = false;
		model.number = digit;
	} else {
		model.number = "" + model.number + digit;
	}
	return model.number;
}

function showResult(result){
	document.getElementById("monitor").value = Number(result);
}

