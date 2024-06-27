var rl = require('readline-sync')

class Produt {
    nome:string
    preco:number
    marca:string
    constructor(nome:string,preco:number,marca:string) {
        this.nome = nome
        this.preco = preco
        this.marca = marca
        
    }
    lucro(){
        return (this.preco * 0.2) 
        
    }
    getInforma(){
        console.log(`O produto ${this.nome} da marca ${this.marca} custa ${this.preco} e o lucro é ${this.lucro()}`)
    }
    setProduto(){
        let newNome = rl.question('Qual o produto? ')
        let newpreco = rl.question('Qual o preço do produto? ')
        let newMarca = rl.question('Qual a marca do produto? ')

        this.nome = newNome
        this.preco = newpreco
        this.marca = newMarca
    }

}
class Vend {
    produto:Produt
    quantidade:number
    valorVendido:number
    data:string
    valorComprado:number
    constructor(produto:Produt,quantidade:number,valorVendido:number,data:string,valorComprado:number) {
        this.produto = produto
        this.quantidade = quantidade
        this.valorVendido = valorVendido
        this.valorComprado = valorComprado
        this.data = data

        
    }
    valortotal(): number{
        return this.quantidade * this.valorVendido
    }
    descont(): number{
        return this.valortotal() *0.2
    }
    getInforma():void{
        console.log(`O produto ${this.produto.nome} da marca ${this.produto.marca} custa 
        ${this.produto.preco} e o lucro é ${this.produto.lucro()}lO valor total da venda é ${this.valortotal()}e o desconto é ${this.descont()}`)
    }
    lucro(): number{
        return this.valorVendido - this.valorComprado
    }
    setVenda(){
        let newQuantidade = rl.question('Quantos produtos? ')
        let newValorVendido = rl.question('Qual o valor que o produto foi vendido? ')
        let newValorComprado = rl.question('Qual o valor que o produto foi comprado? ')
        let newData = rl.question('Qual a Data? ')

        this.quantidade = newQuantidade
        this.valorVendido = newValorVendido
        this.valorComprado = newValorComprado
        this.data = newData
    }

}

let TV = new Produt('TV',1200,'Sangsung')
let celular = new Produt('A54',1200,'Samsung')
let notebook = new Produt('Notebook',1200,'Sangsung')
let venda1 = new Vend(TV,2,2000,'25 de junho',1200)
let venda2 = new Vend(celular,1,1500,'25 de junho',900)

function Vendas(){
    console.log(venda1.valortotal() + venda2.valortotal())
}
venda1.setVenda()
TV.getInforma()
console.log(venda1.lucro())
venda2.getInforma()
Vendas()


