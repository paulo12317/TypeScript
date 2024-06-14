"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coruja = void 0;
var Coruja = /** @class */ (function () {
    function Coruja(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Coruja.prototype.chirriar = function () {
        console.log('iuuuu');
    };
    Coruja.prototype.voar = function (tempo) {
        console.log('ela voou para o arizonte por', tempo, 'anos');
    };
    Coruja.prototype.comer = function (quantidade) {
        console.log("inhak inhak ela esta comendo ".concat(quantidade, " de vezes"));
    };
    return Coruja;
}());
exports.Coruja = Coruja;
