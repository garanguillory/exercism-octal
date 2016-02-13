
var Octal = function(input){

	this.toDecimal = function(){
		var stringArray = input.split('').reverse();
		var numberArray = stringArray.map(function(element){
				return Number(element);
		});
		// return numberArray;
		var sub = 
			numberArray.map(function(element,index){
					return element * Math.pow(8,index);
			}).reduce(function(accum,curr){return accum + curr});
		return sub;
	};

};




// So:
// ```
//    233 # octal
//  = 2*8^2 + 3*8^1 + 3*8^0
//  = 2*64  + 3*8   + 3*1
//  = 128   + 24    + 3
//  = 155
// ```

module.exports = Octal;