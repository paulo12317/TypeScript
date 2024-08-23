/*1. Contador

Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.
 */

class Contador{
    valor: number

    constructor(valor){
        this.valor = valor
    }
    zerar(): void{
        this.valor = 0 
        console.log('O valor agora é 0');
        
    }
    incrementar(): void{
        this.valor += 1

    }
    valorAtual(): number{
        return this.valor 
    }
}