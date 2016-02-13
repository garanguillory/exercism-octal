var Octal = function(input){

	this.toDecimal = function(){
		
		if(Number(input)){

			var stringArray = input.split('').reverse();

				if(stringArray.indexOf('8') == -1){

							var numberArray = stringArray.map(function(element){
									return Number(element);
							});

							var answer = 
								numberArray.map(function(element,index){
										return element * Math.pow(8,index);
								}).reduce(function(accum,curr){return accum + curr});

							return answer;
						
				} else {
					return 0;
				}
		} else {
			return 0;
		}
	};

};

module.exports = Octal;