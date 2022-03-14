//Animación para un menú desplegable

//Variable para el botón de menú
let btnMenu = document.getElementById('btnmenu');

//Variable para el menú
let menu = document.getElementById('menu');

//Al hacer click en el bntMenu, la función aplica la clase mostrar a la variable menu
btnMenu.addEventListener('click', function() {
    'use strict';   //¿¿Se puede omitir??
    menu.classList.toggle('mostrar');   //Si menu no tiene la clase mostrar se muestra al hacer click, si ya la tiene, la oculta. 
})