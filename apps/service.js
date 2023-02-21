/**
 * @author Diego - @dieguxo91 11/02/2023
 *
 */
function crearInput() {
    let cajita = document.createElement('input');
    return cajita;
}

/**
 * @author Rubén - @rubenalarcongalvez 18/02/2023
 *
 */
function insertar1inputBoton(div, input, boton) {
    div.appendChild(input);
    div.appendChild(boton);
}

/**
 * @author Diego - @dieguxo91 11/02/2023
 *
 */
function limpiarDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

/**
 * @author Diego - @dieguxo91 11/02/2023
 *
 */
function obtenerMain() {
    return document.querySelector('#accion');
}

/**
 * @author Rubén @rubenalarcongalvez 14/02/2023
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
            trianguloCalculos();
            break;

        case 'rectangulo':
            rectangulo.className = 'nav-link active text-bg-primary';
            rectanguloCalculos();
            break;

        case 'circulo':
            circulo.className = 'nav-link active text-bg-primary';
            circuloCalculos()
            break;

        case 'pentagono':
            pentagono.className = 'nav-link active text-bg-primary';
            poligonosCalculos(5);
            break;

        case 'cuadrado':
            cuadrado.className = 'nav-link active text-bg-primary';
            CuadradoCalculos();
            break;

        case 'hexagono':
            hexagono.className = 'nav-link active text-bg-primary';
            poligonosCalculos(6);
            break;

        default:
            break;
    }
}

/**
 * @author Diego - @dieguxo91 18/02/2023
 *
 */

/*=============================================
=            Triangulo            =
=============================================*/

function trianguloCalculos() {
    /* Modificación de Rubén para aplicar algunos estilos (clases bootstrap), pocas cosas 18/02/2023 */
    //    Esta es la funcion principal del rectangulo
    let accion = obtenerMain();
    limpiarDiv(accion);

    accion.className = 'd-flex flex-wrap justify-content-center  gap-4 pt-2 col-10 m-auto';
    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder = 'Base';
    cajita1.id = 'cajita1';
    cajita1.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita1.type = 'number';
    cajita1.min = 0;

    // el input para la altura
    let cajita2 = crearInput();
    cajita2.placeholder = 'Altura';
    cajita2.id = 'cajita2';
    cajita2.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita2.type = 'number';
    cajita2.min = 0;

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = 'area';
    area.className = 'col-12 col-md-6';

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = 'perimetro';
    area.className = 'col-12 col-md-6';
    /* Fin de modificación de Rubén para aplicar algunos estilos (clases bootstrap) 18/02/2023 */

    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    // El parrafo para el error
    var error = document.createElement('h3');
    error.id = 'error';
    error.className = 'col-12 col-md-6';
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */

    var cajaError = document.querySelector('#cajaError');
    limpiarDiv(cajaError);

    //boton con la funcion de area y perimetro
    let boton = botonFuncion();

    //insertamos las cajitas y el boton en el div
    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
    accion.appendChild(boton);

    //rescatamos el div de area y perimetro y lo limpiamos
    var calculos = document.querySelector('#calculos');
    
    limpiarDiv(calculos);

    calculos.appendChild(area);
    calculos.appendChild(perimetro);

    //por ultimo guardamos en el error en la capa de error
    cajaError.appendChild(error);
}

/**
 * @author Diego - @dieguxo91 17/02/2023
 *
 */

function recogerInput() {
    var base = document.querySelector('#cajita1');
    var altura = document.querySelector('#cajita2');

    sacarAreaPeri(base.value, altura.value);
}

/**
 * @author Diego - @dieguxo91 17/02/2023
 *
 */

function botonFuncion() {
    var boton = document.createElement('button');

    boton.type = 'submit';
    boton.className = 'btn btn-warning col-12 col-lg';
    /* Modificación de Rubén para validación 18/02/2023 */
    boton.onclick = () => {
        if (error) {
            //Si había un error antes, restablecemos
            error.className = '';
            error.innerHTML = null;
        }
        recogerInput();
    };
    /* Fin de modificación de Rubén para validación 18/02/2023 */
    boton.innerHTML = 'Aceptar';

    return boton;
}

