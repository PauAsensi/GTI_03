'use strict'
const contenido = document.body;
const icono=document.querySelector('.cambiarTema');

icono.addEventListener('click',()=>{
    contenido.classList.toggle("oscuro");
});
