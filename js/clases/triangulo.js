/**
* @author Diego @dieguxo91
*
*/
class Triangulo{
        
    constructor(){
        this.base = 0;
        this.altura = 0;
    }

    area(){
        let area = (this.base * this.altura) / 2;
        return area;
    }


    set base(bas){
        this.base = bas;
    }

    set altura(alt){
        this.altura = alt;
    }

    

}