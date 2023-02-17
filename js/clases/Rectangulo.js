/**
* @author Diego @dieguxo91
*
*/
export class Rectangulo{
    constructor(){
        this.base = 0;
        this.altura = 0;
    }

    area(){
        let area = this.base * this.altura
    }

    set base(bas){
        this.base = bas;
    }

    set altura(alt){
        this.altura = alt;
    }
}