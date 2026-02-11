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
let score = 0;
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Set question text
  document.querySelector(".question").textContent = currentQuestion.question;

  // Set answers
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
  });
  //Reset buttons
   answerButtons.forEach(btn => {btn.disabled = false;
   btn.classList.remove("correct","wrong");
   });
   nextBtn.hidden = true;
   feedbackMessage.textContent ="";
}

// Get elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
// Get answer buttons and feedback elements
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackMessage = document.getElementById("feedback-message");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const resultScreen = document.getElementById("result-screen");
const resultMessage = document.getElementById("result-message");

// Start quiz
startBtn.addEventListener("click", () => {
  startScreen.hidden = true;
  quizScreen.hidden = false;
  loadQuestion();
});

// Handle answer click
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
   answerButtons.forEach(btn => btn.disabled = true);
    if (button.textContent === questions[currentQuestionIndex].correct) {
      feedbackMessage.textContent = "Correct! Well done 🎉";
     button.classList.add("correct");   // ✅ green
      score++;
    } else {
      feedbackMessage.textContent = "Not quite. Try again 🙂";
      button.classList.add("wrong");     // ✅ yellow
    }
    nextBtn.hidden = false;
  });
});

// Next question button
//Move to the next question or end the quiz
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    quizScreen.hidden = false;
    loadQuestion();
  } else {
  quizScreen.hidden = true;
resultScreen.hidden = false;

resultMessage.textContent =
  `Quiz complete 🎉 Your score: ${score}/${questions.length}`;
   
}
});

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;

    resultScreen.hidden = true;   // hide results
    quizScreen.hidden = false;     // show quiz

    loadQuestion();                // load first question
});



