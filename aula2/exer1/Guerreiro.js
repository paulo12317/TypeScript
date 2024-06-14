"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var newVida;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }
    Guerreiro.prototype.atacar = function (Monstro) {
        console.log("o Guerreiro  atacou o Monstro");
        this.forca - Monstro.saude;
    };
    Guerreiro.prototype.recebeDano = function (Monstro) {
        console.log("o Mostro atacou o Guerreiro");
        newVida = this.saude - Monstro.forca;
    };
    Guerreiro.prototype.stats = function () {
        console.log(this.nome);
        console.log(this.tipo);
        console.log(this.forca);
        console.log(newVida);
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