/**
 * @author Diego - @dieguxo91 17/02/2023
 *
 */
function sacarAreaPeri(base, altura) {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //Si hay error, una cosa, si no, otra
    if (base < 0 || altura < 0) {
        var error = document.querySelector('#error');
        error.innerHTML = 'ERROR: ';
        error.className = 'bg-danger text-white rounded p-3';
        var spanError = document.createElement('span');
        spanError.innerHTML = 'Alguno de los números introducidos no es válido. Por favor, inserte números positivos';
        spanError.className = 'text-decoration-underline';

        // cuando de error limpiamos del area y del perimetro y quitamos la clase
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = '';
        areaResul.className = '';
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = '';
        periResul.className = '';
        
        error.appendChild(spanError);
    } else {
        //Formulas de area y perimetro para el triangulo
        let area = (base * altura) / 2;
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = 'Área: ';
        areaResul.className = 'bg-primary text-white rounded p-3';
        var spanArea = document.createElement('span');
        spanArea.innerHTML = area + 'cm';
        spanArea.className = 'text-decoration-underline';
        areaResul.appendChild(spanArea);

        let perimetro = base * 3;
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = 'Perímetro: ';
        periResul.className = 'bg-success text-white rounded p-3';
        var spanPeri = document.createElement('span');
        spanPeri.innerHTML = perimetro + 'cm';
        spanPeri.className = 'text-decoration-underline';
        periResul.appendChild(spanPeri);
    }
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */
}

/*=====  Final de Triangulo  ======*/

/**
 * @author Diego @dieguxo91 18/02/2023
 *
 */

/*=============================================
=            Cuadrado           =
=============================================*/

function CuadradoCalculos() {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //    Esta es la funcion principal del cuadrado
    let accion = obtenerMain();
    limpiarDiv(accion);
    accion.className = 'd-flex flex-wrap justify-content-center gap-4 pt-2 col-10 m-auto';

    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder = 'Lado';
    cajita1.id = 'cajita1';
    cajita1.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita1.type = 'number';
    cajita1.min = 0;

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = 'area';
    area.className = 'col-12 col-md-6';

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = 'perimetro';
    area.className = 'col-12 col-md-6';

    var error = document.createElement('h3');
    error.id = 'error';
    error.className = 'col-12 col-md-6';
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */

    var cajaError = document.querySelector('#cajaError');
    limpiarDiv(cajaError);

    //boton con la funcion de area y perimetro
    let boton = botonFuncionCua(error);

    // insertar la primera parte
    accion.appendChild(cajita1);
    accion.appendChild(boton);

    var calculos = document.querySelector('#calculos');
    limpiarDiv(calculos);

    calculos.appendChild(area);
    calculos.appendChild(perimetro);
    cajaError.appendChild(error);
}

function recogerInputCua() {
    var lado = document.querySelector('#cajita1');
    sacarAreaPeriCua(lado.value);
}

function sacarAreaPeriCua(lado) {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //Si hay error, una cosa, si no, otra
    if (lado < 0) {
        var error = document.querySelector('#error');
        error.innerHTML = 'ERROR: ';
        error.className = 'bg-danger text-white rounded p-3';
        var spanError = document.createElement('span');
        spanError.innerHTML = 'Alguno de los números introducidos no es válido. Por favor, inserte números positivos';
        spanError.className = 'text-decoration-underline';
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = '';
        areaResul.className = '';
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = '';
        periResul.className = '';
        error.appendChild(spanError);
    } else {
        //Formulas de area y perimetro para el triangulo
        let area = Math.pow(lado, 2);
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = 'Área: ';
        areaResul.className = 'bg-primary text-white rounded p-3';
        var spanArea = document.createElement('span');
        spanArea.innerHTML = area + 'cm';
        spanArea.className = 'text-decoration-underline';
        areaResul.appendChild(spanArea);

        let perimetro = lado * 4;
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = 'Perímetro: ';
        periResul.className = 'bg-success text-white rounded p-3';
        var spanPeri = document.createElement('span');
        spanPeri.innerHTML = perimetro + 'cm';
        spanPeri.className = 'text-decoration-underline';
        periResul.appendChild(spanPeri);
    }
    /* Fin de modificación de Rubén para validación 18/02/2023 */
}

