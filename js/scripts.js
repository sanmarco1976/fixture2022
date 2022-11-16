/* COMIENZO PRESENTACION */
let contadorDiapositiva = 0;
showSlides();

function showSlides() {
  let i;
  let diapositivas = document.getElementsByClassName("diapositiva");
  for (i = 0; i < diapositivas.length; i++) {
    diapositivas[i].style.display = "none";
  }
  contadorDiapositiva++;
  if (contadorDiapositiva > diapositivas.length) {contadorDiapositiva = 1}
  diapositivas[contadorDiapositiva-1].style.display = "block";
  setTimeout(showSlides, 3000); // 
}
/*FIN

/*COMIENZO INFO MUNDIAL */
/* En este codico se encuentra como se cambia el contenido de las tarjetas de la 
seccion de informacion*/

const info = [
    {
        imagen: 'url(./picture/presentacion/minifixture1.png)',
        titulo: 'Juga con nuestro Fixture',
        texto: 'Ahora podes armar tu propio fixture, selecciona los equipos que crees que va a pasar de ronda, y enfrentalos hasta ver quien es el nuevo CAMPEON!'
    },
    {
        imagen: 'url(./picture/presentacion/minigrupo1.png)',
        titulo: 'Basta de comprar Figuritas!',
        texto: 'Mira al instante todos los jugadores que participaran en el mundial con solo hacer click en el equipo que deseas ver.'
    },
    {
        imagen: 'url(./picture/presentacion/minicalendario1.png)',
        titulo: 'No te pierdas de nada',
        texto: 'Nuestro calendario de partidos lo podes actualizar a tu Huso Horario para que no te pierdas de nada.'
    },
    {
        imagen: 'url(./picture/presentacion/Laeeb.jpg)',
        titulo: "¡Hola, soy La'eeb™!",
        texto: "Soy tu mejor compañero de fútbol del  verso de las mascotas. Aquí para dar la bienvenida al mundo, inspirar a los jóvenes aficionados, animar la acción y celebrar cada gol en Qatar 2022™. La'eeb™ es mi nombre, una palabra árabe que significa jugador súper habilidoso, y me encanta el hermoso juego. También me encanta apoyar, y no solo desde las gradas. ¡Me encanta apoyar a todos los que tienen una visión, trabajan duro y se proponen alcanzar sus sueños!"
    },
    {
        imagen: 'url(./picture/presentacion/AL-RIHLA.jpg)',
        titulo: 'AL RIHLA',
        texto: 'PELOTA OFICIAL DE LA COPA MUNDIAL 2022™. Al Rihla es la pelota oficial de la Copa Mundial Catar 2022, que llega con el logo oficial de la Copa Mundial de la FIFA™, además de la certificación Certificación FIFA Quality Pro, que garantiza un juego perfecto. Al Rihla significa "el viaje". Esta es la pelota que da comienzo a todo. Cada toque es una nueva historia. El 1% de las ventas netas globales de nuestras pelotas de fútbol se destinará a Common Goal hasta 2023.'
    },
]

// guardamos los items que nos interesan
const img = document.getElementById('img-contenedor')
const tit = document.getElementById('info-titulo');
const desc = document.getElementById('info-desc');

const btnIzq = document.querySelector(".btn-izq");
const btnDer = document.querySelector(".btn-der");
let noInfo = 0;
//img.style.background = info[0].imagen;
console.log(noInfo);
window.addEventListener("DOMContentLoaded", function (){
    console.log(noInfo);
    img.style.backgroundImage = info[noInfo].imagen;
    tit.innerText = info[noInfo].titulo;
    desc.innerText = info[noInfo].texto;
    console.log(img.style.backgroundImage)
})

btnDer.addEventListener('click', function(){
    console.log(noInfo);
   noInfo++;
   console.log(noInfo)
   if(noInfo>info.length-1){
    noInfo = 0
   }
   cambiarInfo(noInfo);
})

btnIzq.addEventListener('click', function(){
    noInfo--;
    if(noInfo < 0){
        noInfo = info.length-1;
    }
  cambiarInfo(noInfo);
})

function cambiarInfo(noInfo){
    img.style.backgroundImage = info[noInfo].imagen;
    tit.innerText = info[noInfo].titulo;
    desc.innerText = info[noInfo].texto; 
}