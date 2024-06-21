class Animal {
    nome: string
    constructor(nome: string){
        this.nome = nome
    }
    fazerBarulho(): void{

    }
}
class dog extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: Au Au`)
    }
}
let myDog:dog = new dog('pretinha')