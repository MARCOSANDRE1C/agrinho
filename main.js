const homem = document.querySelector(".homem");
const lixos = document.querySelectorAll(".lixo");

let posicao = 0;      // posição horizontal do homem
let indo = true;       // se o homem está indo para frente
const velocidade = 4;  // pixels por frame

function animar() {
  
  // Movimento
  if (indo) {
    posicao += velocidade;
  } else {
    posicao -= velocidade;
  }

  homem.style.left = posicao + "px";

  // Checar colisão com lixo
  lixos.forEach(lixo => {
    const lixoEsq = lixo.offsetLeft;
    const lixoDir = lixo.offsetLeft + lixo.offsetWidth;

    if (posicao + homem.offsetWidth > lixoEsq &&
        posicao < lixoDir &&
        lixo.style.opacity !== "0") {
      lixo.style.opacity = "0"; // Limpa o lixo
    }
  });

  // Verifica fim de tela
  if (posicao >= window.innerWidth - homem.offsetWidth) {
    indo = false;
    // Aparece lixo novamente depois de 2 segundos
    setTimeout(() => {
      lixos.forEach(lixo => lixo.style.opacity = "1");
    }, 2000);
  }

  if (posicao <= 0) {
    indo = true;
  }

  requestAnimationFrame(animar);
}

// Começa animação
animar();