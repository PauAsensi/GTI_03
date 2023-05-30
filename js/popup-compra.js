//--JS DE CONTACTANOS--//


//Valida el formulario
function validarFormulariocompra() {

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const direccion = document.getElementById("direccion");
    const titularTarjeta = document.getElementById("titular");
    const numeroTarjeta = document.getElementById("numero");
    const caducidad = document.getElementById("caducidad");
    const cvv = document.getElementById("cvv");

    const emailCheck = /\S+@\S+\.\S+/;
    

    let Valido = true; //Verifica si hay algo mal en el campo.

    // Reinicia los mensajes de error.
    reiniciarErrores();

    //If loops que verifican si el usuario ha llenado el campo.
    if (!emailCheck.test(email.value)) {
        mostrarError(email, "Introduzca una dirección de correo electrónico válida.");
        Valido = false;
    }

    if (nombre.value === "") {
        mostrarError(nombre, "Inserte su nombre.");
        Valido = false;
    }

    if (direccion.value === "") {
        mostrarError(direccion, "Introduzca su dirección.");
        Valido = false;
    }

    if (titularTarjeta.value === "") {
        mostrarError(titularTarjeta, "Introduzca el titular de la tarjeta.");
        Valido = false;
    }

    if (numeroTarjeta.value === "") {
        mostrarError(numeroTarjeta, "Introduzca el número de la tarjeta.");
        Valido = false;
    }

    if (caducidad.value === "") {
        mostrarError(caducidad, "Introduzca la fecha de caducidad.");
        Valido = false;
    }

    if (cvv.value === "") {
        mostrarError(cvv, "Introduzca el CVV.");
        Valido = false;
    }

    if (Valido) {
        mostrarPopup();
    }

    return Valido;
}


//Presenta los errores con CSS
function mostrarError(campo, mensaje) {

    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = mensaje;
    campo.classList.add("error");
    campo.parentNode.appendChild(errorSpan);

    //Añade estilos a las alertas
    errorSpan.style.color = "red";
    errorSpan.style.fontFamily = "Open Sans, sans-serif";
    errorSpan.style.fontSize = "15px";

}


//Quita los errores ya cuando el usuario introduce los datos.
function reiniciarErrores() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());

    const fields = document.querySelectorAll(".error");
    fields.forEach((field) => field.classList.remove("error"));
}



//---Mostrar y Cerrar pop up----/

function mostrarPopup() {
    const popup = document.getElementById("popup");
    console.log('entra');
    popup.style.display = "block";
    setTimeout(cerrarPopup, 6000);
}

function cerrarPopup() {
    const popup = document.getElementById("cerrar-popup");
    popup.style.display = "none";
    return redirigir()
}

function redirigir(){
    window.location.href='/src/index.html';
}
