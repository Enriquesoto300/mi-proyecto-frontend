// NOTA IMPORTANTE:
// Cuando subas esto a la nube, cambiarás esta URL por la de Render.
// Por ahora, usamos la local.
const API_URL = "https://api-de-enrique.onrender.com/api/saludo";

async function obtenerDatos() {
    const caja = document.getElementById("resultado");
    caja.innerText = "Cargando...";

    try {
        // 1. Hacemos la petición al servidor
        const respuesta = await fetch(API_URL);
        
        // 2. Verificamos si respondió bien
        if (!respuesta.ok) {
            throw new Error("Error en la red");
        }

        // 3. Convertimos la respuesta a JSON (texto legible)
        const datos = await respuesta.json();

        // 4. Mostramos los datos en el HTML
        caja.innerText = `Mensaje: ${datos.mensaje} \n Estado: ${datos.estado}`;
        
    } catch (error) {
        caja.innerText = "Error: No se pudo conectar con el backend. ¿Está encendido?";
        console.error("Hubo un error:", error);
    }
}