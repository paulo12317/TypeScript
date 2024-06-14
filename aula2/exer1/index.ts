import { Guerreiro } from "./Guerreiro";
import { Monstro } from "./Monstro";

let meuGuerreiro:Guerreiro = new Guerreiro('Paulo','Mago',10)
let meuMosntro:Monstro = new Monstro('jeferson')


meuGuerreiro.recebeDano(meuMosntro)
meuGuerreiro.stats()