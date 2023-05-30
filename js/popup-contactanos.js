/*---- Contactanos ----*/

function validarFormulario() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const motivoSelect = document.getElementById("motivos");
    const motivo = motivoSelect.value;
    const contactoSelect = document.getElementById("contacto");
    const contacto = contactoSelect.value;
  
    const emailCheck = /\S+@\S+\.\S+/;
  
    let valido = true;
  
    reiniciarErrores();
  
    if (!emailCheck.test(email.value)) {
      mostrarError(email, "Por favor, introduzca una dirección de correo electrónico válida.");
      valido = false;
    }
  
    if (nombre.value === "") {
      mostrarError(nombre, "Inserte su nombre.");
      valido = false;
    }

    /*
    if (motivo.value === "") {
        mostrarError(motivo, "Inserte su nombre.");
        valido = false;
      }

      if (contacto.value === "") {
        mostrarError(contacto, "Inserte su nombre.");
        valido = false;
      }
*/

  
    if (motivoSelect.selectedIndex === 0) {
        mostrarError(motivoSelect, "Por favor, seleccione un motivo.");
        valido = false;
      }
    
      if (contactoSelect.selectedIndex === 0) {
        mostrarError(contactoSelect, "Elija con quien contactar.");
        valido = false;
      }
  
    if (valido) {
      mostrarPopup();
    }
  
    return valido;
  }
  
  function mostrarError(campo, mensaje) {
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = mensaje;
    campo.classList.add("error");
    campo.parentNode.insertBefore(errorSpan, campo.nextSibling);

      //Añade estilos a las alertas
      errorSpan.style.color = "red";
      errorSpan.style.fontFamily = "Open Sans, sans-serif";
      errorSpan.style.fontSize = "15px";
  
  }
  


  function reiniciarErrores() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
  
    const fields = document.querySelectorAll(".error");
    fields.forEach((field) => field.classList.remove("error"));
  }
  

  function mostrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(cerrarPopup, 6000);
  }
  
  function cerrarPopup() {
    const popup = document.getElementById("cerrar-popup");
    popup.style.display = "none";
  }
  