let key = "c94baaa2d916d6b290cd29822678abf17832efd7c6cf7b7dc5976ee777ed7760";
const modal = document.querySelector(".modal-cubierta");

//esta funcion abre el modal y pide la info a la API.
function showTeam(teamID){
	//console.log(teamID)
	modal.classList.add('modal-on');
	fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamID}=&APIkey=${key}`)
	.then(response =>response.json())
	.then((equipo) => {
		console.log(equipo);
		console.log(equipo.result[0].players.length);
		detalleEquipo(equipo);
	}); 
}

//Oculta la tarjeta y vacia el contenido que se habia cargado anteriormente
function hideTeam(){
	modal.classList.remove('modal-on');
	document.querySelector('.modal-cubierta').innerHTML = ''
}

//Encargado de hacer cada una de las tarjetas y rellenar el modal
function detalleEquipo(equipo){
	var tarjetas= `
		<h3>PAIS: ${equipo.result[0].team_name}</h3>
		<h4>ENTRENADOR: ${equipo.result[0].coaches[0].coach_name}  </h4>
		<div class="contenedor-jugadores">`;
	for (let i = 0; i < equipo.result[0].players.length; i++) {
		tarjetas +=
		`<div class="tarjeta-jugador">
		<div class="img-container">
		<img src="${equipo.result[0].players[i].player_image}" background-image: '../picture/no_foto.png' 
		alt="Foto de ${equipo.result[0].players[i].player_name}" class="img-jugador">
		</div>
		<p class="nombreJugador .arabicBolt">${equipo.result[0].players[i].player_name}</p>
		<p class="posicion .arabicBolt">${traductor(equipo.result[0].players[i].player_type)}</p>
		</div>`;
	}
	tarjetas += '</div> <button class="cerrar-modal" onclick="hideTeam()">CERRAR</button>';
	document.querySelector('.modal-cubierta').innerHTML = tarjetas
}

//como la info de la API viene en ingles, se traducen al español.
function traductor(posicion){
	var posEsp;
	if(posicion === 'Defenders'){
		posEsp = 'Defensor'
	}else if(posicion === 'Midfielders'){
		posEsp = 'Mediocampista'
	}else if(posicion === 'Goalkeepers'){
		posEsp = 'Arquero'
	}else if(posicion === 'Forwards'){
			posEsp = 'Delantero'
	}
	return posEsp;
}
 
/* 
team_key: 538, team_name: 'Qatar'
team_key: 541, team_name: 'Ecuador',
team_key: 720, team_name: 'Senegal'
team_key: 10, team_name: 'Netherlands',

team_key: 16, team_name: 'England',
team_key: 644, team_name: 'Iran',
team_key: 523, team_name: 'United States'
team_key: 4, team_name: 'Wales',

team_key: 536, team_name: 'Argentina',
team_key: 647, team_name: 'Saudi Arabia',
team_key: 511, team_name: 'Mexico',
team_key: 18, team_name: 'Poland',

team_key: 22, team_name: 'France',
team_key: 529, team_name: 'Australia',
team_key: 7, team_name: 'Denmark',
team_key: 719, team_name: 'Tunisia',

team_key: 19, team_name: 'Spain',
team_key: 516, team_name: 'Costa Rica',
team_key: 21, team_name: 'Germany',
team_key: 540, team_name: 'Japan',

team_key: 6, team_name: 'Belgium',
team_key: 512, team_name: 'Canada',
team_key: 717, team_name: 'Morocco',
team_key: 14, team_name: 'Croatia',

team_key: 531, team_name: 'Brazil',
team_key: 675, team_name: 'Serbia',
team_key: 2, team_name: 'Switzerland',
team_key: 530, team_name: 'Cameroon',

team_key: 23, team_name: 'Portugal',
team_key: 725, team_name: 'Ghana',
team_key: 539, team_name: 'Uruguay',
*/
