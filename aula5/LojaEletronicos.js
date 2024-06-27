var Produt = /** @class */ (function () {
    function Produt(nome, preco, marca) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }
    Produt.prototype.lucro = function () {
        return (this.preco * 0.2);
    };
    Produt.prototype.getInforma = function () {
        console.log("O produto ".concat(this.nome, " da marca ").concat(this.marca, " custa ").concat(this.preco, " e o lucro \u00E9 ").concat(this.lucro()));
    };
    return Produt;
}());
var Vend = /** @class */ (function () {
    function Vend(produto, quantidade, valorVendido, data, valorComprado) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorVendido = valorVendido;
        this.valorComprado = valorComprado;
        this.data = data;
    }
    Vend.prototype.valortotal = function () {
        return this.quantidade * this.valorVendido;
    };
    Vend.prototype.descont = function () {
        return this.valortotal() * 0.2;
    };
    Vend.prototype.getInforma = function () {
        console.log("O produto ".concat(this.produto.nome, " da marca ").concat(this.produto.marca, " custa \n        ").concat(this.produto.preco, " e o lucro \u00E9 ").concat(this.produto, "lO valor total da venda \u00E9 ").concat(this.valortotal(), "e o desconto \u00E9 ").concat(this.descont()));
    };
    Vend.prototype.lucro = function () {
        return this.valorVendido - this.valorComprado;
    };
    return Vend;
}());
var TV = new Produt('TV', 1200, 'Sangsung');
var celular = new Produt('A54', 1200, 'Samsung');
var notebook = new Produt('Notebook', 1200, 'Sangsung');
var venda1 = new Vend(TV, 2, 2000, '25 de junho', 1200);
var venda2 = new Vend(celular, 1, 1500, '25 de junho', 900);
function Vendas() {
    return venda1.valortotal() + venda2.valortotal();
}
TV.getInforma();
venda1.lucro();
venda2.getInforma();
Vendas();
