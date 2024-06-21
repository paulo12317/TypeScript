class Pessoa {
    nome: string
    idade: number
    
    constructor(nome: string,idade:number){
        this.nome = nome
        this.idade = idade
    }
    comprimentar(): void {
    }
}

let eu:Pessoa = new Pessoa('Paulo2',16)

eu.comprimentar()

class Crianca extends Pessoa {
    comprimentar(): void {
        console.log('Ola como você esta eu tenho',this.idade,'anos e me chamo',this.nome)
    }
}
class Adulto extends Pessoa {
    comprimentar(): void {
        console.log('Ola como você esta eu tenho',this.idade,'anos e me chamo',this.nome)
    }
}
class Idoso extends Pessoa {
    comprimentar(): void {
        console.log('Ola como você esta eu tenho',this.idade,'anos e me chamo',this.nome)
    }
}
let kid = new Crianca('enzo',4)
let adult = new Adulto('Paulo',23)
let oldmen = new Idoso('Francisco', 102)

kid.comprimentar()
adult.comprimentar()
oldmen.comprimentar()