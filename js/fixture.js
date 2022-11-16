const botonPais = document.getElementsByClassName('botonFix');
const cruce = document.getElementById('cruces');
const cruce1 = document.getElementById('primerCruce');
const cruce2 = document.getElementById('segundoCruce');
const cruce3 = document.getElementById('tercerCruce');
const cruce4 = document.getElementById('cuartoCruce');
const cruce5 = document.getElementById('quintoCruce');
const cruce6 = document.getElementById('sextoCruce');
const cruce7 = document.getElementById('septimoCruce');
const cruce8 = document.getElementById('octavoCruce');

const paisesGrupoA = [];
const paisesGrupoB = [];
const paisesGrupoC = [];
const paisesGrupoD = [];
const paisesGrupoE = [];
const paisesGrupoF = [];
const paisesGrupoG = [];
const paisesGrupoH = [];

const botonPaisOctavos = document.getElementsByClassName('octavos');
const cruceCuartos1 = document.getElementById('primerCruceCuartos');
const cruceCuartos2 = document.getElementById('segundoCruceCuartos');
const cruceCuartos3 = document.getElementById('tercerCruceCuartos');
const cruceCuartos4 = document.getElementById('cuartoCruceCuartos');

const paisesCuartos1 = [];
const paisesCuartos2 = [];
const paisesCuartos3 = [];
const paisesCuartos4 = [];

const botonPaisCuartos = document.getElementsByClassName('cuartos');
const cruceSemis1 = document.getElementById('primerCruceSemis');
const cruceSemis2 = document.getElementById('segundoCruceSemis');

const paisesSemis1 = [];
const paisesSemis2 = [];

const botonPaisSemis = document.getElementsByClassName('semis');
const cruceFinal = document.getElementById('primerCruceFinal');

const paisesFinal = [];

const botonPaisFinal = document.getElementsByClassName('final');

let textarea = document.getElementById('mensaje');

//OCTAVOS
for (let i = 0; i < botonPais.length; i++) {
    botonPais[i].addEventListener('click', e => {
        infoPais(e.target);
    });
}

const infoPais = objeto => {
    const pais = {
        nombre: objeto.innerText,
        bandera: objeto.firstElementChild.className,
        grupo: objeto.parentElement.parentElement.querySelector('h4').innerText.replace('GRUPO ', '')
    }
    primerCruce(pais);
}

