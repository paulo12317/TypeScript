export class Cachorro{
    nome: string
    peso: Number
    constructor(
        nome: string,
        peso: Number
    ){
        this.nome = nome
        this.peso = peso
    }
    latir(): void{
        console.log('Auuu Auuu')
    }
    comer(quantidade: number): void{
        console.log('Olha como ele come!!!!!, ele comeu', quantidade, ' kilos de comida')
    }
}