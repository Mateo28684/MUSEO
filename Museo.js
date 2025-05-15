const imagenes = [
    'imagenes/salon-sable.jpg',
    'imagenes/salon-seleccion.jpg',
    'imagenes/salon-traje.jpg'
];

const tiemposRevolucion = [
    'imagenes/tiempos-de-revolucion1.jpeg',
    'imagenes/tiempos-de-revolucion2.jpeg',
    'imagenes/tiempos-de-revolucion3.jpeg'
];
const tiemposProvincia = [
    './imagenes/Tiempos-de-provincia1.jpeg',
    './imagenes/Tiempos-de-provincia2.jpeg',
    './imagenes/Tiempos-de-provincia3.jpeg'
];
const pintoresDeLaHistoria = [
    'imagenes/PintoresdelaHistoria1.jpeg',
    'imagenes/Pintores-de-la-Historia2.jpeg',
    'imagenes/Pintores-de-la-Historia3.jpeg'
];

const informes = [
    'imagenes/Informes1.jpeg',
    'imagenes/Informes2.jpeg',
    'imagenes/Informes3.jpeg'
];

const grandesExitos = [
    'imagenes/Grandes-exitos1.jpeg',
    'imagenes/Grandes-exitos2.jpeg',
    'imagenes/Grandes-exitos3.jpeg'
];

let imagenActual = 0;
const imagenPresentacion = document.getElementById('presentacion');
const btnAnterior = document.getElementById('anterior');  
const btnSiguiente = document.getElementById('siguiente');

const primerImagen = document.getElementById("img1");
const segundaImagen = document.getElementById("img2");
const terceraImagen = document.getElementById("img3");

function cambiarImagen() {
    imagenPresentacion.style.backgroundImage = `url(${imagenes[imagenActual]})`;
}

function imagenSiguiente(){
    imagenActual = (imagenActual + 1 + imagenes.length) % imagenes.length;
    cambiarImagen();
}
function imagenAnterior(){
    imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen();
}
const cuadros = document.querySelectorAll('.cuadro');
const info = document.getElementById('pinfo');
const zona1_pasillo = document.getElementById("zona1-pasillo");
const zona1_final = document.getElementById("zona1-final");
cuadros.forEach(cuadro => {
    
    cuadro.addEventListener('mouseover', () => {
        info.textContent = cuadro.dataset.mensaje;
    });
});
zona1_pasillo.addEventListener("mouseover", () => {
    primerImagen.src = tiemposRevolucion [0];
    segundaImagen.src = tiemposRevolucion [1]
    terceraImagen.src = tiemposRevolucion [2];
});
zona2.addEventListener("mouseover", () => {
    primerImagen.src = pintoresDeLaHistoria [0];
    segundaImagen.src = pintoresDeLaHistoria [1];
    terceraImagen.src = pintoresDeLaHistoria [2];
});
zona1_final.addEventListener("mouseover", () => {
    primerImagen.src = tiemposRevolucion [0];
    segundaImagen.src = tiemposRevolucion [1];
    terceraImagen.src = tiemposRevolucion [2];
});
zona3.addEventListener("mouseover", () => {
    primerImagen.src = tiemposProvincia [0];
    segundaImagen.src = tiemposProvincia [1];
    terceraImagen.src = tiemposProvincia [2];
});
zona4.addEventListener("mouseover", () => {
    primerImagen.src = grandesExitos [0];
    segundaImagen.src = grandesExitos [1];
    terceraImagen.src = grandesExitos [2];
});
zona5.addEventListener("mouseover", () => {
    primerImagen.src = informes [0];
    segundaImagen.src = informes [1];
    terceraImagen.src = informes [2];
});
const div = document.getElementById('miDiv');
div.style.backgroundImage = `url(${fondos[contador]})`;
contador = (contador + 1) % fondos.length;





