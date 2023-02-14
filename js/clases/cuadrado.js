export class cuadrado {
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