let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert('Olá ' + nome + ', você tem ' + idade + ' e já está aprendendo ' + linguagem + '!');

let pergunta = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO' )

if (pergunta == 1){
	alert('1 > Muito bom! Continue estudando e você terá muito sucesso.');
}
if (pergunta == 2){
	alert('2 > Ahh que pena... Já tentou aprender outras linguagens?');
}