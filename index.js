var reader = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca, km) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.km = km;
    }
    Carro.prototype.acelerar = function () {
        console.log('vrummm');
    };
    Carro.prototype.drift = function () {
        console.log('slc ele fez um drift');
    };
    Carro.prototype.freiar = function () {
        console.log('irhhhhhhhhhh');
    };
    return Carro;
}());
//para conseguir rodar precisa npx tcs index.ts
//new rodasCarro = reader.questionInt()
var meuCarro = new Carro(15, 1.5, 'pretinho', 'Skiline', 'Nissan', 420);
console.log(meuCarro.modelo);
meuCarro.acelerar();
meuCarro.drift();
meuCarro.freiar();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, CPF, peso) {
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.peso = peso;
    }
    return Pessoa;
}());
var nomePessoa = reader.question('qual o nome da pessoa? ');
var idadePessoa = reader.question('qual a idade da pessoa? ');
var CPFPessoa = reader.question('qual o CPF da pessoa? ');
var pesoPessoa = reader.question('qual o peso da pessoa? ');
var pessoa1 = new Pessoa(nomePessoa, idadePessoa, CPFPessoa, pesoPessoa);
