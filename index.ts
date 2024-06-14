var reader = require('readline-sync')

class Carro{
    rodas: Number
    motor: Number
    cor: string
    modelo: string
    marca: string
    km: Number
    constructor(
        rodas: Number,
        motor: Number,
        cor: string,
        modelo: string,
        marca: string,
        km: Number){
            this.rodas = rodas
            this.motor = motor
            this.cor = cor
            this.modelo = modelo
            this.marca = marca
            this.km = km
    }
    acelerar(){
        console.log('vrummm')
    }
    drift(){
        console.log('slc ele fez um drift')
    }
    freiar(){
        console.log('irhhhhhhhhhh')
    }
}

//para conseguir rodar precisa npx tcs index.ts
//new rodasCarro = reader.questionInt()

let meuCarro = new Carro(15,1.5,'pretinho','Skiline','Nissan',420)

console.log(meuCarro.modelo);

meuCarro.acelerar();
meuCarro.drift();
meuCarro.freiar();   

class Pessoa{
    nome: string
    idade: Number
    CPF: Number
    peso: Number
    constructor(
        nome: string,
        idade: Number,
        CPF: Number,
        peso: Number){
            this.nome = nome
            this.idade = idade
            this.CPF = CPF
            this.peso = peso
    }
  
}
var nomePessoa = reader.question('qual o nome da pessoa? ')
var idadePessoa = reader.questionInt('qual a idade da pessoa? ')
var CPFPessoa = reader.questionInt('qual o CPF da pessoa? ')
var pesoPessoa = reader.questionInt  ('qual o peso da pessoa? ')

let pessoa1 = new Pessoa(nomePessoa,idadePessoa,CPFPessoa,pesoPessoa)