var rl = require('readline-sync')

class Pessoa{
    nome: string
    sobrenome: string
    nomeDoPai: string
    nomeDaMae: string
    RG: number
    CPF: number
    dataNascimento: string

    constructor(nome: string,sobrenome: string,nomeDoPai: string,nomeDaMae: string,RG: number,CPF: number,dataNascimento: string){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomeDoPai = nomeDoPai
        this.nomeDaMae = nomeDaMae
        this.RG = RG
        this.CPF = CPF 
        this.dataNascimento = dataNascimento
        }
        setPessoa(): void {
            let newNome = rl.question('Digite o nome da pessoa: ')
            let newSobrenome = rl.question('Digite o sobrenome da pessoa: ')
            let newNomePai = rl.question('Digite o nome do pai da pessoa: ')
            let newNomeMae = rl.question('Digite o nome da Mae da pessoa: ')
            let newRG = rl.questionInt('Digite o RG da pessoa: ')
            let newCPF = rl.questionInt('Digite o CPF da pessoa: ')
            let newDataNascimento = rl.question('Digite a data de nascimento da pessoa: ')

            if(newNome == ''){
                this.nome = this.nome
            }else{
                this.nome = newNome
            }

            if(newSobrenome == ''){
                this.sobrenome = this.sobrenome
            }else{
                this.sobrenome = newSobrenome
            }

            if(newNomePai == ''){
                this.nomeDoPai = this.nomeDoPai
            }else{
                this.nomeDoPai = newNomePai
            }

            if(newNomeMae == ''){
                this.nomeDaMae = this.nomeDaMae
            }else{
                this.nomeDaMae = newNomeMae
            }

            if(newRG == ''){
                this.RG = this.RG
            }else{
                this.RG = newRG
            }

            if(newCPF == ''){
                this.CPF = this.CPF
            }else{
                this.CPF = newCPF
            }

            if(newDataNascimento == ''){
                this.dataNascimento = this.dataNascimento
            }else{
                this.dataNascimento = newDataNascimento
            }
        }

        getPessoa(): void {
            console.log(`Nome: ${this.nome}\nSobrenome: ${this.sobrenome}\nNome do pai: ${this.nomeDoPai}\nNome da mae: ${this.nomeDaMae}\nRG: ${this.RG}\nCPF: ${this.CPF}\nData de nascimento: ${this.dataNascimento} `);
        }
}

let amanda = new Pessoa('','','','',0,0,'')

amanda.setPessoa()
amanda.getPessoa()