alert('Tente adivinhar o número de 1 a 10 que estou pensando.');
//const numeroX = 7;
let numeroX = Math.floor(Math.random() * (10 - 1 + 1) + 1)
let tentativasMax = 3;
let resposta = "";
let acertou = false;
//console.log(numeroX);
/////////////////////////////////////////////////////////////////
for (let index = 0; index < tentativasMax; index++) {

	resposta = prompt('Escolha um número:');

	if (resposta == numeroX) {
		alert(`Parabéns você acertou, o número era ${numeroX}.`);
		acertou = true;
		break;
	}

	alert('Errado!');
}

if (!acertou) {
	alert(`Você não conseguiu acertar, o número era: ${numeroX}.`);
}