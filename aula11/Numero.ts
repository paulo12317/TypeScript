/*Número Complexo

Crie uma classe TypeScript chamada `NumeroComplexo` que represente um número complexo. A classe deve fornecer as seguintes operações:

a) Construtor que recebe valores das partes real e imaginária.

b) Métodos getter/setter para os atributos da parte real e imaginária.

c) Método `somar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o adiciona ao número complexo atual. (a+bi) + (c+di) = (a+c) + (b+d)i

d) Método `subtrair(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o subtrai do número complexo atual. (a+bi) - (c+di) = (a-c) + (b-d)i

e) Método `multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o multiplica ao número complexo atual. (a+bi) * (c+di) = (ac - bd) + (ad + bc)i

f) Método `dividir(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o divide pelo número complexo atual. (a+bi) / (c+di) = (ac + bd) / (c² + d²) + (bc - ad) / (c² + d²)i

g) Método `equals(outroComplexo: NumeroComplexo): boolean` para comparação semântica dos números complexos.

h) Método `toString(): string` que gera e retorna a representação em string do número complexo.

i) Método `modulo(): number` que retorna o módulo do número complexo.*/

class NumeroComplexo{
    valorR: number
    valorI: number

    constructor(valorR: number,valorI:number){
        this.valorI = valorI
        this.valorR = valorR
    }

    get(): void{
        console.log(`
        Valor Real: ${this.valorR}
        Valor Imaginario: ${this.valorI}`);
        
    }

    setReal(): void{
        let real = rl.questionInt('Fale o valor Real: ')
        this.valorR = real
    }
     
    setImaginario(): void{
        let imaginario = rl.questionInt('Fale o valor Imaginario: ')
        this.valorI = imaginario
    }

    somar(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.valorR + outroNumero.valorR
        let newImaginario = this.valorI + outroNumero.valorI
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    subitrair(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.valorR - outroNumero.valorR
        let newImaginario = this.valorI - outroNumero.valorI
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    dividir(outroNumero: NumeroComplexo){
        let newReal = this.valorR / outroNumero.valorR
        let newImaginario = this.valorI / outroNumero.valorI
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    multiplicar(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.valorR * outroNumero.valorR
        let newImaginario = this.valorI * outroNumero.valorI
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    equals(outroNumero: NumeroComplexo): boolean{
        if(Math.sqrt((outroNumero.valorR - this.valorR) ** 2 + (outroNumero.valorI - this.valorI) ** 2)){
            return true
        }else{
            return false
        }
    }

    toString(): string{
        return `
        Valor Real: (${this.valorR})
        Valor Imaginario: (${this.valorI})`
    }

    modulo(outroNumero: NumeroComplexo): string {
        let resultado = Math.sqrt(this.valorR * outroNumero.valorR + this.valorI * outroNumero.valorI )
        let resultado2 = resultado + 'i'
        return resultado2;
    }
} 