function primerCruce(pais){
    // GRUPOS A Y B
    if(pais.grupo == 'A' && paisesGrupoA.length == 0){
        pintarPrimeroCruce(pais, cruce1);
        paisesGrupoA.push(pais);
    }
    if(pais.nombre != paisesGrupoA[0].nombre && pais.grupo == 'A' && paisesGrupoA.length > 0 && paisesGrupoA.length < 2){
        pintarPrimeroCruce(pais, cruce2);
        paisesGrupoA.push(pais);
    }
    if (paisesGrupoA.length < 2 && pais.grupo != 'A') {
        alertaError(paisesGrupoA[0]);
    }
    if(paisesGrupoA.length > 1){
        if (pais.grupo == 'B' && paisesGrupoB.length == 0) {
            pintarSegundoCruce(pais, cruce2);
            paisesGrupoB.push(pais);
        }
        if(pais.nombre != paisesGrupoB[0].nombre && pais.grupo == 'B' && paisesGrupoB.length > 0 && paisesGrupoB.length < 2){
            pintarSegundoCruce(pais, cruce1);
            paisesGrupoB.push(pais);
        }
        if (paisesGrupoB.length < 2 && pais.grupo != 'B') {
            alertaError(paisesGrupoB[0]);
        }
    }
    // GRUPOS C Y D
    if(paisesGrupoA.length > 1 && paisesGrupoB.length > 1){
        if(pais.grupo == 'C' && paisesGrupoC.length == 0){
            pintarPrimeroCruce(pais, cruce3);
            paisesGrupoC.push(pais);
        }
        if(pais.nombre != paisesGrupoC[0].nombre && pais.grupo == 'C' && paisesGrupoC.length > 0 && paisesGrupoC.length < 2){
            pintarPrimeroCruce(pais, cruce4);
            paisesGrupoC.push(pais);
        }
        if (paisesGrupoC.length < 2 && pais.grupo != 'C') {
            alertaError(paisesGrupoC[0]);
        }
    }
    if(paisesGrupoA.length > 1 && paisesGrupoB.length  > 1 && paisesGrupoC.length  > 1){ 
        if (pais.grupo == 'D' && paisesGrupoD.length == 0) {
            pintarSegundoCruce(pais, cruce4);
            paisesGrupoD.push(pais);
        }
        if(pais.nombre != paisesGrupoD[0].nombre && pais.grupo == 'D' && paisesGrupoD.length > 0 && paisesGrupoD.length < 2){
            pintarSegundoCruce(pais, cruce3);
            paisesGrupoD.push(pais);
        }
        if (paisesGrupoD.length < 2 && pais.grupo != 'D') {
            alertaError(paisesGrupoD[0]);
        }
    }
    // GRUPOS E Y F
    if(paisesGrupoA.length > 1 && paisesGrupoB.length  > 1 && paisesGrupoC.length  > 1 && paisesGrupoD.length  > 1){
        if(pais.grupo == 'E' && paisesGrupoE.length == 0){
            pintarPrimeroCruce(pais, cruce5);
            paisesGrupoE.push(pais);
        }
        if(pais.nombre != paisesGrupoE[0].nombre && pais.grupo == 'E' && paisesGrupoE.length > 0 && paisesGrupoE.length < 2){
            pintarPrimeroCruce(pais, cruce6);
            paisesGrupoE.push(pais);
        }
        if (paisesGrupoE.length < 2 && pais.grupo != 'E') {
            alertaError(paisesGrupoE[0]);
        }
    }
    if(paisesGrupoA.length > 1 && paisesGrupoB.length  > 1 && paisesGrupoC.length  > 1 && paisesGrupoD.length  > 1 && paisesGrupoE.length  > 1){
        if (pais.grupo == 'F' && paisesGrupoF.length == 0) {
            pintarSegundoCruce(pais, cruce6);
            paisesGrupoF.push(pais);
        }
        if(pais.nombre != paisesGrupoF[0].nombre && pais.grupo == 'F' && paisesGrupoF.length > 0 && paisesGrupoF.length < 2){
            pintarSegundoCruce(pais, cruce5);
            paisesGrupoF.push(pais);
        }
        if (paisesGrupoF.length < 2 && pais.grupo != 'F') {
            alertaError(paisesGrupoF[0]);
        }
    }
    // GRUPOS G Y H
    if(paisesGrupoA.length > 1 && paisesGrupoB.length  > 1 && paisesGrupoC.length  > 1 && paisesGrupoD.length  > 1 && paisesGrupoE.length  > 1 && paisesGrupoF.length  > 1){
        if(pais.grupo == 'G' && paisesGrupoG.length == 0){
            pintarPrimeroCruce(pais, cruce7);
            paisesGrupoG.push(pais);
        }
        if(pais.nombre != paisesGrupoG[0].nombre && pais.grupo == 'G' && paisesGrupoG.length > 0 && paisesGrupoG.length < 2){
            pintarPrimeroCruce(pais, cruce8);
            paisesGrupoG.push(pais);
        }
        if (paisesGrupoG.length < 2 && pais.grupo != 'G') {
            alertaError(paisesGrupoG[0]);
        }
    }
    if(paisesGrupoA.length > 1 && paisesGrupoB.length  > 1 && paisesGrupoC.length  > 1 && paisesGrupoD.length  > 1 && paisesGrupoE.length  > 1 && paisesGrupoF.length  > 1 && paisesGrupoG.length  > 1){    
        if (pais.grupo == 'H' && paisesGrupoH.length == 0) {
            pintarSegundoCruce(pais, cruce8);
            paisesGrupoH.push(pais);
        }
        if(pais.nombre != paisesGrupoH[0].nombre && pais.grupo == 'H' && paisesGrupoH.length > 0 && paisesGrupoH.length < 2){
            pintarSegundoCruce(pais, cruce7);
            paisesGrupoH.push(pais);
        }  
        if (paisesGrupoH.length < 2 && pais.grupo != 'H') {
            alertaError(paisesGrupoH[0]);
        } 
    }
}


