import { conexionAPI } from "./conexionAPI.js";

const botonEnviar = document.querySelector("[data-boton-enviar]");
const botonLimpiar = document.querySelector("[data-boton-limpiar]");

async function crearImagen(evento) {
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const ruta = document.querySelector("[data-ruta]").value;

    await conexionAPI.enviarImagen(titulo, precio, ruta)

}

botonEnviar.addEventListener("click", evento => crearImagen(evento));

botonLimpiar.addEventListener("click", () => {
    document.querySelector("[data-titulo").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-ruta]").value = "";
})