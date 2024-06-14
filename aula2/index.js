"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./dog");
var coruja_1 = require("./coruja");
var meuCachorro = new dog_1.Cachorro('Mel', 10);
var minhaCoruja = new coruja_1.Coruja('Edina', 4);
meuCachorro.latir();
minhaCoruja.voar(74);
console.log(minhaCoruja.nome);
