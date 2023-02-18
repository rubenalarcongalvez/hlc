
/**
* @author Diego @dieguxo91
*
*/
class Triangulo{
        
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    area(){
        let area = (this.base * this.altura) / 2;
        return area;
    }

    perimetro (){
        let perimetro = this.base*3;
        return perimetro;
    }


    set base(bas){
        this.base = bas;
    }

    set altura(alt){
        this.altura = alt;
    }

    

}