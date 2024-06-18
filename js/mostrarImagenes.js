import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(id, titulo, precio, ruta) {
    let card = document.createElement('div');
    card.innerHTML =
     `
    <div class="hijo-producto">
    <div class="container">
        <img class="patines1" src="${ruta}" alt="">
        <div class="texto">
            <h3 class="nombre-producto">${titulo}</h3>
            <div>
            <p class="precio">${precio}</p>
            <img class="eliminar ${id}" src="./imagenes/eliminar.png" alt="">
            </div>
        </div>
    </div>
    </div>
    `;

    return card;
}
async function listarImagenes() {
    const listaAPI = await conexionAPI.listarImagenes()

    listaAPI.forEach(card => lista.appendChild(crearCard(card.id, card.titulo, card.precio, card.ruta)));
}

listarImagenes()