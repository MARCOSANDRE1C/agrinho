const botoes = document.querySelectorAll(".faq-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const resposta = botao.nextElementSibling;

        if(resposta.style.display === "block"){
            resposta.style.display = "none";
        }else{
            resposta.style.display = "block";
        }

    });
});