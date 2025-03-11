import { redeSocial } from "./Rede_Social";
import { Usuario } from "./Rede_Social";

let myRedeSocial = new redeSocial()
  
var rl = require('readline-sync')
menuLogin()
function menuLogin() {
    let menu: boolean = true

    while (menu) {
        console.log(
            `
            0 - Finalizar
            1 - Cadastrar
            2 - Login
        `
        );

        let opcao = rl.questionInt("Escolha:")

        switch (opcao) {

            case 1:
                myRedeSocial.CadastroDeUsuarios()
                break


            case 2:
                let verificar: boolean = true
                if (myRedeSocial.bancoUsuario.length >= 1) {
                    let nomeUsu = rl.question('Digite o nome da sua conta: ')
                    let senhaUsu = rl.question('Digite a senha da sua conta: ')

                    for (let i = 0; i <= myRedeSocial.bancoUsuario.length; i++) {
                        if (nomeUsu == myRedeSocial.bancoUsuario[i].nome && senhaUsu == myRedeSocial.bancoUsuario[i].senha) {
                            console.log(`Voce logou na conta ${myRedeSocial.bancoUsuario[i].nome}`)
                            userLogado(myRedeSocial.bancoUsuario[i])
                            verificar = false
                        }
                    }
                }
                if(verificar){
                    console.log('Nome ou senha incorreta!!');
                    
                }
                break
            case 0:
                process.exit(0)
            default:
                console.log("Opcao invalida");
                break
        }
    }
}

function userLogado(user: Usuario) {
    let menu: boolean = true

    while (menu) {
        console.log(`
    0 - Finalizar
    1 - Publicar Post
    2 - Curtir e Comentar
    3 - Seguir
    4 - Mensagens Diretas
    5 - Feed de Noticias
    6 - Mensagens Enviadas
    7 - Ver perfil
    `);

        let opcao = rl.questionInt('Digite a opcao desejada: ')
        switch (opcao) {
            case 1:
                user.PublicacaoPost()

                break

            case 2:

                myRedeSocial.bancoUsuario.forEach((user) => {
                    console.log(`${user.getUser()}`)
                })

                let nomeEscolha = rl.question("Insira o nome do usuario: ")

                let finder = myRedeSocial.bancoUsuario.find((user) => user.nome == nomeEscolha)
                
                //faça o ifelse para verificar se EXISTE o post
                
                    if (finder) {
                        for (let i = 0; i < finder.bancoPost.length; i++) {
                            const conteudo = finder.bancoPost[i].conteudo
                            console.log(`${i} - ${conteudo}`)
                        }
                        let escolherPost = rl.questionInt("Escolha o número do post: ")
                        let comentarCurtir = rl.questionInt("1 - Comentar\n2- Curtir\n o que deseja fazer?")
                        switch (comentarCurtir) {
                            case 1:
                                
                                let coment = rl.question("Comentário: ")
                                finder.bancoPost[escolherPost].comentario.push(coment) 
                                console.log(`Comentários: `)
                                console.log(finder.bancoPost[escolherPost].comentario)
                                
                                break
    
                    
                            case 2:
                                finder.bancoPost[escolherPost].curtida += 1
                                
    
                                console.log(`Curtidas: ${finder.bancoPost[escolherPost].curtida}`);
                                break
                        }
                    } 
                
                break
            case 3:

                for(let i = 0 ; i < myRedeSocial.bancoUsuario.length; i++){
                    console.log(`${i} - ${myRedeSocial.bancoUsuario[i].nome}`)
                    
                }

                let seguir = rl.questionInt('Digite o numero do perfil: ')

                    user.Seguidores(myRedeSocial.bancoUsuario[seguir])
                    
                break
            case 4:
                for(let i = 0 ; i < myRedeSocial.bancoUsuario.length; i++){
                    console.log(`${i} - ${myRedeSocial.bancoUsuario[i].nome}`)
                    
                }
            
                let mensagemDireta = rl.questionInt('Digite o numero do perfil: ')
                
                        user.Mensagem(myRedeSocial.bancoUsuario[mensagemDireta])
                    
                break
            case 5:
                user.feedNoticias()
                break
            case 6:
                for(let i = 0;i < user.bancoMensagens.length;i++){
                    console.log(user.bancoMensagens[i]);
                }

                break

                case 7 :
                    console.log(`
                    seu nome é ${user.nome}
                    tem ${user.idade} anos
                    seguidores: ${user.seguidores}
                    seguindo: ${user.seguindo}
                    seus posts:
                    `)
                    if(user.bancoPost.length > 0){
                        user.bancoPost.forEach((post) => {
                            console.log(post)
                        })
                    } else {
                        console.log(`O ${user.nome} não tem posts`);
                    }
                
                break
            case 0:
                menu = false
                menuLogin()
            default:
                console.log('Opcao invalida !')
                break
        }
    }
}