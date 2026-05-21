const worker =
document.getElementById("worker");

const trash =
document.querySelectorAll(".trash");

function cleanTrash(){

  const workerPos =
  worker.getBoundingClientRect();

  trash.forEach(item => {

    const trashPos =
    item.getBoundingClientRect();

    const distance =
    Math.abs(
      workerPos.left -
      trashPos.left
    );

    if(distance < 70){

      item.style.transform =
      "scale(0) rotate(180deg)";

      item.style.opacity = "0";

      item.style.transition =
      "all 0.6s ease";
    }

  });

}

setInterval(cleanTrash, 100);