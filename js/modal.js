//Abre y cierra el modal

//Se crea una variable que obtenga todos los elementos que tengan la clase gallery_img
let imagenes = document.querySelectorAll('.gallery__img');

//querySelectorAll llama a todos los elementos y querySelector solo a 1.

//Se crea una variable que contiene el elemento que tenga el id modal
let modal = document.querySelector('#modal');

//Se crea una variable que contenga el elemento con id modal__img
let img= document.querySelector('#modal__img');

//Se crea una variable que contenga el elemento con id modal__boton
let boton= document.querySelector('#modal__boton');

//Bucle para mostrar las imágenes en el modal
for (let i = 0; i < imagenes.length; i++) {
    //Cuando se haga click en cualquiera de las imágenes
    imagenes[i].addEventListener('click', function(x) {

        //Al elemento modal se le va a crear una clase en la clase modal--open
        //Si modal tiene la clase modal--open, la quita al hacer click, si no la tiene, se la da
        modal.classList.toggle("modal--open"); 

        //Para obtener la ruta de la imagen sobre la que se haga click
        //La ruta se guarda en la variable src
        let src = x.target.src

        //setAttribute establece el valor de un atributo (src) en el elemento indicado (img)
        //primer "src" es atributo, segundo src el valor, es la variable que acabamos de crear en la líena anterior
        //Esto se utiliza para mostrar en el modal la imagen seleccionada 
        img.setAttribute("src", src);
    }); 
}

//Para darle funcionalidad al boton X
boton.addEventListener('click',function() {
    //El toggle quita la clase modal-open al hacer click, ya que se le ha agregado previamente al hace click en una foto
    modal.classList.toggle("modal--open"); 
})