function botonFuncionCua() {
    var boton = document.createElement('button');

    boton.type = 'submit';
    boton.className = 'btn btn-warning col-12 col-lg-3';
    /* Modificación de Rubén para validación 18/02/2023 */
    boton.onclick = () => {
        if (error) {
            //Si había un error antes, restablecemos
            error.className = '';
            error.innerHTML = null;
        }
        recogerInputCua();
    };
    /* Fin de modificación de Rubén para validación 18/02/2023 */
    boton.innerHTML = 'Aceptar';

    return boton;
}

/*=====  Final de Cuadrado  ======*/
/**
 * @author Javi @ziscou 17/02/2023
 *
 */


/*=============================================
=            Rectangulo            =
=============================================*/

function rectanguloCalculos() {
    /* Modificación de Rubén para aplicar algunos estilos (clases bootstrap), pocas cosas 18/02/2023 */
    //    Esta es la funcion principal del rectangulo
    let accion = obtenerMain();
    limpiarDiv(accion);

    accion.className = 'd-flex flex-wrap justify-content-center  gap-4 pt-2 col-10 m-auto';
    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder = 'Base';
    cajita1.id = 'cajita1';
    cajita1.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita1.type = 'number';
    cajita1.min = 0;

    // el input para la altura
    let cajita2 = crearInput();
    cajita2.placeholder = 'Altura';
    cajita2.id = 'cajita2';
    cajita2.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita2.type = 'number';
    cajita2.min = 0;

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = 'area';
    area.className = 'col-12 col-md-6';

    
    let perimetro = document.createElement('h3');
    perimetro.id = 'perimetro';
    area.className = 'col-12 col-md-6';

    var error = document.createElement('h3');
    error.id = 'error';
    error.className = 'col-12 col-md-6';
   

    var cajaError = document.querySelector('#cajaError');
    limpiarDiv(cajaError);

    
    let boton = botonFuncion();

    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
    accion.appendChild(boton);


    var calculos = document.querySelector('#calculos');
    
    limpiarDiv(calculos);

    calculos.appendChild(area);
    calculos.appendChild(perimetro);


    cajaError.appendChild(error);
}
/**
 * @author Javi @ziscou 17/02/2023
 *
 */

function recogerInput() {
    var base = document.querySelector('#cajita1');
    var altura = document.querySelector('#cajita2');

    sacarAreaPeriRec(base.value, altura.value);
}

/**
 * @author Javi @ziscou 17/02/2023
 *
 */

function botonFuncion() {
    var boton = document.createElement('button');

    boton.type = 'submit';
    boton.className = 'btn btn-warning col-12 col-lg';
   
    boton.onclick = () => {
        if (error) {
            //Si había un error antes, restablecemos
            error.className = '';
            error.innerHTML = null;
        }
        recogerInput();
    };

    boton.innerHTML = 'Aceptar';

    return boton;
}

/**
 * @author Javi @ziscou 17/02/2023
 *
 */
function sacarAreaPeriRec(base, altura) {

    if (base < 0 || altura < 0) {
        var error = document.querySelector('#error');
        error.innerHTML = 'ERROR: ';
        error.className = 'bg-danger text-white rounded p-3';
        var spanError = document.createElement('span');
        spanError.innerHTML = 'Alguno de los números introducidos no es válido. Por favor, inserte números positivos';
        spanError.className = 'text-decoration-underline';

        // cuando de error limpiamos del area y del perimetro y quitamos la clase
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = '';
        areaResul.className = '';
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = '';
        periResul.className = '';
        
        error.appendChild(spanError);
    } else {
        //Formulas de area y perimetro para el triangulo
        let area = base * altura;
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = 'Área: ';
        areaResul.className = 'bg-primary text-white rounded p-3';
        var spanArea = document.createElement('span');
        spanArea.innerHTML = area + 'cm';
        spanArea.className = 'text-decoration-underline';
        areaResul.appendChild(spanArea);

        let perimetro = base * 2 + altura*2;
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = 'Perímetro: ';
        periResul.className = 'bg-success text-white rounded p-3';
        var spanPeri = document.createElement('span');
        spanPeri.innerHTML = perimetro + 'cm';
        spanPeri.className = 'text-decoration-underline';
        periResul.appendChild(spanPeri);
    }
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */
}

