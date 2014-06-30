var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

function one(){
	for(var i = 0; i < animals.length-1; i++){
		console.log(animals[i]);
	}
}

function two(){
	for(var i = 1; i < animals.length; i++){
		console.log(animals[i]);
	}
}

function three(){
	for(var i = animals.length; i > 0; i--){
		console.log(animals[i]);
	}
}

function four(){
	for(var i = 0; i < animals.length; i++){
		if (animals[0] || animals[animals.length]) {
			console.log(animals[i]);
		}else{
			console.log(animals[i]);
			console.log(animals[i]);
		}
	}
}