import { Guerreiro } from "./Guerreiro"

let newVida:number
export class Monstro{
    nome: string
    forca: number
    saude: number

    constructor(
        nome: string,
        ){
            this.nome = nome
            this.forca = 50
            this.saude = 10
        }
    
        atacar(Guerreiro){
            console.log(`o Mostro atacou o Guerreiro`)
          newVida = this.forca - Guerreiro.saude
            
        }

        recebeDano(Guerreiro){
            console.log(`o Guerreiro atacou o Mostro`)
        Guerreiro.forca - this.saude
        }

        stats(){
            console.log(newVida)
            console.log(this.forca)
            console.log(this.saude)
        }

}