const quiz = {
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: 0,
    },
    {
      question: "What is the capital of England?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: 1,
    },
    {
      question: "What is the capital of Italy?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: 2,
    },
    {
      question: "What is the king of Fruit?",
      options: ["Apple", "Banana", "Strawberry", "Mango"],
      answer: 3,
    },
    
  ],
  score: 0,
  index: 0,
};

const questionContainer = document.querySelector(".question-container");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const scoreContainer = document.querySelector(".score-container");
const scoreText = document.querySelector(".score-text");
const scorePercentage = document.querySelector(".score-percentage");

function displayQuestion() {
  const question = quiz.questions[quiz.index];
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const inputEl = document.createElement("input");
    inputEl.type = "radio";
    inputEl.name = "option";
    inputEl.value = index;
    inputEl.id = `option${index}`;
    inputEl.onclick = checkAnswer;

    const labelEl = document.createElement("label");
    labelEl.htmlFor = `option${index}`;
    labelEl.innerText = option;

    const divEl = document.createElement("div");
    divEl.appendChild(inputEl);
    divEl.appendChild(labelEl);

    optionsContainer.appendChild(divEl);
  });
}

function checkAnswer() {
  const selectedOption = parseInt(document.querySelector('input[name="option"]:checked').value);
  const correctOption = quiz.questions[quiz.index].answer;

  if (selectedOption === correctOption) {
    quiz.score++;
  }

  quiz.index++;

  if (quiz.index < quiz.questions.length) {
    displayQuestion();
    updateProgress();
  } else {
    displayScore();
  }
}

function updateProgress() {
  progress.style.width = `${(quiz.index / quiz.questions.length) * 100}%`;
}

function displayScore() {
  scoreText.textContent = `Your score is: ${quiz.score}`;
  scorePercentage.textContent = `You answered ${(quiz.score / quiz.questions.length) * 100}% of the questions correctly.`;
}

displayQuestion();