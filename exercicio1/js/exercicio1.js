let tela = document.getElementById("meu-btn")

tela.addEventListener("click", function(){

    let r = 0, g = 0, b = 0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    let botao = document.querySelector("body");

    botao.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

})

let botao_imagem = document.getElementById("btn-imagem");

botao_imagem.addEventListener("click", function(){
    let img = document.querySelector("#imagem_lobo")
    img.setAttribute('src', '../img/lobo2.jpg');

})

// img.setAttribute('src', 'outra_imagem.png');

