const Redux = require('redux')

// função criadora de ação
const criaContrato = (nome, taxa) => {
    return {
        type: 'CRIA_CONTRADO',
        payload: {
            nome, taxa
        }
    }
}

// escrever a função criadora de ação que cancela um contrado
const cancelarContrato = (nome) => {
    return {
        type: 'CANCELAR_CONTRATO',
        payload: {
            nome
        }
    }
}

// criadora de ação que solicita cashback
const solicitarCashback = (nome, valor) => {
    //esse JSON que ela devolve é uma ação
    return {
        type: 'CASHBACK',
        dados: {
            nome, valor
        }
    }
}

//esta função é um reducer
//quando chamada pela primeira vez, seu primeiro parâmetro será undefined
//já que não existirá histórico algum
//por isso, configuramos uma lista vazia como seu valor padrão
const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
    //se a ação for CASHBACK, adicionamos o novo pedido à coleção existente
    if (acao.type === 'CASHBACK') {
        //uma cópia. Contém todos os existentes + o novo
        //não faça push
        return [
            ...historicoDePedidosDeCashbackAtual,
            acao.dados
        ]
    }
    //caso contrário, apenas ignoramos e devolvemos a coleção inalterada
    return historicoDePedidosDeCashbackAtual
}

//caixa começa zerado
const caixa = (dinheiroEmCaixa = 0, acao) => {
    if (acao.type === "CASHBACK") {
        caixaAtual -= acao.dados.valor
    }
    else if (acao.type === "CRIAR_CONTRATO") {
        caixaAtual += acao.dados.taxa
    }
    return caixaAtual
}

const contratos = (listaDeContratosAtual = [], acao) => {
    if (acao.type === "CRIAR_CONTRATO")
        return [...listaDeContratosAtual, acao.dados]
    if (acao.type === "CANCELAR_CONTRATO")
        return listaDeContratosAtual.filter(c => c.nome !== acao.dados.nome)
    return listaDeContratosAtual
}

const { combineReducers, createStore } = Redux

const todosOsreducers = combineReducers({
    historicoDePedidosDeCashback,
    contratos,
    caixa
})

const store = createStore(todosOsreducers)


const trasacao = (store) =>{
    const nomes =['Ana', 'Maria', 'Pedro', 'João']
    const funcoes = {
        0: (nome) => {
            const acao = criaContrato(nome, 50)
            store.dispatch(acao)
        },
        1: (nome) => {
            const acao = cancelarContrato(nome)
            store.dispatch(acao)
        },
        2: (nome) => {
            const valorCashBack = 10 + Math.random()*20
            const acao = solicitarCashback(nome, valor)
            store.dispatch(acao)
        }
    }
    const nome = nomes[Math.round(Math.random()*4)]
    const operacao = Math.round(Math.random*3)
    funcoes[operacao](nome)
}

setInterval(() => {
    trasacao(store)

}
, 200)