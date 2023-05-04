/*---- Elegir provincia ----*/

$(document).ready(function() {
    // Detectar cuando se escribe en el campo de texto
    $('#provincia-autocomplete').on('input', function() {
        let query = $(this).val().toLowerCase();
        let options = $('#provincia option');

        // Ocultar todas las opciones
        options.hide();

        // Mostrar solo las opciones que coinciden con la consulta
        options.filter(function() {
            return $(this).text().toLowerCase().indexOf(query) !== -1;
        }).show();

        // Mostrar el campo de selección de provincia si hay opciones disponibles
        $('#provincia').toggle(options.filter(':visible').length > 0);
    });
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const provincia = document.getElementById("provincia").value;

    if (nombre === "" || email === "" || provincia === "") {
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