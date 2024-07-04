"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoEletronico = void 0;
var Jogo_1 = require("./Jogo");
var rl = require('readline-sync');
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoEletronico.prototype.super = function (titulo, genero, classificacaoEtaria, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    };
    JogoEletronico.prototype.getDetalhes = function () {
        console.log("O jogo se chama ".concat(this.titulo, ", tem o genero ").concat(this.genero, ", roda na plataforma ").concat(this.plataforma, " e a classifica\u00E7\u00E3o etaria de ").concat(this.classificacaoEtaria, " anos."));
    };
    JogoEletronico.prototype.setJogo = function () {
        var newTitulo = rl.question('Fale o titulo do jogo: ');
        var newGenero = rl.question('Fale o genero do jogo: ');
        var newClassicacaoEtaria = rl.question('Fale a classificacao etaria do jogo: ');
        var newPlataforma = rl.question('Qual a plataforma do jogo: ');
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassicacaoEtaria;
        this.plataforma = newPlataforma;
    };
    return JogoEletronico;
}(Jogo_1.Jogo));
exports.JogoEletronico = JogoEletronico;
