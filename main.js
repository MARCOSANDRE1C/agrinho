const botao = document.getElementById("acaoBtn");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent =
        "✅ Obrigado por participar! Cada ação ajuda a manter o campo limpo.";
});