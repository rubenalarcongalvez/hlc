function crearInput(){
    let cajita = document.createElement("input");
    return cajita;
}

function insertarEnNodo(div, input){
    div.appendChild(input);
}

function crearTriangulo(){
    let accion = document.querySelector("#accion");

    while(accion.firstChild){
        accion.removeChild(accion.firstChild);
    }
    let cajita1 = crearInput();
    let cajita2 = crearInput();

    cajita1.className="estiloTriangulo";

    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
}