// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Recuerdo que al llegar ni me miraste", time: 34 },
  { text: "Fui solo uno más de cientos", time: 38 },
  { text: "Sin embargo fueron tuyos", time: 41 },
  { text: "Los primeros voleteos", time: 44 },

  { text: "¿Cómo no pude darme cuenta?", time: 47 },
  { text: "Que hay ascensores prohibidos", time: 51 },
  { text: "Que hay pecados compartidos ", time: 54 },
  { text: "Que tú estabas tan cerca", time: 58 },

  { text: "Me disfrazo de ti", time: 61 },
  { text: "Te disfrazas de mí", time: 65 },
  { text: "Jugamos a ser humanos", time: 69 },
  { text: "En esta habitación gris", time: 72 },

  { text: "Muerdo el agua por ti", time: 75 },
  { text: "Te deslizas por mí", time: 79 },
  { text: "Jugamos a ser dos gatos", time: 82 },
  { text: "Que no se quieren", time: 85},
  { text: "Dormir", time: 88 },

  { text: "Mis anclajes no pararon tus instintos", time: 99 },
  { text: "Ni los tuyos mis quejidos", time: 103 },
  { text: "Dejo correr mis tuercas", time: 107 },
  { text: "Y que hormigas me retuerzan", time: 110 },

  { text: "Quiero que no dejes de estrujarme", time: 113 },
  { text: "Sin que yo te diga nada", time: 116 },
  { text: "Que tus yemas sean lagañas", time: 119 }, 
  { text: "Enganchadas a mis vértices", time: 122 },

  { text: "Me disfrazo de ti", time: 126 },
  { text: "Te disfrazas de mí", time: 130 },
  { text: "Jugamos a ser humanos", time: 134 },
  { text: "En esta habitación gris", time: 137 },

  { text: "Muerdo el agua por ti", time: 141 },
  { text: "Te deslizas por mí", time: 145 },
  { text: "Jugamos a ser dos gatos", time: 149 },
  { text: "Que no se quieren", time: 152 },
  { text: "Dormir", time: 155 },
  
  { text: "No sé qué acabó sucediendo", time: 166 },
  { text: "Solo sentí dentro dardos", time: 170 },
  { text: "Nuestra incómoda postura", time: 174 },
  { text: "Se dilató en el espacio", time: 177 },

  { text: "Se me hunde el dolor en el costado y", time: 180 },
  { text: "Se me nublan los recodos", time: 183 },
  { text: "Tengo sed, estoy tragando", time: 187 },
  { text: "No quiero no estar a tu lado", time: 190 },

  { text: "Me disfrazo de ti", time: 193 },
  { text: "Te disfrazas de mí", time: 198 },
  { text: "Jugamos a ser humanos", time: 202 },
  { text: "En esta habitación gris", time: 205 },

  { text: "Muerdo el agua por ti", time: 209 },
  { text: "Te deslizas por mí", time: 213 },
  { text: "Jugamos a ser dos gatos", time: 216 },
  { text: "Que no se quieren", time: 220 },
  { text: "Dormir", time: 224 },

  { text: "Me moriré de ganas de decirte", time: 235 },
  { text: "Que te voy a echar de menos", time: 240 },
  { text: "Y las palabras se me apartan", time: 244 },
  { text: "Me vacían las entrañas", time: 247 },

  { text: "Finjo que no sé, que no he sabido", time: 250 },
  { text: "Finjo que no me gusta estar contigo", time: 253 },
  { text: "Y al perderme entre mis dedos", time: 257 },
  { text: "Te recuerdo sin esfuerzo", time: 260 },

  { text: "Me moriré de ganas de decirte", time: 263 },
  { text: "Que te voy a echar de menos", time: 268 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 33000);