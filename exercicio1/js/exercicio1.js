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
//Questão 2
let botao_formulario = document.getElementById("ReceberInfo");

botao_formulario.addEventListener("click", function(){
   let email =  document.querySelector("#IdEmail");
   let lista =  document.querySelector("#Lista");
   let texto = email.value;
   let newItem = document.createElement('li');
   newItem.innerText = texto;

   lista.appendChild(newItem);

});


//Questão 3
let botao_imagem = document.getElementById("btn-imagem");

botao_imagem.addEventListener("click", function(){
    let img = document.querySelector("#imagem_lobo")
    img.setAttribute('src', '../exercicio/img/lobo2.jpg');

})

//Questão 4
let botao_html = document.getElementById("btn-mudar-html");

botao_html.addEventListener("click", function(){
    let mudar = document.querySelector("#variavel_p");
    mudar.textContent = "Novo texto!";
})

//Questão 5
let botao_ocultar = document.getElementById("btn-ocultar");

botao_ocultar.addEventListener("click", function(){
    let ocultar = document.querySelector("#variavel_p");
    ocultar.style.display = 'none';
    
});
