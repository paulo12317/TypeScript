"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redeSocial = exports.Usuario = exports.Post = void 0;
var rl = require('readline-sync');
var Post = /** @class */ (function () {
    function Post() {
        this.comentario = [];
    }
    return Post;
}());
exports.Post = Post;
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.seguidores = [];
        this.seguindo = [];
        this.bancoMensagens = [];
        this.bancoPost = [];
        this.notificacao = [];
    }
    Usuario.prototype.Mensagem = function (us2) {
        var mensagem = rl.question('O que voce quer enviar para ', us2.nome, ': ');
        var men = this.nome + "Enviou: ".concat(mensagem);
        us2.bancoMensagens.push(men);
    };
    Usuario.prototype.getUser = function () {
        return this.nome;
    };
    Usuario.prototype.PublicacaoPost = function () {
        var post = rl.question('O que voce quer postar: ');
        var newPost = new Post();
        newPost.conteudo = post;
        newPost.usuario = this.nome;
        newPost.curtida = 0;
        this.bancoPost.push(newPost);
    };
    Usuario.prototype.CurtidasComentários = function (us2, n) {
        var escolha = rl.question('Voce quer curtir ou comentar? ');
        if (escolha.toLowerCase() == 'curtir') {
            us2.bancoPost[n].curtida += 1;
            us2.notificacao.push("".concat(this.nome, " curtiu o seu post!!"));
        }
        else {
            var coment = rl.question('Digite seu comentario: ');
            us2.bancoPost[n].comentario.push("\n".concat(coment));
            us2.notificacao.push("".concat(this.nome, " comentou no seu post!!"));
        }
    };
    Usuario.prototype.Seguidores = function (us2) {
        var escolha = rl.question('Voce quer seguir este perfil? sim|nao ');
        if (escolha.toLowerCase() == 'sim') {
            console.log('Voce começou a seguir este perfil!!');
            this.seguindo.push(us2.nome);
            us2.seguidores.push(this.nome);
            us2.notificacao.push("".concat(this.nome, " come\u00E7ou a seguir voce!!"));
        }
    };
    Usuario.prototype.feedNoticias = function () {
        console.log(this.notificacao);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
var redeSocial = /** @class */ (function () {
    function redeSocial() {
        this.bancoUsuario = [];
    }
    redeSocial.prototype.CadastroDeUsuarios = function () {
        var nome = rl.question("escreva o nome do seu novo usuario: ");
        var idade = rl.questionInt("digite sua idade ");
        var senha = rl.questionInt('Digite seu pin:  ');
        var newUsario = new Usuario();
        newUsario.nome = nome;
        newUsario.idade = idade;
        newUsario.senha = senha;
        this.bancoUsuario.push(newUsario);
    };
    redeSocial.prototype.perfil = function (us2) {
        console.log("\n        Nome: ".concat(us2.nome, "\n        Idade: ").concat(us2.idade, "\n        Seguidores: ").concat(us2.seguidores.length, "\n        Seguindo: ").concat(us2.seguindo.length));
    };
    return redeSocial;
}());
exports.redeSocial = redeSocial;
