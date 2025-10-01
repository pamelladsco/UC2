

let ouroTotal = 75000
let membrosTripulao = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

let ouroPorMembro = ouroTotal / membrosTripulao
console.log("O valor do ouro por membro é:", ouroPorMembro)

let restoOuro = ouroTotal % membrosTripulao
console.log("O resto do ouro para cada membro é:", restoOuro)

let novaRecompensaLuffy = recompensaBaseLuffy+aumentoRecompensa
console.log("A nova recompensa de Luffy é:", novaRecompensaLuffy)

let poderLuffy = recompensaBaseLuffy*bonusExperiencia
console.log("O poder do luffy é:", poderLuffy)

let reducaoAumento = aumentoRecompensa-50000000
console.log("A redução do aumento recompensa é:", reducaoAumento)

let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNomi = true
let inimigoTemHaki = true
let combateJusto = 'sim'
let combateRapido = 'sim'

let podeVencer = (forcaTripulacao>=forcaInimigo)
let riscoAlto = (chanceVitoria<limiteSeguranca)
let batalhaFacil = (combateJusto==combateRapido)

console.log("A força tripulação é maior ou igual a força inimigo?", podeVencer)
console.log("A chance Vitória é menor que o limite segurança?", riscoAlto)
console.log("O combate justo é igual ao combaterápido?", batalhaFacil)