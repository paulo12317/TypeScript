"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rede_Social_1 = require("./Rede_Social");
var myRedeSocial = new Rede_Social_1.redeSocial();
var rl = require('readline-sync');
menuLogin();
function menuLogin() {
    var menu = true;
    while (menu) {
        console.log("\n            0 - Finalizar\n            1 - Cadastrar\n            2 - Login\n        ");
        var opcao = rl.questionInt("Escolha:");
        switch (opcao) {
            case 1:
                myRedeSocial.CadastroDeUsuarios();
                break;
            case 2:
                var verificar = true;
                if (myRedeSocial.bancoUsuario.length >= 1) {
                    var nomeUsu = rl.question('Digite o nome da sua conta: ');
                    var senhaUsu = rl.question('Digite a senha da sua conta: ');
                    for (var i = 0; i <= myRedeSocial.bancoUsuario.length; i++) {
                        if (nomeUsu == myRedeSocial.bancoUsuario[i].nome && senhaUsu == myRedeSocial.bancoUsuario[i].senha) {
                            console.log("Voce logou na conta ".concat(myRedeSocial.bancoUsuario[i].nome));
                            userLogado(myRedeSocial.bancoUsuario[i]);
                            verificar = false;
                        }
                    }
                }
                if (verificar) {
                    console.log('Nome ou senha incorreta!!');
                }
                break;
            case 0:
                process.exit(0);
            default:
                console.log("Opcao invalida");
                break;
        }
    }
}
function userLogado(user) {
    var menu = true;
    var _loop_1 = function () {
        console.log("\n    0 - Finalizar\n    1 - Publicar Post\n    2 - Curtir e Comentar\n    3 - Seguir\n    4 - Mensagens Diretas\n    5 - Feed de Noticias\n    6 - Mensagens Enviadas\n    7 - Ver perfil\n    ");
        var opcao = rl.questionInt('Digite a opcao desejada: ');
        switch (opcao) {
            case 1:
                user.PublicacaoPost();
                break;
            case 2:
                myRedeSocial.bancoUsuario.forEach(function (user) {
                    console.log("".concat(user.getUser()));
                });
                var nomeEscolha_1 = rl.question("Insira o nome do usuario: ");
                var finder = myRedeSocial.bancoUsuario.find(function (user) { return user.nome == nomeEscolha_1; });
                //faça o ifelse para verificar se EXISTE o post
                if (finder) {
                    for (var i = 0; i < finder.bancoPost.length; i++) {
                        var conteudo = finder.bancoPost[i].conteudo;
                        console.log("".concat(i, " - ").concat(conteudo));
                    }
                    var escolherPost = rl.questionInt("Escolha o número do post: ");
                    var comentarCurtir = rl.questionInt("1 - Comentar\n2- Curtir\n o que deseja fazer?");
                    switch (comentarCurtir) {
                        case 1:
                            var coment = rl.question("Comentário: ");
                            finder.bancoPost[escolherPost].comentario.push(coment);
                            console.log("Coment\u00E1rios: ");
                            console.log(finder.bancoPost[escolherPost].comentario);
                            break;
                        case 2:
                            finder.bancoPost[escolherPost].curtida += 1;
                            console.log("Curtidas: ".concat(finder.bancoPost[escolherPost].curtida));
                            break;
                    }
                }
                break;
            case 3:
                for (var i = 0; i < myRedeSocial.bancoUsuario.length; i++) {
                    console.log("".concat(i, " - ").concat(myRedeSocial.bancoUsuario[i].nome));
                }
                var seguir = rl.questionInt('Digite o numero do perfil: ');
                user.Seguidores(myRedeSocial.bancoUsuario[seguir]);
                break;
            case 4:
                for (var i = 0; i < myRedeSocial.bancoUsuario.length; i++) {
                    console.log("".concat(i, " - ").concat(myRedeSocial.bancoUsuario[i].nome));
                }
                var mensagemDireta = rl.questionInt('Digite o numero do perfil: ');
                user.Mensagem(myRedeSocial.bancoUsuario[mensagemDireta]);
                break;
            case 5:
                user.feedNoticias();
                break;
            case 6:
                for (var i = 0; i < user.bancoMensagens.length; i++) {
                    console.log(user.bancoMensagens[i]);
                }
                break;
            case 7:
                console.log("\n                    seu nome \u00E9 ".concat(user.nome, "\n                    tem ").concat(user.idade, " anos\n                    seguidores: ").concat(user.seguidores, "\n                    seguindo: ").concat(user.seguindo, "\n                    seus posts:\n                    "));
                if (user.bancoPost.length > 0) {
                    user.bancoPost.forEach(function (post) {
                        console.log(post);
                    });
                }
                else {
                    console.log("O ".concat(user.nome, " n\u00E3o tem posts"));
                }
                break;
            case 0:
                menu = false;
                menuLogin();
            default:
                console.log('Opcao invalida !');
                break;
        }
    };
    while (menu) {
        _loop_1();
    }
}
