const man = document.getElementById("man");
const trashItems = document.querySelectorAll(".trash");

function cleanField(){

  const manPosition =
    man.getBoundingClientRect();

  trashItems.forEach((trash)=>{

    const trashPosition =
      trash.getBoundingClientRect();

    const distance =
      Math.abs(
        manPosition.left -
        trashPosition.left
      );

    if(distance < 60){

      trash.style.opacity = "0";
      trash.style.transform =
      "scale(0) rotate(180deg)";

      trash.style.transition =
      "all 0.5s ease";
    }

  });

}

setInterval(cleanField, 100);