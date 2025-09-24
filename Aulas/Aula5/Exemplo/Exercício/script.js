const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual sua idade")

console.log(nome)
console.log(idade)
console.log(typeof(nome))
console.log(typeof(idade))


const idadeNumber = Number(idade)
console.log(typeof(idadeNumber))

const idadeTexto = idadeNumber.toString()
console.log(typeof(idadeTexto))
