// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);


// Crie duas expressões que retornem NaN
var teste1 = 200,
    teste2 = "300e"

console.log(teste1 / teste2);
// Somar a string '200' com o número 50 e retornar 250
var numero = "200";
var numero2 = 50;
var total = +numero + numero2;
console.log(total)
// Incremente o número 5 e retorne o seu valor incrementado
var numero3 = 5
var testeNumero = ++numero3;
console.log(testeNumero)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2; // NaN (Not a Number)
console.log(pesoPorDois)