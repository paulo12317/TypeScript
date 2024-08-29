import { Ponto2D, Ponto2DComCoordenadas } from "./ponto";

var rl = require('readline-sync')
let xUm = rl.questionInt("Insira o Primeiro Valor de x: ")
let yUm = rl.questionInt("Insira o Primeiro Valor de x: ")
let opcao = new Ponto2DComCoordenadas(xUm, yUm)
let opcao2 = new Ponto2D()
let menu: boolean = true

while(menu){
    console.log(
        `
        0 - Finalizar
        1 - get
        2 - set x
        3 - set y
        4 - movimentação  
        5- equals
        6- toString
        7- distancia
        8- clone     `
    );
    


let option = rl.questionInt(`Escolha:`)

switch(option){
    case 1: 
    opcao2.getXeY()
        break
    case 2:
    opcao2.setX()
        break
    case 3:
    opcao2.setY()
        break
    case 4: 
    opcao2.movimentacao()
        break
    case 5:
    console.log(opcao2.equals(opcao))
        break
    case 6:
    opcao2.toString()
        break
    case 7:
    console.log(opcao2.distancia(opcao))
        break
    case 8:
    opcao2.clone()
    break
    case 0:
        process.exit(0)
    default:
        console.log(`Opcao invalida`);
        break
}
}