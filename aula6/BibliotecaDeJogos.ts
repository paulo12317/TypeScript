import { Jogo } from "./Jogo";
import { JogoTabuleiro } from "./JogoTabuleiro";
import { JogoEletronico } from "./JogoEletronico";

var rl = require('readline-sync')

export class BibliotecaDeJogos{
    jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    adicionaJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }
    removerJogo(titulo: string){
        let i:number
        for (i = 0; i < this.jogos.length;i++) {
            if(this.jogos[i].titulo == titulo){
                this.jogos.splice(i,1)[i]
            }
        }
    }
    listaJogos(): void{
        let i:number
        for(i = 0;i < this.jogos.length;i++){
            this.jogos[i].getDetalhes()
        }
    }
}
