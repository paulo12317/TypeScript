import { log } from "console"

var rl = require('readline-sync')

export class Carro{
    tanque: number
    KMLitro: number
    marca: String

    constructor(tanque: number,
        KMLitro: number,
        marca: String){
            this.tanque = tanque
            this.KMLitro = KMLitro
            this.marca = marca
        }
    andar(): void{
        let Km = rl.questionInt('Qual a distancia que o carro andou? ')
        if(this.tanque > (this.KMLitro / Km)){
            console.log(`o carro ercoreu ${Km} Km e gastou ${this.tanque - (this.KMLitro / Km)}`)
            this.tanque = this.tanque - (this.KMLitro / Km)
        }else{
            console.log(`Voce andou demais e a gsolina acabou`)
        }
    }
    obterGasolina(): number{
        return this.tanque
    }
    adicionarGasolina(): void {
        let abastece = rl.questionInt(`Quantos litros Voce que abastecer? `)
        console.log(`Voce abasteceu ${abastece} litros de gasolina`);
        this.tanque = this.tanque + abastece
    }
    getCarro(): void {
        console.log(`Seu carro é da marca ${this.marca}, seu tanque é de ${this.tanque} litros e gasta ${this.KMLitro} litros por Km.`);
        
    }
    set(): void{
        let newKmLitro = rl.questionInt(`Digite quantos Km por litro o carro faz: `)
        let newTanque = rl.questionInt(`Digite quantos Litros tem no seu tanque: `)
        let newMarca = rl.question(`Digite a marca do carro: `)

        this.KMLitro = newKmLitro
        this.tanque = newTanque
        this.marca = newMarca
    }
}