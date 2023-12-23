const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {

    for (let i = 0; i < barbearia.cortes.length; i++) {
        if (id === barbearia.cortes[i].id) {
            return barbearia.cortes[i];
        }
    }
    return 'Corte não encontrado';
}
let resultadoCorte = buscaCortePorId(8);
console.log(resultadoCorte);



function buscaBarbaPorId(id) {

    for (let i = 0; i < barbearia.barbas.length; i++) {
        if (id === barbearia.barbas[i].id) {
            return barbearia.barbas[i];
        }
    }
    return 'Barba não encontrada';
}
let resultadoBarba = buscaBarbaPorId(3);
console.log(resultadoBarba);


function verificaStatusBarbearia() {

    if (barbearia.estaAberto === true) {
        return 'Estamos abertos';
    } else {
        return 'Estamos fechados'
    }
}
verificaStatusBarbearia();
console.log(verificaStatusBarbearia());


function retornaTodosCortes() {
    return barbearia.cortes;
}
let corteOferecido = retornaTodosCortes();
console.log(corteOferecido);

function retornaTodasBarbas() {
    return barbearia.barbas;
}
let barbaOferecida = retornaTodasBarbas();
console.log(barbaOferecida);

function criaPedido(nomeCliente, corteId, barbaId) {

    let pedido = {
        nome: nomeCliente,
        pedidoCorte: null,
        pedidoCortePreco: 0,
        pedidoBarba: null,
        pedidoBarbaPreco: 0,
    }

    let corteSelecionado = buscaCortePorId(corteId);
    if (corteSelecionado) {
        pedido.pedidoCorte = corteSelecionado.tipo;
        pedido.pedidoCortePreco = corteSelecionado.valor
    };

    let barbaSelecionada = buscaBarbaPorId(barbaId);
    if (barbaSelecionada) {
        pedido.pedidoBarba = barbaSelecionada.tipo;
        pedido.pedidoBarbaPreco = barbaSelecionada.valor
    };
    return pedido;
}
let pedido = criaPedido();
console.log(pedido)




function atualizarServico(lista, id, valor, tipo) {

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            break;
        }
    }
    console.log(lista);
    return lista;
}

function calculaTotal(pedido) {

    let valorTotal = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
    console.log(valorTotal);
    return valorTotal;

}
calculaTotal(pedido);




  
  