/**
 * @author Javi @ziscou 18/02/2023
 *
 */

/*=====  Final de Rectangulo  ======*/

/*=============================================
=            Circulo            =
=============================================*/


function circuloCalculos() {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //    Esta es la funcion principal del cuadrado
    let accion = obtenerMain();
    limpiarDiv(accion);
    accion.className = 'd-flex flex-wrap justify-content-center gap-4 pt-2 col-10 m-auto';

    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder = 'Radio';
    cajita1.id = 'cajita1';
    cajita1.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita1.type = 'number';
    cajita1.min = 0;

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = 'area';
    area.className = 'col-12 col-md-6';

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = 'perimetro';
    area.className = 'col-12 col-md-6';

    var error = document.createElement('h3');
    error.id = 'error';
    error.className = 'col-12 col-md-6';
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */

    var cajaError = document.querySelector('#cajaError');
    limpiarDiv(cajaError);

    //boton con la funcion de area y perimetro
    let boton = botonFuncionCir(error);

    // insertar la primera parte
    accion.appendChild(cajita1);
    accion.appendChild(boton);

    var calculos = document.querySelector('#calculos');
    limpiarDiv(calculos);

    calculos.appendChild(area);
    calculos.appendChild(perimetro);
    cajaError.appendChild(error);
}

function recogerInputCir() {
    var radio = document.querySelector('#cajita1');
    sacarAreaPeriCua(radio.value);
}

function sacarAreaPeriCir(radio) {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //Si hay error, una cosa, si no, otra
    if (lado < 0) {
        var error = document.querySelector('#error');
        error.innerHTML = 'ERROR: ';
        error.className = 'bg-danger text-white rounded p-3';
        var spanError = document.createElement('span');
        spanError.innerHTML = 'Alguno de los números introducidos no es válido. Por favor, inserte números positivos';
        spanError.className = 'text-decoration-underline';
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = '';
        areaResul.className = '';
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = '';
        periResul.className = '';
        error.appendChild(spanError);
    } else {
        //Formulas de area y perimetro para el triangulo
        let area = Math.PI * Math.pow(radio, 2);
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = 'Área: ';
        areaResul.className = 'bg-primary text-white rounded p-3';
        var spanArea = document.createElement('span');
        spanArea.innerHTML = area + 'cm';
        spanArea.className = 'text-decoration-underline';
        areaResul.appendChild(spanArea);

        let perimetro = 2 * Math.PI * radio;
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = 'Perímetro: ';
        periResul.className = 'bg-success text-white rounded p-3';
        var spanPeri = document.createElement('span');
        spanPeri.innerHTML = perimetro + 'cm';
        spanPeri.className = 'text-decoration-underline';
        periResul.appendChild(spanPeri);
    }
    /* Fin de modificación de Rubén para validación 18/02/2023 */
}

function botonFuncionCir() {
    var boton = document.createElement('button');

    boton.type = 'submit';
    boton.className = 'btn btn-warning col-12 col-lg-3';
    /* Modificación de Rubén para validación 18/02/2023 */
    boton.onclick = () => {
        if (error) {
            //Si había un error antes, restablecemos
            error.className = '';
            error.innerHTML = null;
        }
        recogerInputCir();
    };
    /* Fin de modificación de Rubén para validación 18/02/2023 */
    boton.innerHTML = 'Aceptar';

    return boton;
}

/*=====  Final de Circulo  ======*/

/*=============================================
=            Pentagono            =
=============================================*/


/**
 * @author Javi @ziscou 17/02/2023
 *
 */

