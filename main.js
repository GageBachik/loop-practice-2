var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

function one(){
	for(var i = 0; i < animals.length-1; i++){
		console.log(animals[i]);
	}
}

function two(){
	console.log(animals[0]);
	for(var i = 2; i < animals.length; i += 2){
		console.log(animals[i]);
	}
}

function three(){
	for(var i = animals.length-1; i > -1; i--){
		console.log(animals[i]);
	}
}

function four(){
	for(var i = 0; i < animals.length; i++){
		if (animals[i] === animals[0] || animals[i] === animals[animals.length-1]) {
			console.log(animals[i]);
		}else{
			console.log(animals[i]);
			console.log(animals[i]);
		}
	}
}