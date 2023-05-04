'use strict'
const contenido = document.body;
const icono=document.querySelector('.cambiarTema');


icono.addEventListener('click',()=>{
    contenido.classList.toggle("oscuro");
    const logo=document.querySelector('#logo');
    const icono_tema=document.querySelector('.cambiarTema');

    if(logo.getAttribute("theme") == "light"){
        // Cambiamos el atributo theme del botón por dark y cambiamos el logo
        logo.setAttribute("theme", "dark");
        logo.src = "../logos/Logo_Oscuro.png";
        icono_tema.value='<i class="fa-sharp fa-solid fa-sun"></i>';
    }else{
        // En caso de ser dark lo cambiamos por light
        logo.setAttribute("theme", "light");
        logo.src = "../logos/Logo_Claro.png";
        icono_tema.value='<i class="fa-solid fa-moon fa-xl"></i>';
    }

});