//CUARTOS
for (let i = 0; i < botonPaisOctavos.length; i++) {
    botonPaisOctavos[i].addEventListener('click', e => { 
        infoPaisOctavos(e.target);
    });
}

const infoPaisOctavos = objeto => {
    const pais = {
        nombre: objeto.innerText,
        bandera: objeto.firstElementChild.className,
        grupo: objeto.parentElement.parentElement.querySelector('h4').innerText.replace('GRUPO ', '')
    }
    segundoCruce(pais);
}

function segundoCruce(pais){
    // (1A VS 2B) VS (1C VS 2D)
    if(pais.grupo == '1A VS 2B' && paisesCuartos1.length == 0){
        pintarPrimeroCruce(pais, cruceCuartos1);
        paisesCuartos1.push(pais);
    }
    if(pais.nombre != paisesCuartos1[0].nombre && pais.grupo == '1C VS 2D' && paisesCuartos1.length > 0 && paisesCuartos1.length < 2){
        pintarSegundoCruce(pais, cruceCuartos1);
        paisesCuartos1.push(pais);
    }
    // (1E VS 2F) VS (1G VS 2H)
    if(paisesCuartos1.length > 1){
        if(pais.grupo == '1E VS 2F' && paisesCuartos2.length == 0){
            pintarPrimeroCruce(pais, cruceCuartos2);
            paisesCuartos2.push(pais);
        }
        if(pais.nombre != paisesCuartos2[0].nombre && pais.grupo == '1G VS 2H' && paisesCuartos2.length > 0 && paisesCuartos2.length < 2){
            pintarSegundoCruce(pais, cruceCuartos2);
            paisesCuartos2.push(pais);
        }
    }
    // (2A VS 1B) VS (2C VS 1D)
    if(paisesCuartos1.length > 1 && paisesCuartos2.length > 1){
        if(pais.grupo == '2A VS 1B' && paisesCuartos3.length == 0){
            pintarPrimeroCruce(pais, cruceCuartos3);
            paisesCuartos3.push(pais);
        }
        if(pais.nombre != paisesCuartos3[0].nombre && pais.grupo == '2C VS 1D' && paisesCuartos3.length > 0 && paisesCuartos3.length < 2){
            pintarSegundoCruce(pais, cruceCuartos3);
            paisesCuartos3.push(pais);
        }
    }
    // (2E VS 1F) VS (2G VS 1H)
    if(paisesCuartos1.length > 1 && paisesCuartos2.length > 1 && paisesCuartos3.length > 1){
        if(pais.grupo == '2E VS 1F' && paisesCuartos4.length == 0){
            pintarPrimeroCruce(pais, cruceCuartos4);
            paisesCuartos4.push(pais);
        }
        if(pais.nombre != paisesCuartos4[0].nombre && pais.grupo == '2G VS 1H' && paisesCuartos4.length > 0 && paisesCuartos4.length < 2){
            pintarSegundoCruce(pais, cruceCuartos4);
            paisesCuartos4.push(pais);
        }
    }
}

// SEMIS

for (let i = 0; i < botonPaisCuartos.length; i++) {
    botonPaisCuartos[i].addEventListener('click', e => { 
        infoPaisCuartos(e.target);
    });
}
const infoPaisCuartos = objeto => {
    const pais = {
        nombre: objeto.innerText,
        bandera: objeto.firstElementChild.className,
        grupo: objeto.parentElement.parentElement.querySelector('h4').innerText.replace('GRUPO ', '')
    }
    tercerCruce(pais);
}
function tercerCruce(pais){
    // (1) VS (2)
     if(pais.grupo == '(1A VS 2B) VS (1C VS 2D) (1)' && paisesSemis1.length == 0){
        pintarPrimeroCruce(pais, cruceSemis1);
        paisesSemis1.push(pais);
    }
    if(pais.nombre != paisesSemis1[0].nombre && pais.grupo == '(1E VS 2F) VS (1G VS 2H) (2)' && paisesSemis1.length > 0 && paisesSemis1.length < 2){
        pintarSegundoCruce(pais, cruceSemis1);
        paisesSemis1.push(pais);
    }
    // (3) VS (4)
    if(paisesSemis1.length > 1){
        if(pais.grupo == '(2A VS 1B) VS (2C VS 1D) (3)' && paisesSemis2.length == 0){
            pintarPrimeroCruce(pais, cruceSemis2);
            paisesSemis2.push(pais);
        }
        if(pais.nombre != paisesSemis2[0].nombre && pais.grupo == '(2E VS 1F) VS (2G VS 1H) (4)' && paisesSemis2.length > 0 && paisesSemis2.length < 2){
            pintarSegundoCruce(pais, cruceSemis2);
            paisesSemis2.push(pais);
        }
    }
}

