function mostrar(id){

    const paginas =
        document.querySelectorAll(".pagina");

    paginas.forEach(pagina=>{
        pagina.classList.remove("ativa");
    });

    document
        .getElementById(id)
        .classList.add("ativa");
}