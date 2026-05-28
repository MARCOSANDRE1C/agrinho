const homem = document.querySelector(".homem");
const lixos = document.querySelectorAll(".lixo");

let posicao = 0;
let indo = true;

function limparCampo() {

  if (indo) {
    posicao += 4;
  } else {
    posicao -= 4;
  }

  homem.style.left = posicao + "px";

  // Homem limpa os lixos
  lixos.forEach((lixo) => {

    const lixoPos = lixo.offsetLeft;

    if (
      posicao > lixoPos - 40 &&
      posicao < lixoPos + 40
    ) {
      lixo.style.opacity = "0";
    }
  });

  // Quando chega no fim
  if (posicao > window.innerWidth - 120) {

    indo = false;

    // Suja novamente depois de 2 segundos
    setTimeout(() => {
      lixos.forEach((lixo) => {
        lixo.style.opacity = "1";
      });
    }, 2000);
  }

  // Volta pro começo
  if (posicao <= 0) {
    indo = true;
  }

  requestAnimationFrame(limparCampo);
}

limparCampo();