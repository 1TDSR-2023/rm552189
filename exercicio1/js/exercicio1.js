//Questão 1
let tela = document.getElementById("meu-btn")

tela.addEventListener("click", function(){

    let r = 0, g = 0, b = 0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    let botao = document.querySelector("body");

    botao.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

})
//Questão 3
let botao_imagem = document.getElementById("btn-imagem");

botao_imagem.addEventListener("click", function(){
    let img = document.querySelector("#imagem_lobo")
    img.setAttribute('src', '../img/lobo2.jpg');

})

//Questão 4
let botao_html = document.getElementById("btn-mudar-html");

botao_html.addEventListener("click", function(){
    let mudar = document.querySelector("#variavel_p");
    mudar.textContent = "Novo texto!";
})
