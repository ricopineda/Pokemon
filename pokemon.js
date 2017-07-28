// $(document).ready(function(){
// 	$.get('http://pokeapi.co/api/v2/pokemon/1/', function(data){
// 			console.log(data);
// 			console.log(data.weight);
// 	}, 'json')

// });


$(document).ready(function(){
	for (var i = 1; i < 152; i++){
		$('body').append('<img src="http://pokeapi.co/media/img/' + i + '.png">')
	}

	});