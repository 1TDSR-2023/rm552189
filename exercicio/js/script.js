// var nome1 = "Petroni";
// // let nome2 = "Derick"; //let respeita o escopo
// // const nome3 = "Ruan"; //Constante (imutavel)

// // const PI = 3.14;

// if(nome1 != ""){
//     let nome1 = "Geovana";
// }

let botao = document.getElementById("meu-btn"); //captura o botão
// console.log(botao.textContent);

botao.addEventListener("click", function(){
    // console.log(this.textContent);
    //Função matemática Math
    //random = retorna número aleatório entre 0 e 1 ex: 0.2412425;
    //floor = arredonda um número para baixo.
    //ceil = arredonda um número para cima.
    //round = arredonda um número aleatoriamente.

    let r=0, g=0, b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

});

//ESTUDAR
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição

//Declarar uma Array

// let frutas = ["banana", "maçã", "pêssego", "laranja", "limão", "melancia", "kiwi"]

//Imprimindo o array

// console.log(frutas);
// console.table(frutas[0]);

// //Inserir um item ao final do array com método push(nomeDoItem);

// frutas.push("Manga");
// console.log(frutas)

// //Inserir item no início do array com método unshift(nomeDoItem);

// frutas.unshift("pitaya");
// console.log(frutas);

// //remover item no final do array com método pop();

// frutas.pop();
// console.log(frutas);

// //remover item no início do array com método pop();

// frutas.shift();
// console.log(frutas);

// //Localizar um item no array utilizando o método indexOf(nomeDoItem);
// //Retorna o indíce do objeto

// let indice = frutas.indexOf("laranja");
// console.log(`o índice encontrado foi : ${indice}`);
// console.log(`o item buscado foi : ${frutas[indice]}`);

//Realizando uma remoção de item utilizando o método splice().
//o método splacei() recebe dois parâmetros, indíce do item que será removido e a quantidade de vezes que este mesmo índice será removido. Ex:splice(indice, 1);
//Dica: utilize o método indexOf() para buscar o índice do item no array.

// let indice = frutas.indexOf("melancia");
// console.log(`O item encontrado no índice antes da remoção foi: ${frutas[indice]}`);
// frutas.splice(indice, 1);
// console.log(frutas);
// console.log(`O item encontrado no índice depois da remoção foi ${frutas[indice]}`);

//Concatenação de arrays

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

console.log("Array 1 : " + nr1);
console.log("Array 2 : " + nr2);

//Concatenando os dois Arrays em um novo array com o operador SRPREAD( ... )
let nr3 = [...nr1, ...nr2];
console.log("Array 3 : " + nr3);

nr3.forEach( (nr)=>{
    console.log("Itens do Array 3 : " + nr);
} );