import { questions } from "./quiz-data.js";

// Toggle between two images on click
let toggleImg = document.querySelector(".hamburger-menu");
let mobileDropdown = document.querySelector(".dropdown");

toggleImg.addEventListener("click", function () {
  // Toggle between two images
  if (toggleImg.src.endsWith("Hamburger-Close.svg")) {
    toggleImg.src = "../images/Hamburger-Open.svg"; // Replace with your close icon
    mobileDropdown.style.display = "block";
  } else {
    toggleImg.src = "../images/Hamburger-Close.svg"; // Replace with your menu icon
    mobileDropdown.style.display = "none";
  }
});

// Brand logo navigate to home page
let brandLogoImg = document.querySelector(".brand-logo");

brandLogoImg.addEventListener("click", function () {
  location.href = "#";
});

let copyrightYear = document.querySelector("#copyright-year");

copyrightYear.appendChild(document.createTextNode(new Date().getFullYear()));

// Open And Close Get Started & Coming Soon Modal
var getStartedModal = document.getElementById("get-started-modal");
var comingSoonModal = document.getElementById("coming-soon-modal");

var getStartedButton = document.getElementById("get-started-btn");
var getStartedButtonMobile = document.getElementById("get-started-btn-mobile");
var blogButton = document.getElementById("blog-btn");
var coursesButton = document.getElementById("courses-btn");
var blogButtonMobile = document.getElementById("blog-btn-mobile");
var coursesButtonMobile = document.getElementById("courses-btn-mobile");
var comingSoonButton = document.getElementById("coming-soon-btn");

var getStartedX = document.querySelector(".get-started-x");
var comingSoonX = document.querySelector(".coming-soon-x");

getStartedButton.onclick = function () {
  getStartedModal.style.display = "block";
};

getStartedButtonMobile.onclick = function () {
  getStartedModal.style.display = "block";
};

blogButton.onclick = function () {
  comingSoonModal.style.display = "block";
};

blogButtonMobile.onclick = function () {
  comingSoonModal.style.display = "block";
};

coursesButton.onclick = function () {
  comingSoonModal.style.display = "block";
};

coursesButtonMobile.onclick = function () {
  comingSoonModal.style.display = "block";
};

comingSoonButton.onclick = function () {
  comingSoonModal.style.display = "none";
  getStartedModal.style.display = "block";
};

getStartedX.onclick = function () {
  getStartedModal.style.display = "none";
};

comingSoonX.onclick = function () {
  comingSoonModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == getStartedModal || event.target == comingSoonModal) {
    getStartedModal.style.display = "none";
    comingSoonModal.style.display = "none";
  }
};

// Get Early Access Form Submit | Formspree
var getEarlyAccessForm = document.getElementById("get-early-access-form");
var getEarlyAccessFormModal = document.getElementById(
  "get-early-access-form-modal"
);
var getEarlyAccessFormInput = document.getElementById(
  "get-early-access-form-input"
);
var getEarlyAccessFormInputModal = document.getElementById(
  "get-early-access-form-input-modal"
);

async function handleGetEarlyAccessFormSubmit(event) {
  event.preventDefault();
  var getEarlyAccessFormStatus = document.getElementById(
    "get-early-access-form-status"
  );
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: getEarlyAccessForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        getEarlyAccessFormStatus.innerHTML = "Thanks for your submission!";
        getEarlyAccessFormStatus.style.color = "#7fa52a";
        getEarlyAccessForm.reset();
        getEarlyAccessFormInput.disabled = true;
        getEarlyAccessFormInputModal.disabled = true;
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            getEarlyAccessFormStatus.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            getEarlyAccessFormStatus.innerHTML =
              "Oops! There was a problem submitting your form";
            getEarlyAccessFormStatus.style.color = "red";
          }
        });
      }
    })
    .catch((error) => {
      getEarlyAccessFormStatus.innerHTML =
        "Oops! There was a problem submitting your form";
      getEarlyAccessFormStatus.style.color = "red";
    });
}

