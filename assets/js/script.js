// Quiz questions
const questions = [
  {
    //Each question has text, possible answers and the correct answer
    question: "Choose the grammatically correct sentence:",
    answers: [
      "She don't like coffee.",
      "She doesn't like coffee.",
      "She didn't likes coffee."
    ],
    correct: "She doesn't like coffee."
  },
  {
    question: "Choose the correct sentence:",
    answers: [
      "They was happy.",
      "They were happy.",
      "They is happy."
    ],
    correct: "They were happy."
  }
];
//Load the current question and update the UI
let currentQuestionIndex = 0;
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Set question text
  document.querySelector(".question").textContent = currentQuestion.question;

  // Set answers
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
  });
}

// Get elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");

// Start quiz
startBtn.addEventListener("click", () => {
  startScreen.hidden = true;
  quizScreen.hidden = false;
  loadQuestion();
});
// Get answer buttons and feedback elements
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackScreen = document.getElementById("feedback-screen");
const feedbackMessage = document.getElementById("feedback-message");

// Correct answer text
const correctAnswer = "She doesn't like coffee.";

// Handle answer click
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    quizScreen.hidden = true;
    feedbackScreen.hidden = false;

    if (button.textContent === questions[currentQuestionIndex].correct) {
      feedbackMessage.textContent = "Correct! Well done 🎉";
    } else {
      feedbackMessage.textContent = "Not quite. Try again 🙂";
    }
  });
});

// Next question button
const nextBtn = document.getElementById("next-btn");
//Move to the next question or end the quiz
nextBtn.addEventListener("click", () => {
  feedbackScreen.hidden = true;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    quizScreen.hidden = false;
    loadQuestion();
  } else {
    alert("Quiz complete 🎉");
  }
});


