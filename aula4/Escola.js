var leitor = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Professor.prototype.getProfessor = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e sou Professor ha ").concat(this.ano_xp, " anos. "));
    };
    Professor.prototype.setProfessor = function () {
        var newName = leitor.question('Qual o nome do Professor? ');
        var newYers = leitor.question('Qual a idade do professor? ');
        var newAno_xp = leitor.question('Quantos anos de experiencia o professor tem? ');
        this.nome = newName;
        this.ano_xp = newAno_xp;
        this.idade = newYers;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(prof, nome, endereco, num_end) {
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
        this.prof = prof;
    }
    Escola.prototype.setEscola = function () {
        var newName = leitor.question('Qual o nome da escola? ');
        var newEndereco = leitor.question('Qual o endereço da escola?  ');
        var newNum_end = leitor.question('Qual o numero do endereço da escola? ');
        this.nome = newName;
        this.endereco = newEndereco;
        this.num_end = newNum_end;
    };
    Escola.prototype.getEscola = function () {
        console.log("A escola ".concat(this.nome, " fica no endere\u00E7o ").concat(this.endereco, ", numero ").concat(this.num_end, " e tem o professor ").concat(this.prof.nome));
    };
    return Escola;
}());
function criarprof() {
    var novoName = leitor.question('Qual o nome do Professor? ');
    var novoYers = leitor.question('Qual a idade do professor? ');
    var novoAno_xp = leitor.question('Quantos anos de experiencia o professor tem? ');
    var testProfessor = new Professor(novoName, novoYers, novoAno_xp);
    return testProfessor;
}
function exibirMenu() {
    console.log('Menu de opções');
    console.log('1. Criar Professor ');
    console.log('2. Criar Escola');
    console.log('3. Modificar Professor');
    console.log('4. Modificar Escola');
    console.log('5. Visualizar professor');
    console.log('6. visulizar Escola');
    console.log('7. Sair ');
}
var readlineSync = require('readline-sync');
function main() {
    var encerrar = false;
    while (!encerrar) {
        exibirMenu();
        var opcao = readlineSync.question('Digite a opção desejada: ');
        encerrar = escolha(opcao);
    }
}
var testProfessor = new Professor("", 0, 0);
var testEscola = new Escola(testProfessor, '', '', 29);
main();
function escolha(opcao) {
    switch (opcao) {
        case '1':
            testProfessor.setProfessor();
            break;
        case '2':
            testEscola.setEscola();
            break;
        case '3':
            testProfessor.setProfessor();
            break;
        case '4':
            testEscola.setEscola();
            break;
        case '5':
            testProfessor.getProfessor();
            break;
        case '6':
            testEscola.getEscola();
            break;
        case '7':
            console.log('Encerrando programa...');
            return true;
        default:
            console.log('Opção inválida');
    }
    return false;
}
