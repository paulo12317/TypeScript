"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var newVida;
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacar = function (Guerreiro) {
        console.log("o Mostro atacou o Guerreiro");
        newVida = this.forca - Guerreiro.saude;
    };
    Monstro.prototype.recebeDano = function (Guerreiro) {
        console.log("o Guerreiro atacou o Mostro");
        Guerreiro.forca - this.saude;
    };
    Monstro.prototype.stats = function () {
        console.log(newVida);
        console.log(this.forca);
        console.log(this.saude);
    };
    return Monstro;
}());
exports.Monstro = Monstro;
