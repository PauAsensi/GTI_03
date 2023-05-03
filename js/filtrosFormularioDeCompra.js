//--------- Mostrar el popup ------
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