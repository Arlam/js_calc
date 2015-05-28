
 Command = {
	EQUAL:{
		execute : function (x, y){
			return Number(y);
		}
	},
	PLUS:{
		execute : function (x, y){
			return x + y;
		}
	},
	MINUS:{
		execute : function (x, y){
			return x - y;
		}
	},
	MULTIPLICATION:{
		execute : function (x, y){
			return x * y;
		}
	},
	DIVISION:{
		execute : function (x, y){
			return x/y;
		}
	}
}

var CalcModel = function CalcModel() {
	this.command = Command.EQUAL;
	this.isNewNumber = true;
	this.result = 0;
	this.number = 0;
} 