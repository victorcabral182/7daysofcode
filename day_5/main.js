//ARRAYS
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let simOuNao = "";

//CÓDIGO

for (let i = 0; i < 99; i++) {

    simOuNao = prompt('Você deseja adicionar uma comida na sua lista de compras? sim ou não?');

    if(simOuNao == 'sim'){
        let nomeComida = prompt('Qual alimento você deseja inserir?');

        let categoria = prompt('Em qual categoria este alimento se encaixa? (frutas, laticinios, congelados ou doces)');

        if(categoria == 'frutas'){
            let adcFruta = frutas.push(nomeComida);
        }
        if(categoria == 'laticinios'){
            let adcLeite = laticinios.push(nomeComida);
        }
        if(categoria == 'congelados'){
            let adcGelo = congelados.push(nomeComida);
        }
        if(categoria == 'doces'){
            let adcDoce = doces.push(nomeComida);
        }
    }

    //Verificar adição de elementos no console:
    //console.log(frutas, laticinios, congelados, doces);

    if(simOuNao == 'não'){
        break;
    }
}

alert(`Lista de compras: \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados}\nDoces: ${doces}`);