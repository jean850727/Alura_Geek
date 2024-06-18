import { conexionAPI } from "./conexionAPI.js";

const contenedor = document.querySelector(".padre-productos");
contenedor.addEventListener("click", async (event)=>{
    event.preventDefault();

    if (event.target.classList[0] == "eliminar"){
        conexionAPI.eliminar(event.target.classList[1]);
    }
    
})