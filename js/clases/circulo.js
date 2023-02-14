/**
* @author Rubén @rubenalarcongalvez
*
*/
export class Circulo {
    constructor() {
        this.radio = 0;
    }

    set establecer(radio) {
        this.radio = radio;
    }

    area(radio) {
        return Math.PI * Math.pow(radio, 2);
    }
}
