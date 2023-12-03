let vitorias = 0
let derrotas = 0

for (let i = 0; i < 20; i++)
{
    vitorias += 1
}

for (let i = 0; i < 30; i++)
{
    derrotas += 1
}

let partidasParaCalcular = calcularSaldoRank(vitorias, derrotas)
console.log(partidasParaCalcular)

function calcularSaldoRank (nVitoria, nDerrota)
{
    let saldoRank = vitorias - derrotas
    return saldoRank
}