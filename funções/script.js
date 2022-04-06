// Crie uma função para verificar se um valor é Truthy
function jovem(idade){
  if (typeof idade !== "number"){
    return "Insira uma idade válida"
  } else if (idade <= 30){
    return true

  } else {
    return false
  }
}

console.log(jovem(22))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado1, lado2, lado3, lado4){
  var perimetroTotal = lado1 + lado2 + lado3 + lado4;
  return console.log(perimetroTotal)
}

perimetroQuadrado(55, 55, 55, 55)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNome(nome, sobrenome){
  var nomeCompleto = nome + sobrenome;
  return console.log(nomeCompleto)
}

meuNome("João ", "Barcellos." )

// Crie uma função que verifica se um número é par
function numeros(numero1){
  if (numero1 % 2 === 0){
    return console.log("O número é par")
  } else {
    return console.log("O número é impar")
  }
}

numeros(6)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(argumento1){
  return console.log((typeof argumento1))
}

tipoDeDado("dadad")
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('João Vitor Barcellos Egea');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
