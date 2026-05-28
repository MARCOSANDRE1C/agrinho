const homem = document.querySelector(".homem");
const lixos = document.querySelectorAll(".lixo");

let posicao = 0;       // posição horizontal do homem
const velocidade = 8;  // pixels por frame

let teclas = {
  esquerda: false,
  direita: false
};

// Detecta teclas pressionadas
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") teclas.direita = true;
  if (e.key === "ArrowLeft") teclas.esquerda = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") teclas.direita = false;
  if (e.key === "ArrowLeft") teclas.esquerda = false;
});

function animar() {
  
  // Movimento do personagem
  if (teclas.direita && posicao < window.innerWidth - homem.offsetWidth) {
    posicao += velocidade;
  }
  if (teclas.esquerda && posicao > 0) {
    posicao -= velocidade;
  }

  homem.style.left = posicao + "px";

  // Limpar lixo
  lixos.forEach(lixo => {
    const lixoEsq = lixo.offsetLeft;
    const lixoDir = lixo.offsetLeft + lixo.offsetWidth;

    if (
      posicao + homem.offsetWidth > lixoEsq &&
      posicao < lixoDir &&
      lixo.style.opacity !== "0"
    ) {
      lixo.style.opacity = "0";
    }
  });

  requestAnimationFrame(animar);
}

// Reinicia o lixo a cada 5 segundos
setInterval(() => {
  lixos.forEach(lixo => lixo.style.opacity = "1");
}, 5000);

animar();