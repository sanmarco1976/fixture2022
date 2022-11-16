/* Menu Hamburguesa */
function hamburguesa() {
  var x = document.getElementById("idMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

document.getElementById("idheader").innerHTML =  `
<div class="logo">FIXTURE INTERACTIVO QATAR 2022</div>            
<div class="menu" id="idMenu">
  <a href="javascript:void(0);" class="icono_h" onclick="hamburguesa()"><i class="fa-solid fa-bars fa-xl"></i></a>    
  <a href="./calendario.html">CALENDARIO</a>
  <a href="./fixture.html">FIXTURE</a>  
  <a href="./estadios.html">ESTADIOS</a>
  <a href="./grupos.html">GRUPOS</a>
  <a href="./index.html">INICIO</a>
</div>`;

document.getElementById("idfooter").innerHTML =  `
<div class="logo">FIXTURE INTERACTIVO QATAR 2022</div>            
<div class="menu_f">
<a href="https://es-la.facebook.com/"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
<a href="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
<a href="https://twitter.com/?lang=es"><i class="fa-brands fa-square-twitter fa-2xl"></i></a>
<a href="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-2xl"></i></a>
</div>`;

