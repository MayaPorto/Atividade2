
let litros =parseInt(prompt('Qual a quantidade de litros?'));
console.log(litros);
let tipoCombustivel = prompt('Escreva A para Alcool e G para gasolina').toUpperCase();
console.log(tipoCombustivel);

if (tipoCombustivel == "A" && tipoCombustivel <= 25) {
    let litrosVendidos = litros * 1.90;
    let desconto = litros - (litrosVendidos * 0.02);
   alert(`O valor a ser pago pelo cliente pelo Alcool com desconto é: R$ ${desconto}`)
} else if (tipoCombustivel == "A" && tipoCombustivel >= 25) {
    let litrosVendidos = litros * 1.90;
    let desconto = litros - (litrosVendidos * 0.04);
    alert(`O valor a ser pago pelo cliente pelo Alcool com desconto é: R$ ${desconto}`)
} else if (tipoCombustivel == "G" && tipoCombustivel <= 25) {
    let litrosVendidos = litros * 2.70;
    let desconto = litros - (litrosVendidos * 0.03);
    alert(`O valor a ser pago pelo cliente pela Gasolina com desconto é: R$ ${desconto}`)
}else {
    let litrosVendidos = litros * 2.70;
    let desconto = litros - (litrosVendidos * 0.05);
    alert(`O valor a ser pago pelo cliente pela Gasolina com desconto é: R$ ${desconto}`)