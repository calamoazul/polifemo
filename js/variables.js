var parrafo = document.createElement('p');
var textonuevo = document.createTextNode('Esto es un parrafo nuevo');
parrafo.appendChild(textonuevo);
parrafo.setAttribute('class', 'texto');
var contenedor = document.getElementsByClassName('contenedor')[0];
contenedor.appendChild(parrafo);
var primerencabezado = document.getElementsByClassName('encabezado')[0];
primerencabezado.className= 'enlacecambiado';
