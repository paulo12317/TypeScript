import { Jogo } from "./Jogo";
import { JogoEletronico } from "./JogoEletronico";
import { BibliotecaDeJogos } from "./BibliotecaDeJogos";

var rl = require('readline-sync')

export class JogoTabuleiro extends Jogo{
    public numeroDeJogadores: number
    super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numeroDeJogadores = numeroDeJogadores
    }
   public getDetalhes(): void{
        console.log(`O jogo se chama ${this.titulo}, tem o genero ${this.genero}, tem ${this.numeroDeJogadores} jogando no momento e a classificação etaria de ${this.classificacaoEtaria} anos.`);
        
    }
    public setJogo(): void{
        let newTitulo = rl.question('Fale o titulo do jogo: ')
        let newGenero = rl.question('Fale o genero do jogo: ')
        let newClassicacaoEtaria = rl.question('Fale a classificacao etaria do jogo: ')
        let newNumeroJogadores = rl.nunuquestion('Fale o numero de jogadores do jogo: ')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
        this.numeroDeJogadores = newNumeroJogadores
    }
}