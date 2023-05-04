/*---- Elegir provincia ----*/


function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;


    if (nombre === "" || email === "") {
        alert("Por favor, rellene todos los campos obligatorios.");
    } else {
        mostrarPopup();
    }
}

/*--------- Mostrar el popup ------*/
function mostrarPopup() {
    const popup = document.getElementById("popup");
    console.log('entra');
    popup.style.display = "block";
    setTimeout(cerrarPopup, 6000);
}

function cerrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}