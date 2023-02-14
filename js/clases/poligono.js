export class Poligono{
    constructor(long_lados, num_lados);

    perimetro(){
        return this.long_lados*this.num_lados;
    }
    area(){
        let result=0;
        result = Poligono.perimetro() * (Math.sqrt(Math.pow(this.long_lados,2)+Math.pow((this.long_lados/2),2)));
        result = result/2;
        return result;
    }

}