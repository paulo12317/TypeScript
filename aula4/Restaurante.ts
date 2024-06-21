var leitor = require('readline-sync')

class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number,ano_xp: number){
    this.nome = nome 
    this.idade = idade
    this.ano_xp = ano_xp
    }
    getCozinheiro():void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e sou chefe ha ${this.ano_xp} anos. `)
    }
    setCozinheiro(): void{
        let newName = leitor.question('Qual o nome do coziheiro? ')
        let newYers = leitor.question('Qual a idade do coziheiro? ')
        let newAno_xp = leitor.question('Quantos anos de experiencia o coziheiro tem? ')

        this.nome = newName
        this.ano_xp = newAno_xp
        this.idade = newYers
    }
}

class Restaurante{
    cz: Cozinheiro
    nome: string
    endereco: string
    num_end: number

    constructor(cz: Cozinheiro,
        nome: string,
        endereco: string,
        num_end: number,
        ){
            this.nome = nome
            this.endereco = endereco
            this.num_end = num_end
            this.cz = cz
        }
        setRestaurante():void {
            let newName = leitor.question('Qual o nome do restaurante? ')
        let newEndereco = leitor.question('Qual o endereço do restaurante?  ')
        let newNum_end = leitor.question('Qual o numero do endereço do restaurante ')

        this.cz.setCozinheiro()
        this.nome = newName
        this.endereco = newEndereco
        this.num_end = newNum_end
        }
        getRestaurante():void {
            console.log(`O restaurante ${this.nome} fica no endereço ${this.endereco}, numero ${this.num_end} e tem o cozinheiro ${this.cz.nome}`)
}
}

//istancia da classe cozinheiro
let chefJeff = new Cozinheiro('Jeff',34,4)


let chefPaul = new Cozinheiro('teshghd',37,8327)

chefPaul.getCozinheiro()

let variatto = new Restaurante(chefPaul,'Variato','Av. imperatris',234)

variatto.setRestaurante()
variatto.getRestaurante()
