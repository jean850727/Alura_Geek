async function listarImagenes() {
    const conexion = await fetch("http://localhost:3001/imagenes");

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function eliminar(id){
    await fetch(`http://localhost:3001/imagenes/${id}`,{method:'DELETE'})
}

async function enviarImagen(titulo,precio,ruta){
    const conexion = await fetch("http://localhost:3001/imagenes",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            ruta:ruta

        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarImagenes,enviarImagen,eliminar
}
