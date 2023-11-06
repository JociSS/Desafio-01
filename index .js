const prompt = require('prompt-sync')();

while (true) {
    const nomeDoHeroi = prompt('Qual é o nome do herói? ');
    console.log(`Você digitou: ${nomeDoHeroi}`);

    // Solicitar a experiência do herói
    const xpDoHeroi =  Number.parseInt(prompt('Qual é a experiência do herói? '));
   

    let nivelDoHeroi = " ";

    // Estrutura de decisão para determinar o nível
    if (xpDoHeroi < 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }

    // Mensagem final com o nome e o nível do herói
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

    const resposta = prompt('Deseja continuar? [S/N] ');
    if (resposta.toLowerCase() === 'n') {
        console.log('Terminou');
        break; // Encerra o loop
    }
}
