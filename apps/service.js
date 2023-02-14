function crearInput() {
    let cajita = document.createElement('input');
    return cajita;
}

function insertarEnNodo(div, input) {
    div.appendChild(input);
}

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

function crearTriangulo() {
    let accion = document.querySelector('#accion');

    while (accion.firstChild) {
        accion.removeChild(accion.firstChild);
    }

    let cajita1 = crearInput();
    let cajita2 = crearInput();

    cajita1.className = 'estiloTriangulo';

    accion.appendChild(cajita1);
    accion.appendChild(cajita2);
}
