//Desafio 1
//Utilizando uma função com passagem de parâmetros, insira os números e operadores matemáticos no visor.
//Você pode se utilizar de envetos inline no html.
//Boa sorte, você tem 5 minutos.

function insereNumeroNoVisor(botao, visor) {
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/") {
        
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length-1)
        }
        else {
            visor.value += botao.value
        }

    }
    visor.value += botao.value
}

//Desafio 2
// Utilizando a função eval(expressão) calcule o resultado do visor.
//Atrele o evento ao botão de IGUAL
//Crie uma função para executar esse procedimento.
//A função deve ser do tipo Arrow e deve receber um parametro!

//O FORMATO DA FUNÇÃO ARROW 
// declarador identificador = ()>={ }

const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}

//DESAFIO 3
//FAZER COM QUE O OPERADOR NÃO DEIXE EFETUAR DUPLICAÇÃO POR EX 1++
//Impeça a entrada de mais de uma vez do operador matemático.
//Colocar no insere número no visor.


