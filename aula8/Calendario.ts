
export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}

export class Data implements Data {
    ano: number
    mes: number
    dia: number

    constructor(dia: number, mes: number, ano: number){
        this.ano = ano
        this.mes = mes
        this.dia = dia
    }
    compara(outraData: Data): void{
        if(outraData.dia == this.dia){
            console.log(`Os dias sao iguais`)
        }
        if(outraData.mes == this.mes){
            console.log(`Os meses sao iguais`)
        }
        if(outraData.ano == this.ano){
            console.log(`Os ano sao iguais`)
        }
    }
    getDia(): number{
        return this.dia
    }
    getmes(): number{
        return this.mes
    }
    getAno(): number{
        return this.ano
    }
    getMesExtenso(): void {   
        switch (this.mes) {
                case 1:
            console.log('Janeiro')
                break
                case 2:
            console.log( 'Fevereiro')
                break
                case 3:
            console.log('Março')
                break
                case 4:
            console.log('Abril')
                break
                case 5:
            console.log('Maio')
                break
                case 6:
            console.log('Junho')
                break
                case 7:
            console.log( 'Julho')
                break
                case 8:
            console.log('Agosto')
                break
                case 9:
            console.log('Setembro')
                break
                case 10:
            console.log('Outubro')
                break
                case 11:
            console.log('Novembro')
                break    
                case 12:
            console.log('Dezembro')
                break
                default:
                    console.log('Mês inválido')
        }
    }
    isBissexto(): boolean {
        
        if(this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            return true
        }else if(this.ano % 4 == 0 && this.ano% 100 != 0){
            return true
        }else{
            return false
        }
    }
    clone(): Data {
        let newData = new Data(this.dia,this.mes,this.ano)
        return newData 
    }
}