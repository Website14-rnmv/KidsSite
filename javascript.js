$(document).ready(function(){
  $('.btn').click(function(){
      $('.anclas').toggleClass("show");
      $('.redes').toggleClass("show");
    
  });
});

$('body').scrollspy({ target: '#navbar-example' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

/*PREGUNTAS Y RESPUESTAS*/ 

// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...

var preguntas = [																			// Pregunta Respuesta
  ['¿Cuántas patas tiene una araña?', '8'],         //  [0][0]   [0][1]
  ['París empieza con P y termina con…', 's'],															//  [1][0]   [1][1]
  ['¿Qué color resulta al mezclar el azul con el amarillo?', 'verde'],                //  [2][0]   [2][1]
  ['¿Que día se celebra navidad?', '25'],									// ...
  ['¿Cuántos jugadores participan en un partido de fútbol?', '22'],
  ['¿De que color es el saco azul de Francisco bolognesi?', 'azul'],
  ['¿Cuanto es 5 x 5 x 0?', '0'],
  ['(64 x 4) / 2 es igual a...', '128'],
  ['¿Cómo se llama nuestro planeta?', 'tierra'],                                      // ...
  ['¿De qué color es el caballo blanco de Santiago?', 'blanco']						// [9][0] y [9][1]
],
pregunta, respuesta,
formuladas = 0,
acertadas = 0;


hazPregunta();


/*
Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById('boton').addEventListener('click', function(){
var entrada = document.getElementById("dato").value;

if(entrada == respuesta){
  acertadas++;
}

if(formuladas < 5){			// Si aun no se han hecho 5 preguntas...
  hazPregunta();			// ... seguir preguntando
}
else{						// de lo contrario...
  muestraResultado();		// ... finaliza juego mostrando el resultado
}
});


/*
Formula una pregunta al usuario...
*/

function hazPregunta(){
var e;			// simple variable auxiliar

// se extrae una pregunta/respuesta al azar del array...

e = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
pregunta = e[0][0];			// se guardan la pregunta y la respuesta 
respuesta = e[0][1];

document.getElementById('preg').innerHTML = pregunta;        // se muestra la pregunta
document.getElementById('dato').value = '';                  // se borra lo escrito anteriormente por el usuario

formuladas++;
}


// Comprueba el número de preguntas acertadas y muestra mensaje en función de este...

function muestraResultado(){
var resultado;      // para guardar el mensaje con el resultado

switch(acertadas){
  case 0:
      resultado = 'No has acertado una sola pregunta, toca estudiar :-/';
      break;
  case 1:
      resultado = 'Bueno, al menos has acertado una pregunta :-)';
      break;
  case 2:
      resultado = 'Solo 2 preguntas acertadas de 5. Toca mejorar.';
      break;
  case 3:
      resultado = 'No está mal, 3/5 acertadas.';
      break;
  case 4:
      resultado = 'Muy bien, has acertado 4 preguntas :-)';
      break;
  case 5:
      resultado = '¡EXCELENTE, has acertado todas las preguntas, HAS GANADO UN PODER MAGICO DE LA SABIDURIA! :-D';
      break;
}

document.getElementById('resolucion').innerHTML = resultado.fontcolor('#54FF42');
}


/*
Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive)
*/

function numAleat(min, max){
return Math.floor( Math.random() * (max - min + 1) ) + min;
}