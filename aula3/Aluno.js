var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.registroNotas = function () {
        var nota1 = leitor.questionInt('Insira sua nota: ');
        var nota2 = leitor.questionInt('Insira sua segunda nota: ');
        this.notas.push(nota1, nota2);
    };
    Aluno.prototype.calcularmedia = function () {
        var media = (this.notas[0] + this.notas[1]) / 2;
        console.log('A media dos valores é:', media);
    };
    return Aluno;
}());
var nomeAluno = leitor.question('Qual o nome do aluno que você quer verifficar a media? ');
var alunoNovo = new Aluno(nomeAluno);
alunoNovo.registroNotas();
alunoNovo.calcularmedia();