async function handleGetEarlyAccessFormModalSubmit(event) {
  event.preventDefault();
  var getEarlyAccessFormStatusModal = document.getElementById(
    "get-early-access-form-status-modal"
  );
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: getEarlyAccessFormModal.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        getEarlyAccessFormStatusModal.innerHTML = "Thanks for your submission!";
        getEarlyAccessFormStatusModal.style.color = "#7fa52a"; // Primary-Dark
        getEarlyAccessFormStatusModal.style.textAlign = "center";
        getEarlyAccessFormStatusModal.style.marginTop = "10px";
        getEarlyAccessFormModal.reset();
        getEarlyAccessFormInput.disabled = true;
        getEarlyAccessFormInputModal.disabled = true;
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            getEarlyAccessFormStatusModal.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            getEarlyAccessFormStatusModal.innerHTML =
              "Oops! There was a problem submitting your form";
            getEarlyAccessFormStatusModal.style.color = "red";
          }
        });
      }
    })
    .catch((error) => {
      getEarlyAccessFormStatusModal.innerHTML =
        "Oops! There was a problem submitting your form";
      getEarlyAccessFormStatusModal.style.color = "red";
    });
}

getEarlyAccessForm.addEventListener("submit", handleGetEarlyAccessFormSubmit);
getEarlyAccessFormModal.addEventListener(
  "submit",
  handleGetEarlyAccessFormModalSubmit
);

// Quiz Modal
var quizModal = document.getElementById("quiz-modal");

var quizButton = document.getElementById("quiz-btn");

quizButton.onclick = function () {
  quizModal.style.display = "block";
};

var quizX = document.querySelector(".quiz-x");

quizX.onclick = function () {
  quizModal.style.display = "none";
};

// Quiz Logic

// Initialize variables to store scores for each category
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;

// Initialize variables
let score = 0;
let currentQuestion = 0;
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("quiz-result");
const quizSubmitButton = document.getElementById("quiz-submit-button");
const nextButton = document.getElementById("quiz-next-button");
const analysisContainer = document.getElementById("quiz-analysis");
const questionNumberContainer = document.getElementById("question-number");

// Function to display current question
function displayCurrentQuestion() {
  const question = questions[currentQuestion];
  const questionElement = document.createElement("div");
  questionElement.classList.add("quiz-question");
  questionElement.innerHTML = `<p>${question.question}</p>`;
  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "question" + currentQuestion;
    input.value = i;
    const label = document.createElement("label");
    label.textContent = answer;
    const answerElement = document.createElement("div");
    answerElement.classList.add("quiz-answer");
    questionElement.appendChild(answerElement);
    answerElement.appendChild(input);
    answerElement.appendChild(label);
  }
  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
}

// Function to handle submission of answers
function submitAnswers() {
  const selectedOption = document.querySelector(
    "input[name=question" + currentQuestion + "]:checked"
  );
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }
  const answer = selectedOption.value;
  if (answer == questions[currentQuestion].correctAnswer) {
    score++;
    // Update scores for each category only if the answer is correct
    if (questions[currentQuestion].category === "HTML") {
      htmlScore++;
    } else if (questions[currentQuestion].category === "CSS") {
      cssScore++;
    } else if (questions[currentQuestion].category === "JavaScript") {
      jsScore++;
    }
  }
  currentQuestion++;

  if (currentQuestion < questions.length - 1) {
    // Display "Next" button until the second last question
    displayCurrentQuestion();
    updateQuestionNumber();
    quizSubmitButton.style.display = "none";
    nextButton.style.display = "block";
  } else if (currentQuestion === questions.length - 1) {
    // Display "Submit" button on the last question
    displayCurrentQuestion();
    updateQuestionNumber();
    quizSubmitButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    // Show result and hide buttons after all questions are answered
    showResult();
    quizSubmitButton.style.display = "none";
    nextButton.style.display = "none";
  }
}

// Function to display the result
function showResult() {
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `<p>Your score is ${score} out of ${questions.length}</p>`;

  // Determine the category with the lowest score
  let lowestScoreCategory = "";
  if (htmlScore <= cssScore && htmlScore <= jsScore) {
    lowestScoreCategory = "HTML";
  } else if (cssScore <= htmlScore && cssScore <= jsScore) {
    lowestScoreCategory = "CSS";
  } else {
    lowestScoreCategory = "JavaScript";
  }

  // Display the analysis
  analysisContainer.style.display = "block";
  analysisContainer.textContent = `You should start with: ${lowestScoreCategory}`;
}

// Function to update the question number display
function updateQuestionNumber() {
  questionNumberContainer.textContent = `${currentQuestion + 1} / ${
    questions.length
  }`;
}

quizSubmitButton.addEventListener("click", submitAnswers);
nextButton.addEventListener("click", submitAnswers);

displayCurrentQuestion();
updateQuestionNumber();
