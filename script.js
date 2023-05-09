let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};




const addButton = document.getElementById('btn-adicionar-produto-01');
const input = document.getElementById( 'quantidade-produto-01');
const subButton = document.getElementById('btn-subtrair-produto-01')


function updateSubtotal(quantidadedeItens){
  quantidadeSubtotal.innerText = `${quantidadedeItens} itens`;
  valorSubtotal.innerText = (subtotalInfo.valor * quantidadedeItens).toFixed(2);
}
function itensAdd() {
  input.value = Number(input.value ) + 1;
  updateSubtotal (input.value)

//outra forma usada:
   //quantidadeSubtotal.innerText = `${input.value} itens`;
   // valorSubtotal.innerText = subtotalInfo.valor * input.value;
   //console.log(typeof input.value)
};

function itensRemove() {
  if (input.value > 0){
  input.value = Number(input.value ) - 1;
  updateSubtotal (input.value)
}

//outra forma usada:
  //quantidadeSubtotal.innerText = `${input.value} itens`;
 // valorSubtotal.innerText = subtotalInfo.valor * input.value;
  // console.log(typeof input.value)
};
addButton.addEventListener('click', () => itensAdd())
subButton.addEventListener('click', () => itensRemove())
