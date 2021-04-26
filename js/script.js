//Selecting all required elements
const startButton = document.querySelector(".qwa-start__button");

//Rules Container
const rulesContainer = document.querySelector(".qwa-rules");
const exitButton = rulesContainer.querySelector(".qwa-rules__button--quit");
const continueButton = rulesContainer.querySelector(
  ".qwa-rules__button--continue"
);

//Difficulty Container
const difficultyContainer = document.querySelector(".qwa-difficulty");

//Category Container
const categoryContainer = document.querySelector(".qwa-categories");

//Quiz Container
const quizContainer = document.querySelector(".qwa-quiz");

const timeLine = quizContainer.querySelector(".qwa-quiz__timeline");

const questionText = quizContainer.querySelector(".qwa-quiz__text");
const optionsList = quizContainer.querySelector(".qwa-quiz__options");

const nextButton = quizContainer.querySelector(".qwa-quiz__button--next");
const bottomQuestionCounter = quizContainer.querySelector(".qwa-quiz__count");

//Result Container
const resultsContainer = document.querySelector(".qwa-result");
const scoreText = resultsContainer.querySelector(".qwa-results__score");

const restartQuiz = resultsContainer.querySelector(
  ".qwa-results__button--restart"
);
const quitQuiz = resultsContainer.querySelector(".qwa-results__button--quit");

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let activeCategory = "";
let chosenDifficultyLevel = 1;
let filteredQuestions = [];

// if startQuiz button clicked
startButton.onclick = () => {
  rulesContainer.classList.add("activeTab"); 
};

// if exitQuiz button clicked
exitButton.onclick = () => {
  rulesContainer.classList.remove("activeTab"); 
};

// if continueQuiz button clicked
continueButton.onclick = () => {
  rulesContainer.classList.remove("activeTab");
  categoryContainer.classList.add("activeTab");
};

function choseCategory(categoryName) {
  categoryContainer.classList.remove("activeTab");
  difficultyContainer.classList.add("activeTab");

  activeCategory = categoryName;
}

function choseDifficulty(difficultyLevel) {
  chosenDifficultyLevel = difficultyLevel;

  difficultyContainer.classList.remove("activeTab");
  quizContainer.classList.add("activeTab");

  showQuetions(0);
  queCounter(1);
  startTimerLine(0);
}

// if restartQuiz button clicked
restartQuiz.onclick = () => {
  categoryContainer.classList.add("activeTab"); 
  resultsContainer.classList.remove("activeTab");
  questionCount = 0;
  questionNumber = 1;
  userScore = 0;
  widthValue = 0;
  clearInterval(counter);
  clearInterval(counterLine);
  nextButton.classList.remove("show");
};

// if quitQuiz button clicked
quitQuiz.onclick = () => {
  window.location.reload(); //reload the current window
};

// if Next Question button clicked
nextButton.onclick = () => {
  if (questionCount < filteredQuestions.length - 1) {
    questionCount++; 
    questionNumber++;
    showQuetions(questionCount);
    queCounter(questionNumber);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextButton.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

function showQuetions(index) {
  filteredQuestions = questions[activeCategory].filter(
    (question) => question.difficulty === chosenDifficultyLevel
  );

  //creating a new span and div tag for question and option
  let questionTitle =
    "<span>" +
    (index + 1) +
    ". " +
    filteredQuestions[index].question +
    "</span>";
  let questionAnswers =
    '<div class="option"><span>' +
    filteredQuestions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    filteredQuestions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    filteredQuestions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    filteredQuestions[index].options[3] +
    "</span></div>";

  questionText.innerHTML = questionTitle; 
  optionsList.innerHTML = questionAnswers;

  const option = optionsList.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); 
  clearInterval(counterLine); 
  let userAns = answer.textContent; 
  let correcAns = filteredQuestions[questionCount].answer; 
  const allOptions = optionsList.children.length; 

  if (userAns == correcAns) {
    userScore += 1; 
    answer.classList.add("correct"); 
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect"); 
    answer.insertAdjacentHTML("beforeend", crossIconTag); 

    for (i = 0; i < allOptions; i++) {
      if (optionsList.children[i].textContent == correcAns) {
        optionsList.children[i].setAttribute("class", "option correct"); 
        optionsList.children[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    optionsList.children[i].classList.add("disabled"); 
  }
  nextButton.classList.add("show");
}

function showResult() {
  rulesContainer.classList.remove("activeTab"); 
  quizContainer.classList.remove("activeTab"); 
  resultsContainer.classList.add("activeTab"); 

  if (userScore > 3) {
    let scoreTag =
      "<span>and congrats! 🎉, You got <p>" +
      userScore +
      "</p> out of <p>" +
      filteredQuestions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; 
  } else if (userScore > 1) {
    let scoreTag =
      "<span>and nice 😎, You got <p>" +
      userScore +
      "</p> out of <p>" +
      filteredQuestions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span>and sorry 😐, You got only <p>" +
      userScore +
      "</p> out of <p>" +
      filteredQuestions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; 
    timeLine.style.width = time + "px"; 
    if (time > 549) {
      clearInterval(counterLine); 

      const allOptions = optionsList.children.length;
      let correcAns = filteredQuestions[questionCount].answer; 
      for (i = 0; i < allOptions; i++) {
        if (optionsList.children[i].textContent == correcAns) {
          optionsList.children[i].setAttribute("class", "option correct"); 
          optionsList.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
        }
      }
      for (i = 0; i < allOptions; i++) {
        optionsList.children[i].classList.add("disabled"); 
      }
      nextButton.classList.add("show");
    }
  }
}

function queCounter(index) {
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    filteredQuestions.length +
    "</p> Questions</span>";
  bottomQuestionCounter.innerHTML = totalQueCounTag;
}
