var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comprimentar = function () {
    };
    return Pessoa;
}());
var paulo = /** @class */ (function (_super) {
    __extends(paulo, _super);
    function paulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    paulo.prototype.comprimentar = function () {
        console.log('Ola como você esta', this.nome);
    };
    return paulo;
}(Pessoa));
var eu = new paulo('Paulo2', 16);
eu.comprimentar();
var Criança = /** @class */ (function (_super) {
    __extends(Criança, _super);
    function Criança() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Criança.prototype.comprimentar = function () {
        console.log('Ola como você esta eu tenho', this.idade, 'anos e me chamo', this.nome);
    };
    return Criança;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.comprimentar = function () {
        console.log('Ola como você esta eu tenho', this.idade, 'anos e me chamo', this.nome);
    };
    return Adulto;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.comprimentar = function () {
        console.log('Ola como você esta eu tenho', this.idade, 'anos e me chamo', this.nome);
    };
    return Idoso;
}(Pessoa));
