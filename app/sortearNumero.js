const menorValor = 0
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
const menorValorElemento = document.getElementById('menor-valor')
menorValorElemento.innerHTML = menorValor

const maiorValorElemento = document.getElementById('maior-valor')
maiorValorElemento.innerHTML = maiorValor

console.log(numeroSecreto)