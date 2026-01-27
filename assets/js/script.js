// Get elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");

// Start quiz
startBtn.addEventListener("click", () => {
  startScreen.hidden = true;
  quizScreen.hidden = false;
});

