function validarFormulario(event) {
    event.preventDefault(); // previene el envío del formulario por defecto
    const usuario = document.getElementById("usuario").value;
    const contrasenya = document.getElementById("contrasenya").value;
    const usuariosGuardados = {
      // aquí se añadirían los usuarios y contraseñas guardados en la carpeta "usuarios"
      admin: "1234",
      tecnico: "5678",
      wanda: "1111",
    };
    if (usuariosGuardados[usuario] === contrasenya) {
      window.location.href = "pagina_carga.html"; // redirecciona a la página de carga si el usuario y contraseña son correctos
    } else {
      const popup = document.getElementById("popup");
      popup.style.display = "block"; // muestra el popup si el usuario y contraseña son incorrectos
      const cerrarPopup = document.getElementById("cerrar-popup");
      cerrarPopup.addEventListener("click", () => {
        popup.style.display = "none"; // cierra el popup cuando se clica en el botón de cerrar
      });
    }
  }



  //Mostrar contrasenya
  function mostrarContrasenya(){

    var passwordInput = document.getElementById("contrasenya");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
