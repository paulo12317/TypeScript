
class Data {
    dia: number
    mes: number
    ano: number

    constructor( dia: number,
        mes: number,
        ano: number){
            this.dia = dia 
            this.mes = mes
            this.ano = ano
        }
}

let aniversario:Data = new Data(25,10,2000)
console.log(aniversario)
   