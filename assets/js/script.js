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
  question: "If I had taken the job, I _____ in London now.",
  answers: [
    "would live",
    "would have lived",
    "will live"
  ],
  correct: "would live"
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
  question: "Rarely _____ such dedication from a student.",
  answers: [
    "I have seen",
    "have I seen",
    "I saw"
  ],
  correct: "have I seen"
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
  question: "He hasn't replied yet. He _____ the message.",
  answers: [
    "might not have seen",
    "must not see",
    "cannot see"
  ],
  correct: "might not have seen"
},

{
  question: "Not only _____ late, but he also forgot the documents.",
  answers: [
    "he was",
    "was he",
    "he is"
  ],
  correct: "was he"
},

{
  question: "If she had studied harder, she _____ the exam now.",
  answers: [
    "would pass",
    "would have passed",
    "will pass"
  ],
  correct: "would pass"
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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let currentQuestionIndex = 0;
let score = 0;
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  progress.textContent = 
  `Question ${currentQuestionIndex + 1} of ${questions.length}`;


  // Set question text
  document.querySelector(".question").textContent = currentQuestion.question;

  // Shuffle & Set answers
  const shuffledAnswers = [...currentQuestion.answers];
shuffleArray(shuffledAnswers);

  answerButtons.forEach((button, index) => {
    button.textContent = shuffledAnswers[index];
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
  shuffleArray(questions); //shuffle questions
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

let percentage = (score / questions.length) * 100;
let finalMessage = "";

if (percentage === 100) {
  finalMessage = "🏆 Outstanding! Perfect score.";
} else if (percentage >= 80) {
  finalMessage = "🔥 Excellent performance!";
} else if (percentage >= 60) {
  finalMessage = "👍 Good job! You're getting strong.";
} else if (percentage >= 40) {
  finalMessage = "🙂 Fair attempt. Review a few topics.";
} else {
  finalMessage = "📚 Keep practicing-You’ll improve!";
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



