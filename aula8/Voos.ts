import { Data } from "./Calendario";

interface Voo {
    constructor(numeroVoo: string, data: string);
    proximoLivre(): void;
    verifica(cadeira: number): void;
    ocupa(cadeira: number): void;
    vagas(): number;
    getVoo(): void;
    getData(): void;
    clone(): Voo;
}

class Voo implements Voo{
    public data: string
    public numeroVoo: number
    private cadeira: Array<number>

     constructor(numeroVoo: number, data: string){
        this.data = data
        this.numeroVoo = numeroVoo
        let i: number
        for(i = 1;i <= 100; i++){
            this.cadeira.push(0)
        }
     }

    public proximoLivre(): void {
         let i: number
         for(i = 1;i < this.cadeira.length; i++){
            if(this.cadeira[i] == 0){
                console.log(`A cadeira de numero ${i} é a proxima livre`)
            }
         }
     }
    public verifica(cadeira: number): void {
         let i: number
         for(i = 0; i <= this.cadeira.length;i++){
            if(cadeira == i && this.cadeira[i] == 0){
                console.log(`Essa cadeira esta livre`);
            }else{
                console.log(`Essa cadeira esta ocupada`);
            }
         }
     }
    public ocupa(cadeira: number): void {
        
         let i: number
         for(i = 0; i <= this.cadeira.length;i++){
            if(cadeira == i && this.cadeira[i] == 0){
                console.log('Voce ocupou essa cadeira')
                this.cadeira[i] = 1
                }
                else{
                    console.log('Essa cadeira esta ocupada');
                    
                }
            }
         }

        public getVoo(): void {
            console.log(`Seu voou é: ${this.numeroVoo}`)
            
        }
    
        public getData(): void {
            console.log(`Data do voo: ${this.data}`)
            
        }
    
        public clone(): Voo {
            let vooDois = new Voo(this.numeroVoo,this.data)
            vooDois.cadeira = this.cadeira
            return vooDois
        }

        public vaga(): number {
            let i = 0
            let n = 0
            while(this.cadeira.length[i]<99){
                i++
                if(this.cadeira[i] == 0){
                    n ++
                    
                    }
            }
            return n
        }
     }
