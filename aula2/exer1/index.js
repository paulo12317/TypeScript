"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Monstro_1 = require("./Monstro");
var meuGuerreiro = new Guerreiro_1.Guerreiro('Paulo', 'Mago', 10);
var meuMosntro = new Monstro_1.Monstro('jeferson');
meuGuerreiro.recebeDano(meuMosntro);
meuGuerreiro.stats();
