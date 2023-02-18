
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
            BaseAlturaTri(); 
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
            BaseAlturaCua();
            break;

        case 'hexagono':
            hexagono.className = 'nav-link active text-bg-primary';
            break;

        default:
            break;
    }
}

/**
* @author Diego @dieguxo91
*
*/


//  Cuadrado

function BaseAlturaCua() { //    Esta es la funcion principal del rectangulo 
    let accion = obtenerMain();
    limpiarDiv(accion);
    accion.className = "d-flex flex-wrap justiy-content-center  gap-4 pt-2 col-10 m-auto";
    
    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder="Introduzca el lado";
    cajita1.id = "cajita1";
    cajita1.className="col-5";

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = "area";

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = "perimetro";

    //boton con la funcion de area y perimetro
    let boton = botonFuncionCua();
    
    // insertar la primera parte
    accion.appendChild(cajita1);
    accion.appendChild(boton);
    
    var calculos = document.querySelector('#calculos');

    calculos.appendChild(area);
    calculos.appendChild(perimetro);
}

function recogerInputCua(){ 
    var lado = document.querySelector("#cajita1");
    sacarAreaPeri(lado.value);
}

function sacarAreaPeri(lado){    //Formulas de area y perimetro para el cuadrado
    console.log(lado)
    var areaResul = document.querySelector("#area");
    areaResul.innerHTML="Area: ";
    var spanArea = document.createElement('span');
    spanArea.innerHTML= Math.pow(lado, 2) + "cm";
    areaResul.appendChild(spanArea);

    var periResul = document.querySelector("#perimetro");
    periResul.innerHTML="Perimetro: ";
    var spanPeri = document.createElement('span');
    spanPeri.innerHTML= lado*4 + "cm";
    periResul.appendChild(spanPeri);
}

function botonFuncionCua(){  //    2
    var boton = document.createElement('button');

    boton.type="submit";
    boton.className="btn btn-warning";
    boton.onclick=(()=>{
        recogerInputCua()
    });
    boton.innerHTML = "Aceptar" 
    return boton;
}




//  Triangulo

function BaseAlturaTri() { //    Esta es la funcion principal del rectangulo 
    let accion = obtenerMain();
    limpiarDiv(accion);
    accion.className = "d-flex flex-wrap justiy-content-center  gap-4 pt-2 col-10 m-auto";
    
    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder="Introduzca la base";
    cajita1.id = "cajita1";
    cajita1.className="col-5";

    // el input para la altura
    let cajita2 = crearInput();
    cajita2.placeholder="Introduzca la altura";
    cajita2.id = "cajita2";
    cajita2.className="col-5";

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = "area";
    area.className = "col-3";

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = "perimetro";

    //boton con la funcion de area y perimetro
    let boton = botonFuncion();
    
    // insertar la primera parte
    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
    accion.appendChild(boton);
    
    var calculos = document.querySelector('#calculos');

    calculos.appendChild(area);
    calculos.appendChild(perimetro);

}

function recogerInput(){ //    3
    var base = document.querySelector("#cajita1");
    var altura = document.querySelector("#cajita2");
    
    sacarAreaPeri(base.value, altura.value);
}


function sacarAreaPeri(base,altura){    //Formulas de area y perimetro para el triangulo

    var areaResul = document.querySelector("#area");
    areaResul.innerHTML="Area: ";
    var spanArea = document.createElement('span');
    spanArea.innerHTML= (base*altura)/2 + "cm";
    areaResul.appendChild(spanArea);

    var periResul = document.querySelector("#perimetro");
    periResul.innerHTML="Perimetro: ";
    var spanPeri = document.createElement('span');
    spanPeri.innerHTML= altura*3 + "cm";
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

