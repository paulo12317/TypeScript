var leitor = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e sou chefe ha ").concat(this.ano_xp, " anos. "));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var newName = leitor.question('Qual o nome do coziheiro? ');
        var newYers = leitor.question('Qual a idade do coziheiro? ');
        var newAno_xp = leitor.question('Quantos anos de experiencia o coziheiro tem? ');
        this.nome = newName;
        this.ano_xp = newAno_xp;
        this.idade = newYers;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
        this.cz = cz;
    }
    Restaurante.prototype.setRestaurante = function () {
        var newName = leitor.question('Qual o nome do restaurante? ');
        var newEndereco = leitor.question('Qual o endereço do restaurante?  ');
        var newNum_end = leitor.question('Qual o numero do endereço do restaurante ');
        this.nome = newName;
        this.endereco = newEndereco;
        this.num_end = newNum_end;
    };
    Restaurante.prototype.getRestaurante = function () {
        console.log("O restaurante ".concat(this.nome, " fica no endere\u00E7o ").concat(this.endereco, ", numero ").concat(this.num_end, " e tem o cozinheiro ").concat(this.cz.nome));
    };
    return Restaurante;
}());
//istancia da classe cozinheiro
var chefJeff = new Cozinheiro('Jeff', 34, 4);
var chefPaul = new Cozinheiro('teshghd', 37, 8327);
chefPaul.setCozinheiro();
chefPaul.getCozinheiro();
var variatto = new Restaurante(chefPaul, 'Variato', 'Av. imperatris', 234);
variatto.setRestaurante();
variatto.getRestaurante();
