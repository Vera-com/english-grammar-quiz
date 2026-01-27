// Get elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");

// Start quiz
startBtn.addEventListener("click", () => {
  startScreen.hidden = true;
  quizScreen.hidden = false;
});
// Get answer buttons and feedback elements
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackScreen = document.getElementById("feedback-screen");
const feedbackMessage = document.getElementById("feedback-message");

// Correct answer text
const correctAnswer = "She doesn't like coffee.";

// Handle answer click
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quizScreen.hidden = true;
    feedbackScreen.hidden = false;

    if (button.textContent === correctAnswer) {
      feedbackMessage.textContent = "Correct! Well done 🎉";
    } else {
      feedbackMessage.textContent = "Not quite. Try again 🙂";
    }
  });
});

