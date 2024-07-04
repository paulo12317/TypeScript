import { log } from "console"
import { JogoEletronico } from "./JogoEletronico"


var rl = require('readline-sync')

export class Jogo {
   public titulo: string
   protected genero: string
   protected classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
}
   public getDetalhes(): void{
        console.log(`O jogo se chama ${this.titulo}, tem o genero ${this.genero} e a classificação etaria de ${this.classificacaoEtaria} anos.`);
        
    }
    public setJogo(): void{
        let newTitulo = rl.question('Fale o titulo do jogo: ')
        let newGenero = rl.question('Fale o genero do jogo: ')
        let newClassicacaoEtaria = rl.question('Fale a classificacao etaria do jogo: ')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
    }
}