function poligonosCalculos(num_lados) {
    /* Modificación de Rubén para aplicar validación y estilos 18/02/2023 */
    //    Esta es la funcion principal del cuadrado
    let accion = obtenerMain();
    limpiarDiv(accion);
    accion.className = 'd-flex flex-wrap justify-content-center gap-4 pt-2 col-10 m-auto';

    // el input para la base
    let cajita1 = crearInput();
    cajita1.placeholder = 'Lado';
    cajita1.id = 'cajita1';
    cajita1.className = 'col-12 col-lg-5 ps-2 rounded border border-2 border-primary';
    cajita1.type = 'number';
    cajita1.min = 0;

    // El parrafo para el resultado del area
    let area = document.createElement('h3');
    area.id = 'area';
    area.className = 'col-12 col-md-6';

    // El parrafo para el resultado del perimetro
    let perimetro = document.createElement('h3');
    perimetro.id = 'perimetro';
    area.className = 'col-12 col-md-6';

    var error = document.createElement('h3');
    error.id = 'error';
    error.className = 'col-12 col-md-6';
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */

    var cajaError = document.querySelector('#cajaError');
    limpiarDiv(cajaError);

    //boton con la funcion de area y perimetro
    let boton = botonFuncionPol(num_lados ,error);

    // insertar la primera parte
    accion.appendChild(cajita1);
    accion.appendChild(boton);

    var calculos = document.querySelector('#calculos');
    limpiarDiv(calculos);

    calculos.appendChild(area);
    calculos.appendChild(perimetro);
    cajaError.appendChild(error);
}

function recogerInputPol(num_lados) {
    var lado = document.querySelector('#cajita1');
    sacarAreaPeriPol(num_lados, lado.value);
}

/**
 * @author Javi @ziscou 17/02/2023
 *
 */

function botonFuncionPol(num_lados) {
    var boton = document.createElement('button');

    boton.type = 'submit';
    boton.className = 'btn btn-warning col-12 col-lg';
   
    boton.onclick = () => {
        if (error) {
            //Si había un error antes, restablecemos
            error.className = '';
            error.innerHTML = null;
        }
        recogerInputPol(num_lados);
    };

    boton.innerHTML = 'Aceptar';

    return boton;
}

/**
 * @author Javi @ziscou 17/02/2023
 *
 */
function sacarAreaPeriPol( num_lados, long_lados) {

    if (num_lados < 0 || long_lados < 0) {
        var error = document.querySelector('#error');
        error.innerHTML = 'ERROR: ';
        error.className = 'bg-danger text-white rounded p-3';
        var spanError = document.createElement('span');
        spanError.innerHTML = 'Alguno de los números introducidos no es válido. Por favor, inserte números positivos';
        spanError.className = 'text-decoration-underline';

        // cuando de error limpiamos del area y del perimetro y quitamos la clase
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = '';
        areaResul.className = '';
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = '';
        periResul.className = '';
        
        error.appendChild(spanError);
    } else {
        //Formulas de area y perimetro para el triangulo
        let perimetro = num_lados * long_lados;
        var periResul = document.querySelector('#perimetro');
        periResul.innerHTML = 'Perímetro: ';
        periResul.className = 'bg-success text-white rounded p-3';
        var spanPeri = document.createElement('span');
        spanPeri.innerHTML = perimetro + 'cm';
        spanPeri.className = 'text-decoration-underline';
        periResul.appendChild(spanPeri);

        let area;

        if (num_lados == 5) {
            area = (perimetro * ((long_lados/2)*Math.sqrt((num_lados+2*Math.sqrt(5))/num_lados)))/2;
             
         
        }else {
            area = (perimetro * Math.sqrt(Math.pow(long_lados,2)-Math.pow((long_lados/2),2)))/2;

        }

        
        var areaResul = document.querySelector('#area');
        areaResul.innerHTML = 'Área: ';
        areaResul.className = 'bg-primary text-white rounded p-3';
        var spanArea = document.createElement('span');
        spanArea.innerHTML = area + 'cm';
        spanArea.className = 'text-decoration-underline';
        areaResul.appendChild(spanArea);


    }
    /* Fin de modificación de Rubén para aplicar validación y estilos 18/02/2023 */
}

/**
 * @author Javi @ziscou 18/02/2023
 *
 */


/*=====  Final de Pentagono  ======*/

/*=============================================
=            Hexagono            =
=============================================*/

/*=====  Final de Hexagono  ======*/
