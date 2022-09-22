
const litro = parseFloat(prompt('QUANTOS LITROS DESEJA?'))


const mensagem = `
Escolha a opção desejada:
Digite 1 para Álcool
Digite 2 para Gasolina
`
const combustivel = prompt(mensagem)

console.log(litro)
console.log(combustivel)

const A = 1.90
const G = 2.70

if (combustivel == 1 && litro <= 25) {
 const precoFinal = (A * litro) - 0.2
 alert(`O valor que pagará pelo álcool é ${precoFinal} reais` )
} else if (combustivel == 1 && litro > 25) {
const precoFinal = (A * litro) - 0.4
alert(`O valor que pagará pelo álcool é ${precoFinal} reais` )
} else if (combustivel == 2 && litro <= 25) {
    const precoFinal = (G * litro) - 0.3
    alert(`O valor que pagará pela gasolina é ${precoFinal} reais` )
} else {
    const precoFinal = (G * litro) - 0.3
    alert(`O valor que pagará pela gasolina é ${precoFinal} reais`)
}