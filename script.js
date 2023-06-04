




// Solicitar al usuario los nombres de los personajes utilizando prompt
let nombreJugador1 = prompt('Ingrese el nombre del Jugador 1:');
let nombreJugador2 = prompt('Ingrese el nombre del Jugador 2:');

// Declarar variables de poder de los personajes
let poderJugador1 = 100;
let poderJugador2 = 100;

// Definir una función para realizar una ronda de lucha
function realizarRonda(nombreJugador1, nombreJugador2) {
  // Generar un número aleatorio de daño para cada jugador
  let danioJugador1 = Math.floor(Math.random() * 10) + 1;
  let danioJugador2 = Math.floor(Math.random() * 10) + 1;

  // Restar el daño al poder de los jugadores
  poderJugador1 -= danioJugador2;
  poderJugador2 -= danioJugador1;

  // Mostrar los resultados utilizando alert
  alert('¡Ronda de lucha!');
  alert(nombreJugador1 + ' golpea a ' + nombreJugador2 + ' y causa ' + danioJugador1 + ' de daño.');
  alert(nombreJugador2 + ' golpea a ' + nombreJugador1 + ' y causa ' + danioJugador2 + ' de daño.');

  // Verificar el estado de los jugadores utilizando 'if'
  if (poderJugador1 <= 0 && poderJugador2 <= 0) {
    alert('¡Ambos jugadores quedaron sin poder! Es un empate.');
  } else if (poderJugador1 <= 0) {
    alert(nombreJugador1 + ' quedó sin poder. ¡' + nombreJugador2 + ' gana!');
  } else if (poderJugador2 <= 0) {
    alert(nombreJugador2 + ' quedó sin poder. ¡' + nombreJugador1 + ' gana!');
  } else {
    alert('Estado de los jugadores:\n' + nombreJugador1 + ': ' + poderJugador1 + ' de poder\n' + nombreJugador2 + ': ' + poderJugador2 + ' de poder');
  }
}

// Realizar rondas de lucha hasta que uno de los jugadores quede sin poder
while (poderJugador1 > 0 && poderJugador2 > 0) {
  realizarRonda(nombreJugador1, nombreJugador2);
}



