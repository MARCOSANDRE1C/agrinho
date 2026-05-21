const homem = document.getElementById("homem");
const lixos = document.querySelectorAll(".lixo");

function limparCampo() {

  const posicaoHomem = homem.getBoundingClientRect();

  lixos.forEach((lixo) => {

    const posicaoLixo = lixo.getBoundingClientRect();

    const distancia = Math.abs(
      posicaoHomem.left - posicaoLixo.left
    );

    if(distancia < 50){
      lixo.style.opacity = "0";
      lixo.style.transition = "0.5s";
    }

  });

}

setInterval(limparCampo, 100);