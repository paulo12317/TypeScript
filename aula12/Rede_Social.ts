import { log } from "console"

var rl = require('readline-sync')

export class Post{
    usuario: string
    curtida: number
    comentario: Array<string> = []
    conteudo: string
}

export class Usuario{
    nome: string
    idade: number
    senha: number
    seguidores: Array<string> =[]
    seguindo: Array<string> = []
    bancoMensagens: Array<string> = []
    bancoPost: Array<Post> = []
    notificacao: Array<string> = []

    Mensagem(us2: Usuario): void{ //Usuários podem enviar mensagens privadas para outros usuários.
        let mensagem = rl.question('O que voce quer enviar para ',us2.nome,': ')
        let men = this.nome + `Enviou: ${mensagem}`

        us2.bancoMensagens.push(men)
    }

    getUser(): string{
        return this.nome
    }

    PublicacaoPost(): void{ //Criação de posts de texto.
        let post = rl.question('O que voce quer postar: ')
        let newPost = new Post()
        newPost.conteudo = post
        newPost.usuario = this.nome
        newPost.curtida = 0
        this.bancoPost.push(newPost)

    }

    CurtidasComentários(us2: Usuario,n: number): void{ //Usuários podem curtir e comentar em posts.
        let escolha = rl.question('Voce quer curtir ou comentar? ')
        if(escolha.toLowerCase() == 'curtir'){
            us2.bancoPost[n].curtida += 1
            us2.notificacao.push(`${this.nome} curtiu o seu post!!`)
        }else{
            let coment = rl.question('Digite seu comentario: ')
            us2.bancoPost[n].comentario.push(`\n${coment}`)
            us2.notificacao.push(`${this.nome} comentou no seu post!!`)
        }
    }

    Seguidores(us2: Usuario): void{
         let escolha = rl.question('Voce quer seguir este perfil? sim|nao ')
        if(escolha.toLowerCase() == 'sim'){
            console.log('Voce começou a seguir este perfil!!');
        
            this.seguindo.push(us2.nome)
            us2.seguidores.push(this.nome)
            us2.notificacao.push(`${this.nome} começou a seguir voce!!`)
        }
    }

    feedNoticias(): void{
        console.log(this.notificacao);
    }
}

export interface redeSocial {
    CadastroDeUsuários() //Criação de perfis com nome de usuário, senha e informações básicas.
    Seguidores() //Usuários podem seguir outros usuários.
    Notificações() //O sistema deve notificar os usuários sobre novas curtidas, comentários e mensagens.
    FeedDeNotícias() //Cada usuário tem um feed personalizado com os posts dos usuários que ele segue.
    perfil(us2: Usuario)
}

export class redeSocial implements redeSocial{
    bancoUsuario: Array<Usuario> = []
    

    CadastroDeUsuarios():void {
        let nome = rl.question("escreva o nome do seu novo usuario: ")
        let idade = rl.questionInt("digite sua idade ")
        let senha = rl.questionInt('Digite seu pin:  ')

        let newUsario = new Usuario()
        newUsario.nome = nome
        newUsario.idade = idade
        newUsario.senha = senha

        this.bancoUsuario.push(newUsario)
    }

    perfil(us2: Usuario): void{
        console.log(`
        Nome: ${us2.nome}
        Idade: ${us2.idade}
        Seguidores: ${us2.seguidores.length}
        Seguindo: ${us2.seguindo.length}`);
    }
}

