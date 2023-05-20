
if(localStorage.getItem("user-token")) {
    const elementoBemVindo = document.querySelector("#welcome");
    //RECUPERANDO O OBJETO DO LOCAL-STORAGE

    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));
    console.log(usuarioValidado);

    elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

    const botaoSair = document.querySelector("#btnSair");

    botaoSair.addEventListener("click", ()=> {
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-validado");
        window.location.href = "../exercicio/login.html"
    });

} else{
    alert("Você só pode acessar se tiver logado.")
    window.location.href = "../exercicio/login.html"
}



