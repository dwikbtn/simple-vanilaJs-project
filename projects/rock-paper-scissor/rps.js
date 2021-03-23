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

const pRock = document.querySelector(".rock");
pRock.addEventListener("click", () => {
  const botPick = getBotResult();
  const playerPick = pRock.className;

  const result = getResult(botPick, playerPick);
  console.log(result);
});
