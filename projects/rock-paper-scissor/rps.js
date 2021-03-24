const getBotResult = () => {
  const comp = Math.random();

  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "paper";
  return "scissor";
};

const getResult = (comp, player) => {
  if (player == comp) return "SERI!";
  if (player == "rock") return comp == "scissor" ? "MENANG!" : "KALAH!";
  if (player == "paper") return comp == "scissor" ? "KALAH!" : "MENANG!";
  if (player == "scissor") return comp == "rock" ? "KALAH" : "MENANG!";
};

const loading = () => {
  const spinnerImg = document.querySelector(".img-komputer");
  const picList = ["rock", "paper", "scissor"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    spinnerImg.setAttribute("src", "img/" + picList[i++] + ".png");
    if (i == picList.length) i = 0;
  }, 100);
};
//pick rock
// const pRock = document.querySelector(".rock");
// pRock.addEventListener("click", () => {
//   const botPick = getBotResult();
//   const playerPick = pRock.className;

//   const result = getResult(botPick, playerPick);

//   //change computer image
//   const pComputerImage = document.querySelector(".img-komputer");
//   pComputerImage.setAttribute("src", "img/" + botPick + ".png");

//   const printResult = document.querySelector(".info");
//   printResult.innerHTML = result;
// });

const pickOne = document.querySelectorAll("li img");
pickOne.forEach((image) => {
  image.addEventListener("click", () => {
    const botPick = getBotResult();
    const playerPick = image.className;

    const result = getResult(botPick, playerPick);

    loading();
    //change computer image
    setTimeout(() => {
      const pComputerImage = document.querySelector(".img-komputer");
      pComputerImage.setAttribute("src", "img/" + botPick + ".png");

      const printResult = document.querySelector(".info");
      printResult.innerHTML = result;
    }, 1000);
  });
});
