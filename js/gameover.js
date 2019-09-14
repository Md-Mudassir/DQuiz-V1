const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

// display the final score
finalScore.innerText = `${mostRecentScore}/100`;

// input username
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);
  // sort the scores in ascending order
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  // store the score in localstorage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("../pages/scores.html");
};
