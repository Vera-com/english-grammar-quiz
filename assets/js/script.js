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
  },

  {
  question: "Choose the correct sentence:",
  answers: [
    "She has went home.",
    "She has gone home.",
    "She have gone home."
  ],
  correct: "She has gone home."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "I am living here since 2020.",
    "I have lived here since 2020.",
    "I live here since 2020."
  ],
  correct: "I have lived here since 2020."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "There is many problems.",
    "There are many problems.",
    "There was many problems."
  ],
  correct: "There are many problems."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "This is the most unique idea.",
    "This is a more unique idea.",
    "This is a unique idea."
  ],
  correct: "This is a unique idea."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "She suggested to go early.",
    "She suggested going early.",
    "She suggested go early."
  ],
  correct: "She suggested going early."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "I have seen her yesterday.",
    "I saw her yesterday.",
    "I have saw her yesterday."
  ],
  correct: "I saw her yesterday."
},


{
  question: "Choose the correct sentence:",
  answers: [
    "If I will see him, I will tell him.",
    "If I saw him, I would tell him.",
    "If I see him, I would tell him."
  ],
  correct: "If I saw him, I would tell him."
},

{
  question: "Choose the correct sentence:",
  answers: [
    "Neither of the students were ready.",
    "Neither of the students was ready.",
    "Neither of the students are ready."
  ],
  correct: "Neither of the students was ready."
}

];
//Load the current question and update the UI
let currentQuestionIndex = 0;
let score = 0;
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  progress.textContent = 
  `Question ${currentQuestionIndex + 1} of ${questions.length}`;


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
const progress = document.getElementById("progress");


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

    const correctAnswer = questions[currentQuestionIndex].correct;

    if (button.textContent === correctAnswer) {
      feedbackMessage.textContent = "Correct! Well done 🎉";
      score++;
    } else {
      feedbackMessage.textContent = "Not quite 🙂";
      button.classList.add("wrong");
    }

    // Always highlight the correct answer
    answerButtons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });

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

let finalMessage = "";

  if (score === questions.length) {
    finalMessage = "🌟 Excellent work!";
  } else if (score >= 1) {
    finalMessage = "👍 Good attempt!";
  } else {
    finalMessage = "📚 Keep practicing!";
  }

resultMessage.textContent =
  `Quiz complete 🎉 Your score: ${score}/${questions.length} — ${finalMessage}`;
   
}
});

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;

    resultScreen.hidden = true;   // hide results
    quizScreen.hidden = false;     // show quiz

    loadQuestion();                // load first question
});



