"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaDeJogos = void 0;
var rl = require('readline-sync');
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = [];
    }
    BibliotecaDeJogos.prototype.adicionaJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function (titulo) {
        var i;
        for (i = 0; i < this.jogos.length; i++) {
            if (this.jogos[i].titulo == titulo) {
                this.jogos.splice(i, 1)[i];
            }
        }
    };
    BibliotecaDeJogos.prototype.listaJogos = function () {
        var i;
        for (i = 0; i < this.jogos.length; i++) {
            this.jogos[i].getDetalhes();
        }
    };
    return BibliotecaDeJogos;
}());
exports.BibliotecaDeJogos = BibliotecaDeJogos;
