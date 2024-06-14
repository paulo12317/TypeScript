export class Coruja{
    nome: string
    peso: number
    constructor(  nome: string,peso: number){
        this.nome = nome
        this.peso = peso
    }
    chirriar(): void{
        console.log('iuuuu')
    }
    voar(tempo: number): void {
        console.log('ela voou para o arizonte por',tempo, 'anos')
    }
    comer(quantidade:number): void {
        console.log(`inhak inhak ela esta comendo ${quantidade} de vezes`)
    }
}