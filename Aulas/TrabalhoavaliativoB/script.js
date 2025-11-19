//Criação da array personagens, adicionado 3 objetos contendo as propriedades solicitadas no trabalho. 
let personagens = [
{nome: "Legolas",
 classes: "Arqueiro", 
 nivel: 11, 
 hp: 100, 
 habilidades:["Atirar Flecha", "Andar nas Folhas"], 
 historicoAcoes:[],
 atacar: function atacar(){
    this.historicoAcoes.push('atacou')
    console.log("Atacou")
 },
 defender: function defender(){
    console.log("Defendeu")
 },
 habilidadeEspecial: function habilidadeEspecial(){
    console.log("Usou habilidade especial")
 }

},

{nome: "Gandalf",
 classes: "Mago",
 nivel: 20,
 hp: 100,
 habilidades:["Amizade com a Floresta", "Andar nas Folhas"], 
 historicoAcoes: [],
 atacar: function atacar(){
    this.historicoAcoes.push('atacou')
    console.log("Atacou")
 },
 defender: function defender(){
    console.log("Defendeu")
 },
 habilidadeEspecial: function habilidadeEspecial(){
    console.log("Usou habilidade especial")
}
}]

