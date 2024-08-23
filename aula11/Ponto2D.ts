/*Ponto2D
Crie uma classe TypeScript chamada `Ponto2D` que represente um ponto no plano cartesiano. Além dos atributos identificados, a classe deve oferecer os seguintes membros:

a) Construtores sobrecarregados que permitam a inicialização do ponto:

i) Construtor padrão (sem parâmetros) na origem do plano 2D.

ii) Construtor com dois parâmetros `x` e `y` do tipo `number` para definir as coordenadas do ponto.

iii) Construtor que aceita outro objeto do tipo `Ponto2D` para criar um ponto com as mesmas coordenadas.

b) Métodos de acesso (getter/setter) para os atributos `x` e `y`.

c) Métodos sobrecarregados para movimentação do ponto com os mesmos parâmetros indicados para os construtores.

d) Método `equals(outroPonto: Ponto2D): boolean` para comparação semântica dos pontos.

e) Método `toString(): string` para representação do objeto como string.

f) Método `distancia(outroPonto: Ponto2D): number` para calcular a distância do ponto atual até outro ponto.

g) Método `clone(): Ponto2D` que cria e retorna uma cópia do ponto. */

var rl = require('readline-sync')

class Ponto2D{
    x: number
    y: number

    constructor(){
        this.x = 0
        this.y = 0
    }

   public get(): void{
        console.log(`Os pontos sao: x = ${this.x} y = ${this.y}`);
        
    }

   public setX(): void{
        let escolha = rl.questionInt('Qual o valor de X: ')
        this.x = escolha
    }

   public setY(): void{
        let escolha = rl.questionInt('Qual o valor de Y: ')
        this.y = escolha
    }

    movimentacao(): void{
        let X = rl.questionInt('Qual o valor de X: ')
        let Y = rl.questionInt('Qual o valor de Y: ')

        this.x = X
        this.y = Y
    }

    equals(outroPonto: Ponto2D): boolean {
        if (this.x == outroPonto.x && this.y == outroPonto.y) {
            console.log('os pontos são iguais')
            return true
        } else {
            console.log('os pontos são diferentes')
            return false
        }
    }

    toString(): string{
        return `
        X = (${this.x}) 
        Y = (${this.y})`
    }

    distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)
    }

    clone(){
        let newPonto = new Ponto2D()
        newPonto.x = this.x
        newPonto.y = this.y

        return newPonto
    }
}

class PontoComParametro extends Ponto2D{
    x: number
    y: number

    constructor(x: number,y: number){
    super()

    this.x = x
    this.y = y
    }
}

class Ponto2DQueijo extends Ponto2D{
    outroPonto: Ponto2D

    constructor(outroPonto: Ponto2D){
        super()

        this.x = outroPonto.x
        this.y = outroPonto.y
    }
}