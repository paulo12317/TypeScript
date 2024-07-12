import { Carro } from "..";

class Garagem {
    carros: Carro[]
    quantidade: number = 0

    constructor(){
        this.carros = []
    }
    adicionaCarro(Carro: Carro): void{
        if(this.quantidade < 10){
            this.carros.push(Carro)
            this.quantidade ++
        }else {
            console.log(`Sua garagem esta cheia!!`);
        }
    }
    removerCarro(marca: string): void{
        let i:number
        for (i = 0; i < this.carros.length;i++) {
            if(this.carros[i].marca == marca){
                this.carros.splice(i,1)[i]
                this.quantidade --
            }
        }
    }
}

 