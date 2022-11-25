let areaDev = prompt('Você quer aprender [Front-end] ou [Back-end]? (digite 1 ou 2)');
while(areaDev < 1 || areaDev > 2){
	alert('Digite 1 ou 2 para prosseguir.')
	areaDev = prompt('Você quer aprender [Front-end] ou [Back-end]? (digite 1 ou 2)');
}
let ling = "";
let fullstack = "";
if(areaDev == 1){
	ling = prompt('Quer aprender [React] ou [Vue]? (digite 1 ou 2)');
	if(ling == 1){
		fullstack = prompt('Quer se especializar em [React] ou se tornar [FullStack]? (digite 1 ou 2)');
	} else if(ling == 2){
		fullstack = prompt('Quer se especializar em [Vue] ou se tornar [FullStack]? (digite 1 ou 2)');
	}
} else if(areaDev == 2){
	ling = prompt('Quer aprender [C#] ou [Java]? (digite 1 ou 2');
	if(ling == 1){
		fullstack = prompt('Quer se especializar em [C#] ou se tornar [FullStack]? (digite 1 ou 2)');
	} else if(ling = 2){
		fullstack = prompt('Quer se especializar em [Java] ou se tornar [FullStack]? (digite 1 ou 2)');
	}
}

alert('Parabéns, continue seu aprendizado!');

let novaTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (digite sim ou não)');
while(novaTech == 'sim'){
	let outraLing = prompt('Digite o nome da linguagem?');
	alert('Está é uma excelente linguagem!');
	novaTech = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (digite sim ou não)');
}
if(novaTech == 'não'){
	alert('Obrigado por jogar comigo.');
}


/*
if (novaTech == 'sim') {
	let outraLing = prompt('Digite o nome da linguagem?');

}
*/





