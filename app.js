// Obtener el formulario
const formulario = document.getElementById("formulario");
// Ejecutar cuando se envía
formulario.addEventListener("submit", enviarFormulario);
async function enviarFormulario(evento) {
    // Evitar que la página se recargue
    evento.preventDefault();
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    // Crear un objeto JavaScript
    const datos = {
        nombre: nombre,
        edad: edad
    };
    // Enviar los datos a la API
    const respuesta = await fetch("api/saludar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });
    // Convertir la respuesta a un objeto
    const resultado = await respuesta.json();
    // Mostrar el mensaje
    document.getElementById("respuesta").innerText = resultado.mensaje;
}