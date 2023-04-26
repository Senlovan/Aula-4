// + adição
// - subtração
// * multiplicação
// / divisão 
// % resto divisão

/*const valor1 = 3
const valor2 = 4
const resultado = valor1 + valor2
console.log (resultado)

const valor3 = 3
const valor4 = 5
const resultado1 = (valor3 * valor4) / 2
console.log (resultado1)

const valor5 = 4
const valor6 = 5
const resultado2 = (valor5 - valor6) * -1
console.log (resultado2)

const restoDaDivisão = 234 % 5
console.log(restoDaDivisão);*/

/*const primeiroNumero = 10
const segundoNumero = 20
console.log(primeiroNumero === segundoNumero)
console.log(primeiroNumero !== segundoNumero);
console.log(primeiroNumero > segundoNumero);
console.log(primeiroNumero >= segundoNumero);
console.log(primeiroNumero < segundoNumero);
console.log(primeiroNumero <= segundoNumero)*/

let nome = prompt('Qal seu Nome?')
let idade = Number (prompt('Qual sua Idade'))
let idade2050 = 2050 - new Date().getFullYear() + idade
console.log('Nome:',nome);
console.log('Idade:',idade);
console.log('Ela é Maior de idade?', idade > 18);
console.log('Idade em 2050',idade2050 );
