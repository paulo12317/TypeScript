import { Console } from "console";


 interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): void;
    final(): void;
}

class Aluno implements Aluno{
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }
    media(): void{
       let media = (this.notaProva1 + this.notaProva2) / 2
       console.log(media)
    }
    final(): void{
        let final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) /3
        console.log(final);
    }
}
