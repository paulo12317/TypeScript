import { Monstro } from "./Monstro"
let newVida:number
export class Guerreiro{
    nome: string
    tipo: string
    forca: number
    saude: number
    constructor(
        nome: string,
        tipo: string,
        forca: number,
        ){
            this.nome = nome
            this.tipo = tipo
            this.forca = forca
            this.saude = 100
        }
        atacar(Monstro): void{
            console.log(`o Guerreiro  atacou o Monstro`)
            this.forca - Monstro.saude
        }
        recebeDano(Monstro): void{
            console.log(`o Mostro atacou o Guerreiro`)
            newVida = this.saude - Monstro.forca 
        }  
        stats(): void{
            console.log(this.nome)
            console.log(this.tipo)
            console.log(this.forca)
            console.log(newVida)
        }

}