const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// display the list of scores from localStorage
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} = ${score.score}</li>`;
  })
  .join("");
