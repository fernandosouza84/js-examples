
var list = [
    {"desc":"rice","amount":"1","value":"5.40"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"meat","amount":"1","value":"15.00"}
];

function getTotal(list){
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead>'+
    '<tr>'+
      '<th scope="col">#</th>'+
      '<th scope="col">Descrição</th>'+
      '<th scope="col">Quantidade</th>'+
      '<th scope="col">Valor</th>'+
      '<th scope="col">Ação</th>'+
    '</tr>'+
  '</thead>'+
  '<tbody>';

  for(var key in list){
      table += '<tr><th scope="row">'+key+'</th><td>'+
      list[key].desc+'</td><td>'+
      list[key].amount+'</td><td>'+
      list[key].value+'</td><td>Edit | Delete</td></tr>';
  }

  table +='</tbody>';
  document.getElementById("listTable").innerHTML = table;
}

setList(list);
console.log(getTotal(list));