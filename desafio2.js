let vitorias = 0
let derrotas = 0
let opcaoClassicacao = 0
let classificaoHeroi = ""

for (let i = 0; i < 20; i++)
{
    vitorias += 1
}

for (let i = 0; i < 30; i++)
{
    derrotas += 1
}

let partidasParaCalcular = calcularSaldoRank(vitorias, derrotas)

function calcularSaldoRank (nVitoria, nDerrota)
{
    let saldoRank = vitorias - derrotas
    return saldoRank
}

if (partidasParaCalcular < 10)
{
    opcaoClassicacao = 1
}

else if (partidasParaCalcular >= 11 && partidasParaCalcular <= 20)
{
    opcaoClassicacao = 2
}

else if (partidasParaCalcular >= 21 && partidasParaCalcular <= 50)
{
    opcaoClassicacao = 3
}

else if (partidasParaCalcular >= 51 && partidasParaCalcular <= 80)
{
    opcaoClassicacao = 4
}

else if (partidasParaCalcular >= 81 && partidasParaCalcular <= 90)
{
    opcaoClassicacao = 5
}

else if (partidasParaCalcular >= 91 && partidasParaCalcular <= 100)
{
    opcaoClassicacao = 6
}

else if (partidasParaCalcular >= 101)
{
    opcaoClassicacao = 7
}

switch(opcaoClassicacao)
{
    case 1:
        classificaoHeroi = "Ferro"
        break

    case 2:
        classificaoHeroi = "Bronze"
        break

    case 3:
        classificaoHeroi = "Prata"
        break

    case 4:
        classificaoHeroi = "Ouro"
        break

    case 5:
        classificaoHeroi = "Diamante"
        break

    case 6:
        classificaoHeroi = "Lendário"
        break

    case 7:
        classificaoHeroi = "Imortal"
        break
}