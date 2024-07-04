import { Jogo } from "./Jogo";
import { JogoTabuleiro } from "./JogoTabuleiro";
import { BibliotecaDeJogos } from "./BibliotecaDeJogos";

var rl = require('readline-sync')

export class JogoEletronico extends Jogo{
    public plataforma: string
     super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
         this.titulo = titulo
         this.genero = genero
         this.classificacaoEtaria = classificacaoEtaria
         this.plataforma = plataforma
     }
    public getDetalhes(): void{
         console.log(`O jogo se chama ${this.titulo}, tem o genero ${this.genero}, roda na plataforma ${this.plataforma} e a classificação etaria de ${this.classificacaoEtaria} anos.`);
         
     }
     public setJogo(): void{
         let newTitulo = rl.question('Fale o titulo do jogo: ')
         let newGenero = rl.question('Fale o genero do jogo: ')
         let newClassicacaoEtaria = rl.question('Fale a classificacao etaria do jogo: ')
         let newPlataforma = rl.question('Qual a plataforma do jogo: ')
 
         this.titulo = newTitulo
         this.genero = newGenero
         this.classificacaoEtaria = newClassicacaoEtaria
         this.plataforma = newPlataforma
     }
 }