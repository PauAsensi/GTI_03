// Validacion de formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const provinciaSelect = document.getElementById("provincias");
    const provincia = provinciaSelect.value.trim(); // quita el espacio en blanco del campo de provincia.
  
    const emailCheck = /\S+@\S+\.\S+/; // Formato de correo
  
    reiniciarErrores(); // reiniciar los errores.
  
    let valido = true; // verifica la valididad del formulario.
  
    if (!emailCheck.test(email.value)) {
      mostrarError(email, "Introduzca una dirección de correo electrónico válida.");
      valido = false;
    }
  
    if (nombre.value === "") {
      mostrarError(nombre, " Rellene todos los campos obligatorios.");
      valido = false;
    }
  
    if (provincia === "" || provincia === "empty") {
      mostrarError(provinciaSelect, "Seleccione una provincia.");
      valido = false;
    }
  
    if (valido) {
      mostrarPopup();
    }
  
    return valido;
  }
  
  /// Presenta los errores con CSS en el campo específico
function mostrarError(campo, mensaje) {
    campo.classList.add("error");
    campo.setCustomValidity(mensaje); // Set custom validity message for HTML5 validation
  
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");
  
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = mensaje;
  
    errorContainer.appendChild(errorSpan);
    campo.parentNode.insertBefore(errorContainer, campo.nextSibling);
  }
  
  // Quita los estilos de error cuando el usuario introduce los datos
  function reiniciarErrores() {
    const fields = document.querySelectorAll(".error");
    fields.forEach((field) => {
      field.classList.remove("error");
      field.setCustomValidity("");
    });
  
    const errorContainers = document.querySelectorAll(".error-container");
    errorContainers.forEach((container) => container.remove());
  }
  
  
  // ---Mostrar y Cerrar pop up--- //
  
  function mostrarPopup() {
    const popup = document.getElementById("popup");
    console.log('entra');
    popup.style.display = "block";
    setTimeout(cerrarPopup, 6000);
  }
  
  function cerrarPopup() {
    const popup = document.getElementById("cerrar-popup");
    popup.style.display = "none";
    redirigir();
  }
  
  function redirigir() {
    window.location.href = '/src/index.html';
  }
  