// conexão com elementos HTML
//emcapsulando os elementos em uma variável

//filtro de pesquisa
const filter = document.getElementById('filter'); 

//formulario para add item
const form = document.getElementById('addForm'); 

//Lista para receber novos irtens adicionais
const list = document.getElementById('items');

filter.addEventListener('keyup',filtrarItem);

form.addEventListener('submit',addItem);

list.addEventListener('click',removeItem);

function filtrarItem(evento){
    //recebendo valores digitados
    let txt = evento.target.value.toLowerCase(); //convete para minusculo
    // Busca todos os itens(li)
    let itens = document.getElementsByTagName('li');

    //converter para um Array o objeto itens
    Array.from(itens).forEach( function (item){
        let itemname = item.firstChild.textContent;
        if (itemname.toLowerCase().indexOf(txt) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

//função para adicionar novo item
function addItem(evento){
    evento.preventDefault();
   /* passo a passo
   1 - criar li
   2 - atribuir classes
   3 - colocar valor
   4 - criar btn colocar classe
   5 - insirir texto (x)
   */

  //Receber o valor do campo input
  const textoItem = document.getElementById('item').value;
  
  if (textoItem != '') {

    const li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(textoItem));

    //criar elemento button
    const btn = document.createElement('button');

    //Atribuir classe
    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('x'));

    //Unindo botão ao li
    li.appendChild(btn);

    //Adicionar o li a lísta
    list.appendChild(li);

    //resetar o formulario
    form.reset();
} else {
    alert('Digite algo')
}
};
function removeItem(evento){
    //alert('VOCÊ tocou em fora do botão')
    if(evento.target.classList.contains('delete')){
        //Selecionando o pai do elementos clicado
        let li = evento.target.parentElement;
        list.removeChild(li);
        //Remove o elemento da lista
    }
};