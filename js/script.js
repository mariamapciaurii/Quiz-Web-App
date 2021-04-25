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
  rulesContainer.classList.add("activeTab"); //show info
};

// if exitQuiz button clicked
exitButton.onclick = () => {
  rulesContainer.classList.remove("activeTab"); //hide info
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
  categoryContainer.classList.add("activeTab"); //show quiz
  resultsContainer.classList.remove("activeTab"); //hide result
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

// if Next Que button clicked
nextButton.onclick = () => {
  if (questionCount < filteredQuestions.length - 1) {
    //if question count is less than total question length
    questionCount++; //increment the questionCount value
    questionNumber++; //increment the questionNumber value
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

// getting questions and options from array
function showQuetions(index) {
  filteredQuestions = questions[activeCategory].filter(
    (question) => question.difficulty === chosenDifficultyLevel
  );

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    (index + 1) +
    ". " +
    filteredQuestions[index].question +
    "</span>";
  let option_tag =
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

  questionText.innerHTML = que_tag; //adding new span tag inside que_tag
  optionsList.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = optionsList.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = filteredQuestions[questionCount].answer; //getting correct answer from array
  const allOptions = optionsList.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option

    for (i = 0; i < allOptions; i++) {
      if (optionsList.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        optionsList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        optionsList.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    optionsList.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  nextButton.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  rulesContainer.classList.remove("activeTab"); //hide info
  quizContainer.classList.remove("activeTab"); //hide quiz
  resultsContainer.classList.add("activeTab"); //show result
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! 🎉, You got <p>" +
      userScore +
      "</p> out of <p>" +
      filteredQuestions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside scoreText
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice 😎, You got <p>" +
      userScore +
      "</p> out of <p>" +
      filteredQuestions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
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
    time += 1; //upgrading time value with 1
    timeLine.style.width = time + "px"; //increasing width of timeLine with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine

      const allOptions = optionsList.children.length; //getting all option items
      let correcAns = filteredQuestions[questionCount].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (optionsList.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          optionsList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          optionsList.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        optionsList.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      nextButton.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    filteredQuestions.length +
    "</p> Questions</span>";
  bottomQuestionCounter.innerHTML = totalQueCounTag; //adding new span tag inside bottomQuestionCounter
}
