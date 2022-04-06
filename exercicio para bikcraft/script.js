//1 - Crie um botão com nome de Adicionar. x
//2 - Adicione uma função (somar) ao clique desse botão
//3 - Só adicione a função se o botão existir na tela.
//4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
//5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
//6 - Mude o valor da div para o novo total.
//7 - Mude o valor apenas se o total for menor que 10.
//8 - Quando não for mais possível adicionar, mostre uma mensagem no console.
const botao = document.querySelector("button");

function somar(){
const num = document.querySelector("div")
const total = +num.innerText + 1;
if(total <= 10){
num.innerText = total;
} else {
  console.log("Não dá pra adicionar mais")
}
}

if(botao){
botao.addEventListener("click", somar);
}
