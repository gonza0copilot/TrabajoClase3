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
    const salida = document.getElementById("respuesta");
    salida.innerText = "Enviando...";
    try {
        // Enviar los datos a la API
        const respuesta = await fetch("api/saludar.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });
        if (!respuesta.ok) {
            const text = await respuesta.text();
            salida.innerText = `Error del servidor: ${respuesta.status} ${respuesta.statusText} — ${text}`;
            return;
        }
        // Intentar parsear JSON (puede fallar si el servidor no devolvió JSON)
        let resultado;
        try {
            resultado = await respuesta.json();
        } catch (e) {
            const text = await respuesta.text();
            salida.innerText = `Respuesta no JSON: ${text}`;
            return;
        }
        // Mostrar el mensaje (fallback si la clave no existe)
        salida.innerText = resultado.mensaje ?? JSON.stringify(resultado);
    } catch (err) {
        salida.innerText = `Error de red: ${err.message}`;
    }
}