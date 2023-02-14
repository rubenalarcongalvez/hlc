let cajita = document.createElement("input");

let accion = document.querySelector("#accion");


accion.appendChild(cajita);

if(accion.firstChild()){
    accion.removeChild(accion.firstChild);
}