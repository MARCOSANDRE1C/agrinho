const homem = document.querySelector(".homem");
const lixos = document.querySelectorAll(".lixo");

let posicao = 0;
let velocidade = 3;
let voltando = false;

function animar() {

  // Movimento
  if (!voltando) {
    posicao += velocidade;
  } else {
    posicao -= velocidade;
  }

  homem.style.left = posicao + "px";

  // Limpa os lixos
  lixos.forEach((lixo) => {

    const lixoPos = lixo.offsetLeft;

    if (
      posicao + 60 > lixoPos &&
      posicao < lixoPos + 50
    ) {
      lixo.style.opacity = "0";
    }
  });

  // Chegou no fim
  if (posicao >= window.innerWidth - 120) {

    voltando = true;

    // Faz os lixos aparecerem novamente
    setTimeout(() => {
      lixos.forEach((lixo) => {
        lixo.style.opacity = "1";
      });
    }, 1000);
  }

  // Voltou ao começo
  if (posicao <= 0) {
    voltando = false;
  }

  requestAnimationFrame(animar);
}

animar();