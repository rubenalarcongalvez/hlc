export class circulo {
    constructor() {
        this.radio;
    }

    set establecer(radio) {
        this.radio = radio;
    }

    area(radio) {
        return Math.PI * Math.pow(radio, 2);
    }
}
