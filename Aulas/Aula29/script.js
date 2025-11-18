// Exemplo Matriz
let jogoDaVelha = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
jogoDaVelha[1][2] = 1
console.log(jogoDaVelha)


// Exemplo matriz com loop
let matriz = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];

let soma = 0

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
      soma += matriz[i][j] 
    }
}
console.log("A soma dos valores da matriz é:", soma)

// Exercício matriz 4x4
let matriz2 = [
    [1, 2, 3, 4],
    [4, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let soma1 = 0

for(let i = 0; i < matriz2.length; i++){
    for(let j = 0; j < matriz2[i].length; j++){

        soma1 += matriz[i][j]
    }
}
console.log("A soma dos números é:", soma1)