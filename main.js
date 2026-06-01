function mostrar(id){

    document.querySelectorAll(".pagina")
        .forEach(p => p.classList.remove("ativa"));

    document.getElementById(id)
        .classList.add("ativa");
}

/* FAQ abrir e fechar */
document.addEventListener("click", (e) => {

    if(e.target.classList.contains("faq-btn")){

        const resposta = e.target.nextElementSibling;

        if(resposta.style.display === "block"){
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    }

});