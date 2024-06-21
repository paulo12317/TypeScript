
var leitor = require('readline-sync')
class Aluno {
    nome: string
    notas: Array<number>

    constructor(nome: string){
        this.nome = nome
        this.notas = []
    }
    registroNotas(): void {
        let nota1 = leitor.questionInt('Insira sua nota: ')
        let nota2 = leitor.questionInt('Insira sua segunda nota: ')
        
        this.notas.push(nota1,nota2)
        
    }
    calcularmedia():void{
       let media = (this.notas[0] + this.notas[1]) / 2
        console.log('A media dos valores é:', media)
    }
}

let nomeAluno = leitor.question('Qual o nome do aluno que você quer verifficar a media? ')

let alunoNovo = new Aluno(nomeAluno)

alunoNovo.registroNotas()
alunoNovo.calcularmedia()