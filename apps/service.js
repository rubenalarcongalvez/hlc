function crearInput(){
    cajita.innerHTML="";
    return cajita;
}

function insertarEnNodo(div, input){
    div.appendChild(input);
}

function crearTriangulo(){
    let cajita1 = crearInput();
    let cajita2 = crearInput();

    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
}