class Livro {
    titulo: string
    autor: string
    anoPublicacao: number
        constructor(titulo: string, autor: string, anoPublicacao: number){
            this.titulo = titulo
            this.autor = autor
            this.anoPublicacao = anoPublicacao
        }
        obterInformacoes():void{
            console.log(`O livro ${this.titulo} foi publicado no ano de ${this.anoPublicacao} e foi escrito por ${this.autor}`)
        }
}

let myLivro:Livro = new Livro('biblia','Deus',0)
