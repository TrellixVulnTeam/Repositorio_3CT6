let listaObjetos;
if(localStorage.getItem("lista") == null) {
    alert("No tenes productos")
}else {
    let listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

let dato = prompt ("Seleccioná el tamaño")
listaFiltrada = listaObjetos.filter(e => e.tamaño === dato)

if(listaFiltrada.length != 0){
    listaFiltrada.forEach(element => {
        console.log(element.nombre + " " + element.tamaño);
    });
} else {
    console.log ("No existe el producto")
}

