export class cuadrado {
    constructor() {
        this.lado;
    }

    set establecer(lado) {
        this.lado = lado;
    }

    area(lado) {
        return Math.pow(lado, 2);
    }
}