const prompt = require('prompt-sync')()
let option = 1

do{
    console.log()
    console.log('####  MENU ####')
    console.log('1 - Comprimentar')
    console.log('2 - Mostar a data atual')
    console.log('0 - Sair')
    console.log()
    option = Number(prompt('Informe a opção desejada: '))

    // irá acessar um case de acordo com a opção informada
    switch(option){
        case 1:
            console.log('Olá!')
            break;
        case 2:
             let today = new Date();
            console.log(`Data atual: ${today.toLocaleDateString()}`);
            break;
        case 0:
            console.log('Saindo... Até mais!')
            break;
        default:
            console.log('Opção inválida')

    }

}while(option != 0)