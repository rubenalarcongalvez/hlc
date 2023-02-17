/**
* @author Rubén @rubenalarcongalvez
*
*/
export class Cuadrado {
    constructor() {
        this.lado = 0;
    }

    set establecer(lado) {
        this.lado = lado;
    }

    area(lado) {
        return Math.pow(lado, 2);
    }
}