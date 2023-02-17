/**
* @author Diego @dieguxo91
*
*/
function crearInput() {
    let cajita = document.createElement('input');
    return cajita;
}

function insertar2inputBoton(div, input, input2, boton) {
    div.appendChild(input);
    div.appendChild(input2);
    div.appendChild(boton)
}

function limpiarDiv(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function obtenerMain(){
    return document.querySelector('#accion');
}

/**
* @author Rubén @rubenalarcongalvez
*
*/
function activar(eleccion) {
    let triangulo = document.querySelector('#triangulo');
    let rectangulo = document.querySelector('#rectangulo');
    let circulo = document.querySelector('#circulo');
    let pentagono = document.querySelector('#pentagono');
    let cuadrado = document.querySelector('#cuadrado');
    let hexagono = document.querySelector('#hexagono');

    /* reiniciamos los active */
    triangulo.className = 'nav-link';
    rectangulo.className = 'nav-link';
    circulo.className = 'nav-link';
    pentagono.className = 'nav-link';
    cuadrado.className = 'nav-link';
    hexagono.className = 'nav-link';

    switch (eleccion) {
        case 'triangulo':
            triangulo.className = 'nav-link active text-bg-primary';
            break;

        case 'rectangulo':
            rectangulo.className = 'nav-link active text-bg-primary';
            break;

        case 'circulo':
            circulo.className = 'nav-link active text-bg-primary';
            break;

        case 'pentagono':
            pentagono.className = 'nav-link active text-bg-primary';
            break;

        case 'cuadrado':
            cuadrado.className = 'nav-link active text-bg-primary';
            break;

        case 'hexagono':
            hexagono.className = 'nav-link active text-bg-primary';
            break;

        default:
            break;
    }
}

function BaseAltura() { //    0
    let accion = obtenerMain();

    limpiarDiv(accion);

    accion.className = "d-flex justify-content-center gap-4 pt-2";
    
    let cajita1 = crearInput();
    cajita1.placeholder="Introduzca la base";
    cajita1.id = "cajita1";
    let cajita2 = crearInput();
    cajita2.placeholder="Introduzca la altura";
    cajita2.id = "cajita2";

    let boton = botonFuncion();//  1
    
    insertar2inputBoton(accion, cajita1, cajita2, boton);
}

function recogerInput(obj){ //    3
    var base = document.querySelector("#cajita1");
    var altura = document.querySelector("#cajita2");
    
    sacarAreaPeri(base, altura );
}
function sacarAreaPeri(base,altura){    //    4
    if(base == null || altura == null){
        base = 0;
        altura = 0;
    }
    console.log(base + " " + altura)
}

function botonFuncion(){  //    2
    var boton = document.createElement('button');
    console.log(boton)
    boton.onclick(recogerInput());
    console.log(boton)
    return boton;
}

function radio(){
    
}
