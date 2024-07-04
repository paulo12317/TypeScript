import { Jogo } from "./Jogo";
import { JogoEletronico } from "./JogoEletronico";
import { BibliotecaDeJogos } from "./BibliotecaDeJogos";
import { JogoTabuleiro } from "./JogoTabuleiro";

var rl = require('readline-sync')

let freeFire = new JogoEletronico('Free Fire','Tiro',12)
freeFire.plataforma = 'mobile'

let xadrez = new JogoTabuleiro('Xadrez','Pensamento',10)
xadrez.numeroDeJogadores = 2

let myBiblioteca = new BibliotecaDeJogos()

myBiblioteca.adicionaJogo(xadrez)
myBiblioteca.adicionaJogo(freeFire)
myBiblioteca.listaJogos()