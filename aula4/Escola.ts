var leitor = require('readline-sync')

class Professor{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number,ano_xp: number){
    this.nome = nome 
    this.idade = idade
    this.ano_xp = ano_xp
    }
    getProfessor():void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e sou Professor ha ${this.ano_xp} anos. `)
    }
    setProfessor(): void{
        let newName = leitor.question('Qual o nome do Professor? ')
        let newYers = leitor.question('Qual a idade do professor? ')
        let newAno_xp = leitor.question('Quantos anos de experiencia o professor tem? ')

        this.nome = newName
        this.ano_xp = newAno_xp
        this.idade = newYers
    }
}

class Escola{
    prof: Professor
    nome: string
    endereco: string
    num_end: number

    constructor(prof: Professor,
        nome: string,
        endereco: string,
        num_end: number,
        ){
            this.nome = nome
            this.endereco = endereco
            this.num_end = num_end
            this.prof = prof
        }
        setEscola():void {
            let newName = leitor.question('Qual o nome da escola? ')
        let newEndereco = leitor.question('Qual o endereço da escola?  ')
        let newNum_end = leitor.question('Qual o numero do endereço da escola? ')

        this.nome = newName
        this.endereco = newEndereco
        this.num_end = newNum_end
        }
        getEscola():void {
            console.log(`A escola ${this.nome} fica no endereço ${this.endereco}, numero ${this.num_end} e tem o professor ${this.prof.nome}`)
    }
}
function criarprof(){
        let novoName = leitor.question('Qual o nome do Professor? ')
        let novoYers = leitor.question('Qual a idade do professor? ')
        let novoAno_xp = leitor.question('Quantos anos de experiencia o professor tem? ')
        let testProfessor = new Professor(novoName,novoYers,novoAno_xp)
        return testProfessor
}

function exibirMenu () {
    console.log('Menu de opções'); 
    console.log('1. Criar Professor ');
    console.log('2. Criar Escola');
    console.log('3. Modificar Professor');
    console.log('4. Modificar Escola');
    console.log('5. Visualizar professor');
    console.log('6. visulizar Escola');
    console.log('7. Sair ')
}
const readlineSync = require('readline-sync');
function main () {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu()       
         let opcao = readlineSync.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}
let testProfessor = new Professor("",0,0)
let testEscola = new Escola(testProfessor,'','',29)
main();
function escolha (opcao) {
    switch (opcao) {
        case '1':
           testProfessor.setProfessor()
            break;
        case '2':
            testEscola.setEscola()
            break;
        case '3':
            testProfessor.setProfessor()
            break;
        case '4':
            testEscola.setEscola()
            break;
        case '5':
            testProfessor.getProfessor()
            break;    
        case '6':
            testEscola.getEscola()
              break;
        case '7':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}