// Exemplo objetos 
const professor = {
    nome : "Lucas",
    idade : 33,
    email : "lucas.g.f.alves@gmail.com"
}
console.log(professor.nome)
console.log(professor["idade"])
console.log(professor.email)

// Exemplo 2
const laptop = {
    tela : 15,
    prcessador: "Ryzen", 
    marca: "Lenovo",
    modelo: "K14"
}
console.log("A marca do laptop é:", laptop.marca, "e o modelo é:", laptop.modelo)

// Exercício objetos
const filme = {
    direcao: "Tim Burton",
    nome: "A noiva cadáver",
    lançamento: 2005,
    elenco: ["Jhonny Depp", "Helena Bonhan", "Emily Watson"],
    assistiu: "Assisti"
}
console.log(filme.direcao, filme.nome, filme.lançamento, filme["elenco"], filme["assistiu"])

// Exercício 2
const colega = {
    nome: "Liege",
    idade: 17,
    música: "Piseiro"
}
console.log("O nome da minha colega é", colega.nome,",", "ela tem", colega.idade,"anos", "e gosta muito de", colega.música)

// Exemplo de objetos dentros de arrays 
const professores = [
{nome : "Lucas", modulo: 2}, 
{nome : "Dal", modulo: 1},
{nome : "Valter", modulo: 1}
]
console.log("O professor:", professores[1].nome, "deu o módulo:", professores[1].modulo) // Importante lembrar que o índice sempre começa em 0 nas arrays, então ao colocar índice 1, sera a "Dal", que está na segunda posição. 

// Exercício objetos 
const filme2 = [
 {personagem1 : "Victor Van Dort", elenco: "Jhonny Depp"},
 {personagem2 : "Corpse Bride", elenco: "Helena Bonhan"},
 {personagem3 : "Victória Everglot", elenco: "Emily Watson"}
]
console.log("O personagem é:", filme2[0].personagem1, "e o ator é:", filme2[0].elenco)
console.log("O personagem é:", filme2[1].personagem1, "e a atriz é:", filme2[1].elenco)
console.log("O personagem é:", filme2[2].personagem3, "e a atriz é:", filme2[2].elenco)


