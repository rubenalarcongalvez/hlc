export class Poligono{
     resul;
    constructor(long_lados, num_lados);

    perimetro(){
        return this.long_lados*this.num_lados;
    }
    area(){
        this.resul = Poligono.perimetro() * ((Math.sqrt(Math.pow(this.long_lados,2)+Math.pow((this.long_lados/2),2)))/2);
        return result;
    }

}