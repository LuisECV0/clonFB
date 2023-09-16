// Obtener los elementos relevantes por su ID
const verMasLink = document.getElementById("verMas");
const verMenosLink = document.getElementById("verMenos");

// Obtener las opciones ocultas por su clase
const hiddenOptions = document.querySelectorAll(".hidden-option");

// Función para mostrar las opciones ocultas
function mostrarOpciones() {
    for (const opcion of hiddenOptions) {
        opcion.style.display = "list-item";
    }
    verMasLink.style.display = "none"; // Ocultar "Ver mas"
    verMenosLink.style.display = "list-item"; // Mostrar "Ver menos"
}

// Función para ocultar las opciones nuevamente
function ocultarOpciones() {
    for (const opcion of hiddenOptions) {
        opcion.style.display = "none";
    }
    verMasLink.style.display = "list-item"; // Mostrar "Ver mas"
    verMenosLink.style.display = "none"; // Ocultar "Ver menos"
}

// Agregar eventos de clic a los enlaces "Ver mas" y "Ver menos"
verMasLink.addEventListener("click", mostrarOpciones);
verMenosLink.addEventListener("click", ocultarOpciones);

// Inicialmente, ocultar las opciones y mostrar solo "Ver mas"
ocultarOpciones();
