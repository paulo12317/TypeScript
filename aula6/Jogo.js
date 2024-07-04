"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var rl = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        console.log("O jogo se chama ".concat(this.titulo, ", tem o genero ").concat(this.genero, " e a classifica\u00E7\u00E3o etaria de ").concat(this.classificacaoEtaria, " anos."));
    };
    Jogo.prototype.setJogo = function () {
        var newTitulo = rl.question('Fale o titulo do jogo: ');
        var newGenero = rl.question('Fale o genero do jogo: ');
        var newClassicacaoEtaria = rl.question('Fale a classificacao etaria do jogo: ');
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassicacaoEtaria;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
