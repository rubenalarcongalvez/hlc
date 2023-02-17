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

function BaseAltura() { //    Esta es la funcion principal del rectangulo 
    let accion = obtenerMain();

    limpiarDiv(accion);

    accion.className = "d-flex  gap-4 pt-2 col-10 m-auto";
    
    let cajita1 = crearInput();
    cajita1.placeholder="Introduzca la base";
    cajita1.id = "cajita1";
    //cajita1.className="col-5";

    let cajita2 = crearInput();
    cajita2.placeholder="Introduzca la altura";
    cajita2.id = "cajita2";
    //cajita2.className="col-5";

    let area = document.createElement('p');
    area.id = "area";
    area.placeholder="Aqui aparecera su area";

    let perimetro = document.createElement('p');
    perimetro.id = "perimetro";
    perimetro.placeholder="Aqui aparecera su perimetro";

    let boton = botonFuncion();
    
    insertar2inputBoton(accion, cajita1, cajita2, boton);
    accion.appendChild(area);
    accion.appendChild(perimetro);
}

function recogerInput(){ //    3
    var base = document.querySelector("#cajita1");
    var altura = document.querySelector("#cajita2");
    
    sacarAreaPeri(base.value, altura.value);
}
function sacarAreaPeri(base,altura){    //    4
    let area = (base * altura) / 2;
    var areaResul = document.querySelector("#area");
    areaResul.innerHTML="Area: ";
    var spanArea = document.createElement('span');
    spanArea.innerHTML= area;
    areaResul.appendChild(spanArea);
    
    let perimetro = base * 3;
    var periResul = document.querySelector("#perimetro");
    periResul.innerHTML="Perimetro: ";
    var spanPeri = document.createElement('span');
    spanPeri.innerHTML= perimetro;
    periResul.appendChild(spanPeri);
}

function botonFuncion(){  //    2
    var boton = document.createElement('button');

    boton.type="submit";
    boton.className="btn btn-warning";
    boton.onclick=(()=>{
    recogerInput()
});
    boton.innerHTML = "Aceptar" 

    return boton;
}

function radio(){
    
}