// FINAL
for (let i = 0; i < botonPaisSemis.length; i++) {
    botonPaisSemis[i].addEventListener('click', e => { 
        infoPaisSemis(e.target);
    });
}
const infoPaisSemis = objeto => {
    const pais = {
        nombre: objeto.innerText,
        bandera: objeto.firstElementChild.className,
        grupo: objeto.parentElement.parentElement.querySelector('h4').innerText.replace('GRUPO ', '')
    }
    cuartoCruce(pais);
}
function cuartoCruce(pais){
    // FINAL
     if(pais.grupo == '(1) VS (2)' && paisesFinal.length == 0){
        pintarPrimeroCruce(pais, cruceFinal);
        paisesFinal.push(pais);
    }
    if(pais.nombre != paisesFinal[0].nombre && pais.grupo == '(3) VS (4)' && paisesFinal.length > 0 && paisesFinal.length < 2){
        pintarSegundoCruce(pais, cruceFinal);
        paisesFinal.push(pais);
    }
}

for (let i = 0; i < botonPaisFinal.length; i++) {
    botonPaisFinal[i].addEventListener('click', e => { 
        infoPaisFinal(e.target);
    });
}
const infoPaisFinal = objeto => {
    const pais = {
        nombre: objeto.innerText,
        bandera: objeto.firstElementChild.className,
        grupo: objeto.parentElement.parentElement.querySelector('h4').innerText.replace('GRUPO ', '')
    }
    alerta(pais);
    aparecerFormulario(pais);
}
function alerta(pais){
    Swal.fire({
        html:
        `<h1 class=" blanco arabicBolt"><span class="${pais.bandera}"></span>${pais.nombre} CAMPEON DEL MUNDO</h1>`,
        background: ' linear-gradient(to right, #510509, #c31432)'
      });
}

function aparecerFormulario(pais){
    const active = document.querySelector('.formularioFixtureInvisible');
    active.classList.remove('formularioFixtureInvisible');
    pintarMensaje(pais);
}

function pintarMensaje(pais){
    textarea.innerHTML = `USTED HA ELEGIDO COMO CAMPEON A ${pais.nombre} EN CASO DE QUE SU RESULTADO COINCIDA, NOS CONTACTAREMOS CON USTED PARA QUE RECIBIRA SU PREMIO \n`;
}
function alertaError(pais){
    Swal.fire({
        icon: 'error',
        html: `<h1 class=" blanco arabicBolt">Falto Completar ${pais.grupo}</h1>`,
        background: ' linear-gradient(to right, #510509, #c31432)'
      })
}
function alertaError(pais){
    Swal.fire({
        icon: 'error',
        html: `<h1 class=" blanco arabicBolt">Falto Completar ${pais.grupo}</h1>`,
        background: ' linear-gradient(to right, #510509, #c31432)'
      })
}

function pintarPrimeroCruce(pais, numeroCruce){
    numeroCruce.lastElementChild.firstElementChild.innerHTML =  `<span class="${pais.bandera}"></span>`;
    numeroCruce.lastElementChild.firstElementChild.innerHTML += pais.nombre;
}
function pintarSegundoCruce(pais, numeroCruce){
    numeroCruce.lastElementChild.lastElementChild.innerHTML =  `<span class="${pais.bandera}"></span>`;
    numeroCruce.lastElementChild.lastElementChild.innerHTML += pais.nombre;
}