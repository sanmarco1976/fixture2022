// Fechas de los partidos en GMT
const fechas = [  
    // Grupo A
    new Date("2022-11-20T16:00:00.000+00:00"), new Date("2022-11-21T16:00:00.000+00:00"), new Date("2022-11-25T13:00:00.000+00:00"), 
    new Date("2022-11-25T16:00:00.000+00:00"), new Date("2022-11-29T15:00:00.000+00:00"), new Date("2022-11-29T15:00:00.000+00:00"),
    // Grupo B
    new Date("2022-11-21T13:00:00.000+00:00"), new Date("2022-11-21T19:00:00.000+00:00"), new Date("2022-11-25T10:00:00.000+00:00"), 
    new Date("2022-11-25T19:00:00.000+00:00"), new Date("2022-11-29T19:00:00.000+00:00"), new Date("2022-11-29T19:00:00.000+00:00"),
    // Grupo C
    new Date("2022-11-22T10:00:00.000+00:00"), new Date("2022-11-22T16:00:00.000+00:00"), new Date("2022-11-26T13:00:00.000+00:00"), 
    new Date("2022-11-26T19:00:00.000+00:00"), new Date("2022-11-30T19:00:00.000+00:00"), new Date("2022-11-30T19:00:00.000+00:00"),
    // Grupo D
    new Date("2022-11-22T13:00:00.000+00:00"), new Date("2022-11-22T19:00:00.000+00:00"), new Date("2022-11-26T10:00:00.000+00:00"), 
    new Date("2022-11-26T16:00:00.000+00:00"), new Date("2022-11-30T15:00:00.000+00:00"), new Date("2022-11-30T15:00:00.000+00:00"),
    // Grupo E
    new Date("2022-11-23T13:00:00.000+00:00"), new Date("2022-11-23T16:00:00.000+00:00"), new Date("2022-11-27T10:00:00.000+00:00"), 
    new Date("2022-11-27T19:00:00.000+00:00"), new Date("2022-12-01T19:00:00.000+00:00"), new Date("2022-12-01T19:00:00.000+00:00"),
    // Grupo F
    new Date("2022-11-23T10:00:00.000+00:00"), new Date("2022-11-23T19:00:00.000+00:00"), new Date("2022-11-27T13:00:00.000+00:00"), 
    new Date("2022-11-27T16:00:00.000+00:00"), new Date("2022-12-01T15:00:00.000+00:00"), new Date("2022-12-01T15:00:00.000+00:00"),
    // Grupo G
    new Date("2022-11-24T10:00:00.000+00:00"), new Date("2022-11-24T19:00:00.000+00:00"), new Date("2022-11-28T10:00:00.000+00:00"), 
    new Date("2022-11-28T16:00:00.000+00:00"), new Date("2022-12-02T19:00:00.000+00:00"), new Date("2022-12-02T19:00:00.000+00:00"),
    // Grupo H
    new Date("2022-11-24T13:00:00.000+00:00"), new Date("2022-11-24T16:00:00.000+00:00"), new Date("2022-11-28T13:00:00.000+00:00"), 
    new Date("2022-11-28T19:00:00.000+00:00"), new Date("2022-12-02T15:00:00.000+00:00"), new Date("2022-12-02T15:00:00.000+00:00"),
    // OCTAVOS DE FINAL
    new Date("2022-12-03T15:00:00.000+00:00"), new Date("2022-12-03T19:00:00.000+00:00"), 
    new Date("2022-12-04T15:00:00.000+00:00"), new Date("2022-12-04T19:00:00.000+00:00"),
    new Date("2022-12-05T15:00:00.000+00:00"), new Date("2022-12-05T19:00:00.000+00:00"),
    new Date("2022-12-06T15:00:00.000+00:00"), new Date("2022-12-06T19:00:00.000+00:00"),
    // CUARTOS DE FINAL
    new Date("2022-12-09T15:00:00.000+00:00"), new Date("2022-12-09T19:00:00.000+00:00"), 
    new Date("2022-12-10T15:00:00.000+00:00"), new Date("2022-12-10T19:00:00.000+00:00"), 
    // SEMIFINAL
    new Date("2022-12-13T19:00:00.000+00:00"), new Date("2022-12-14T19:00:00.000+00:00"), 
    // TERCER PUESTO
    new Date("2022-12-17T15:00:00.000+00:00"), 
    // FINAL
    new Date("2022-12-18T15:00:00.000+00:00")];

function formatearFecha(date) {
    return date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear() + ' ' + 
        String(date.getUTCHours()).padStart(2, '0') + ':' + String(date.getUTCMinutes()).padStart(2, '0');
    }

var fechas_html = document.getElementsByClassName("fecha_cal");
for(var i = 0; i < fechas_html.length; i++) {
    fechas_html[i].innerHTML = formatearFecha(fechas[i]);
}

function cambio_fecha(huso) {
    console.log(huso.value)
    for(var i = 0; i < fechas_html.length; i++) {
        aux = new Date(fechas[i].getTime());
        aux.setTime(aux.getTime() + (huso.value*60*60*1000));
        fechas_html[i].innerHTML = formatearFecha(aux);
    }
}
