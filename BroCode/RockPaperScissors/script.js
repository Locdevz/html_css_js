const array = ["rock", "paper", "scissors"];
const userSelect = document.querySelector(".user-select");
const userFinalChoice = document.querySelector(".both-select p #player");
const computerFinalChoice = document.querySelector(".both-select p #computer");
const res = document.querySelector(".result");
const scoreOfUser = document.querySelector(".score p:first-child span");
const scoreOfComputer = document.querySelector(".score p:last-child span");

// console.log(array[Math.floor(Math.random() * array.length) + 0]);

let computerSelect = array[Math.floor(Math.random() * array.length) + 0];

let result = "";
let useScore = 0;
let computerScore = 0;
function check(resu) {
  res.classList.remove("win", "lose");
  if (resu.includes("win")) {
    useScore++;
    res.classList.add("win");
  } else if (resu.includes("lose")) {
    computerScore++;
    res.classList.add("lose");
  } else res.classList = "result";
  res.textContent = resu;
  updateScore();
}

function updateScore() {
  if (useScore > 0) scoreOfUser.style.color = "green";
  if (computerScore > 0) scoreOfComputer.style.color = "green";
  scoreOfUser.textContent = useScore;
  scoreOfComputer.textContent = computerScore;
}

function updateChoice(user, computer) {
  userFinalChoice.textContent = user;
  computerFinalChoice.textContent = computer;
}

userSelect.querySelectorAll("span").forEach((item) => {
  item.addEventListener("click", () => {
    computerSelect = array[Math.floor(Math.random() * array.length) + 0];
    // computerSelect = item.id;
    // console.log(`${computerSelect} and ${item.id}`);
    updateChoice(item.id, computerSelect);
    if (item.id === computerSelect) {
      result = "hoa";
    } else {
      switch (item.id) {
        case "rock":
          result = computerSelect === "scissors" ? "you win" : "you lose";
          break;
        case "paper":
          result = computerSelect === "rock" ? "you win" : "you lose";
          break;
        case "scissors":
          result = computerSelect === "paper" ? "you win" : "you lose";
          break;
      }
    }
    // console.log(result);
    check(result);
  });
});
