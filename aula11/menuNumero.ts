import { NumeroComplexo } from "./Numero"

var rl = require('readline-sync')
let escolha1 = rl.questionInt(`Escolha um numero real que voce quer: `)
let escolha2 = rl.questionInt(`Escolha um numero imaginario que voce quer: `) 
let numeroVazio = new NumeroComplexo(escolha1, escolha2)
let escolha3 = rl.questionInt(`Escolha outro numero real que voce quer: `)
let escolha4 = rl.questionInt(`Escolha outro numero imaginario que voce quer: `)
let numeroVazio2 = new NumeroComplexo(escolha3, escolha4)
let menu: boolean = true

while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - get
        2 - set real
        3 - set imaginario
        4 - somar 
        5- subtrair
        6- multiplicar
        7- dividir
        8- equals
        9- toString
        10- modulo
     `
    );



    let option = rl.questionInt(`Escolha:`)

    switch (option) {
        case 1:
            numeroVazio.get()
            break
        case 2:
            numeroVazio.setReal()
            break
        case 3:
            numeroVazio.setImaginario()
            break
        case 4:
            console.log(numeroVazio.somar(numeroVazio2))
            break
        case 5:
            console.log(numeroVazio.subtrair(numeroVazio2))
            break
        case 6:
            console.log(numeroVazio.multiplicar(numeroVazio2))
            break
        case 7:
            console.log(numeroVazio.dividir(numeroVazio2))
            break
        case 8:
            console.log(numeroVazio.equals(numeroVazio2))
            break
        case 9:
            console.log(numeroVazio.toString())
            break
        case 10:
            console.log(numeroVazio.modulo(numeroVazio2))
            break
        case 0:
            process.exit(0)
        default:
            console.log(`Opcao invalida`);
            break
    }
}