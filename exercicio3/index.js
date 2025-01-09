/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const { readFileSync } = require('fs');

// pedi para o chatGPT gerar o JSON com os dados.
const faturamentoMensal = JSON.parse(readFileSync('dados.json'));
let menorValor = faturamentoMensal.faturamento_diario[0].valor;
let maiorValor = 0;
let media = 0;
let diasComValorSuperiorMedia = [];

faturamentoMensal.faturamento_diario.forEach((element) => {
	if (element.valor > maiorValor) maiorValor = element.valor;

	// o execicio cita que deve se ignorar os dias sem faturamento no CALCULO DA MÉDIA,
	// mas decidi ignorar também ao obter o menor faturamento, para isso usei element.valor que, se valorado em 0,
	// será falsy https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy
	if (element.valor && element.valor < menorValor) menorValor = element.valor;
});

media = faturamentoMensal.faturamento_diario
	.map((element) => element.valor)
	.reduce((acumulador, valor) => acumulador + valor);

// apliquei um filter para desconsiderar os dias sem faturamento
media /= faturamentoMensal.faturamento_diario.filter(
	(element) => !!element.valor
).length;

diasComValorSuperiorMedia = faturamentoMensal.faturamento_diario
	.filter((element) => element.valor > media)
	.map((element) => element.dia);

console.log({
	'Menor valor': menorValor,
	'Maior valor': maiorValor,
	Média: media,
	'Dias com valor superior à média': diasComValorSuperiorMedia.join(', '),
	'Total de dias com valor superior à média':
		diasComValorSuperiorMedia.length,
});
