/*let alunaHogwarts = prompt("Qual aluna você é:")
switch(alunaHogwarts.toLowerCase()){
    case "hermione":
        console.log("Grifinória")
        break
    case "ana":
        console.log("Lufa-lufa")
        break
    case "luna":
        console.log("Corvinal")
        break
    case "narcisa":
        console.log("Sonserina")
        break
    default:
        console.log("Aluna não encontrada")    
}


//Revisando operadores lógicos
let condicao1 = false
let condicao2 = true

if(!condicao1&&condicao2){
    console.log("Executou o if do operador && AND")
}

if(condicao1||condicao2){
    console.log("Executou o if do operador || OR")
}
if(!condicao1){
    console.log("Executou o if do operador ! NOT")
}*/

//Exercício comparadores
/*let ensinoMedio = prompt("Você concluiu o ensino médio?")
let maiorIdade = Number(prompt("Qual a sua idade?"))
let cursandoFaculdade = prompt("Você está cursando outra faculdade?")// a comparação poderia ser feita ao lado do prompt

resultado1 = ensinoMedio === 'sim'
resultado2 = maiorIdade >= 18
resultado3 = cursandoFaculdade === 'sim'

if(resultado1&&resultado2&&!resultado3){
    console.log("Parabéns, você pode estudar na faculdade!")
} else
    console.log("Você não pode estudar nessa faculdade")


// Exercício de fixação
const respostadoUsuario = prompt("Digite o número que quer testar")
const numero = Number(respostadoUsuario)
if(numero % 2 === 0) {
    console.log("Passou no teste.")// Para números em que o resto da divisão é igual a 0 (número inteiro)
} else {
    console.log("Não passou no teste.")// Para números em que o resto da divisão é um número ímpar.
}


// Exercício de fixação 
let fruta = prompt("Escolha uma fruta")
let preco 
switch(fruta){
    case "Laranja":
        preco = 3.5
        break
    case "Maçã":
        preco = 2.25
        break
    case "Uva":
        preco = 0.30
        break
    case "Pêra":
        preco = 5.5
        break
    default:
        preco = 5
        break;                    
}
console.log("O preço da fruta", fruta, "é", "R$", preco)
// É para descobrir o preço das frutas
//"O preço da fruta maça é R$ 2.25"
//"O preço da fruta pera é R$ 5"

//3. Exercício mensagem secreta
const numero = Number(prompt("Digite o primeiro número:"))
if(numero>0){
    console.log("Esse número passou no teste")
let mensagem = "Essa mensagem é secreta!!"
}
console.log(mensagem)
// a. A primeira linha está pedindo para o usuário inserir um número 
// b. A mensagem será "Esse número passou no teste" e se for -10, não irá aparecer nada. 
// c. A variável mensagem irá dar erro pois foi feita dentro do escopo e não declarada antes.
//4. 
let idade = Number(prompt("Digite sua idade:"))

if(idade>=18){

console.log("Você é maior de idade e pode dirigir")
}

else 
console.log("Você é menor de idade e não pode dirigir")*/

//5.
/*let turno = prompt("Digite qual turno você estuda:")
turno = turno.toLowerCase()
let respostadoUsuario1 = 'm'
let respostadoUsuario2 = 'v'
let respostadoUsuario3 = 'n'

if(turno===respostadoUsuario1){
    console.log("Bom dia")
}
else if(turno===respostadoUsuario2){
    console.log("Boa tarde")
}
else if(turno===respostadoUsuario3){
console.log("Boa noite")

}
else 
console.log("Turno não encontrado")*/

//6.
/*let turno = prompt("Digite qual turno você estuda:")
turno = turno.toLowerCase()

let respostadoUsuario1 = 'm'
let respostadoUsuario2 = 'v'
let respostadoUsuario3 = 'n'

switch(turno){
    case "m":
    console.log("Bom dia")
        break
    case "v":
        console.log("Boa tarde")
        break
    case "n":
        console.log("Boa noite")
        break
    default:        
        console.log("Turno não encontrado")
}   */

//7. 
let generoFilme = prompt("Qual o gênero do filme?")
let precoIngresso = Number(prompt("Digite qual o preço do ingresso:"))
let generoFilme1 = 'fantasia'
let precoIngresso1 = 15


let vaiAssistir = generoFilme1&&precoIngresso1

if(vaiAssistir){
    console.log("Bom filme")
}
else 
console.log("Escolha outro filme")