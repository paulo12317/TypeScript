import { Voo } from "./Voos";

var rl = require('readline-sync')

let vooNovo= new Voo(0,'')
let menu: boolean = true


while(menu){
    console.log(
        `
         1: Cadastrar passageiro;
         2: Verificar próxima cadeira livre;
         3: Verificar cadeira;
         4: Ocupar cadeira;
         5: Verificar Vagas;
         6: Verificar Vôo;
         7: Verificar data de Vôo;
         8: Clonar Vôo;
         9: Sair.
              `
    );
    
}
let option = rl.questionInt('Escolha:')

switch(option){
    case 1: 
    vooNovo.cadastrarPassageiro()
        break
    case 2:
        vooNovo.proximoLivre()
        break
    case 3:
        let cadeira = rl.questionInt('Qual a cadeira que quer verificar? ')
       vooNovo.verifica(cadeira)
        break
    case 4: 
    let cadeiraOcupa = rl.questionInt('Qual a cadeira voce quer ocupar? ')
        vooNovo.ocupa(cadeiraOcupa)
        break
        case 5:
            vooNovo.vaga()
            break
        case 6:
            vooNovo.getVoo()
            break
        case 7:
            vooNovo.getData()
            break
        case 8:
            vooNovo.clone()
            break
        case 9:
        process.exit(0)
    default:
        console.log('Opcao invalida');
        break
}