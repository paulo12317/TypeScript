"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Cachorro.prototype.latir = function () {
        console.log('Auuu Auuu');
    };
    Cachorro.prototype.comer = function (quantidade) {
        console.log('Olha como ele come!!!!!, ele comeu', quantidade, ' kilos de comida');
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
