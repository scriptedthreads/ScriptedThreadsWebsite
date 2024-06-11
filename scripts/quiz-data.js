// Define quiz questions and answers
export const questions = [
  {
    category: "HTML",
    question: "Which tag is used to define an unordered list in HTML?",
    answers: ["<ol>", "<li>", "<ul>", "<div>"],
    correctAnswer: 2, // <ul>
  },
  {
    category: "CSS",
    question:
      "Which property is used to change the text color of an element in CSS?",
    answers: ["background-color", "font-style", "color", "text-decoration"],
    correctAnswer: 2, // color
  },
  {
    category: "JavaScript",
    question:
      "What is the correct syntax for referring to an external script called 'script.js' in HTML?",
    answers: [
      "<script src='script.js'>",
      "<script name='script.js'>",
      "<script href='script.js'>",
      "<script type='text/javascript' src='script.js'>",
    ],
    correctAnswer: 0, // <script src="script.js">
  },
  {
    category: "HTML",
    question: "Which tag is used to define a hyperlink in HTML?",
    answers: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correctAnswer: 0, // <a>
  },
  {
    category: "CSS",
    question: "How do you add a background color for the whole page in CSS?",
    answers: [
      "body {background-color: #ffffff;}",
      "html {background-color: #ffffff;}",
      "page {background-color: #ffffff;}",
      "all {background-color: #ffffff;}",
    ],
    correctAnswer: 1, // html {background-color: #ffffff;}
  },
  {
    category: "JavaScript",
    question:
      "Which function is used to print content in the console in JavaScript?",
    answers: ["print()", "log()", "display()", "console.log()"],
    correctAnswer: 3, // console.log()
  },
  {
    category: "HTML",
    question:
      "Which tag is used to define the metadata about an HTML document, such as author, description, etc.?",
    answers: ["<meta>", "<head>", "<body>", "<title>"],
    correctAnswer: 0, // <meta>
  },
  {
    category: "CSS",
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 2, // Cascading Style Sheets
  },
  {
    category: "JavaScript",
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    answers: ["=", "==", "===", "=>"],
    correctAnswer: 0, // =
  },
  {
    category: "HTML",
    question:
      "Which attribute is used to specify the URL of the image in HTML?",
    answers: ["src", "href", "link", "img"],
    correctAnswer: 0, // src
  },
  {
    category: "CSS",
    question: "What does the 'margin: 0 auto;' CSS rule do?",
    answers: [
      "Sets the top and bottom margins to 0 and centers the element horizontally",
      "Centers the element vertically within its container",
      "Centers the element horizontally within its container",
      "Removes all margins from the element",
    ],
    correctAnswer: 2, // Centers the element horizontally within its container
  },
  {
    category: "JavaScript",
    question: "What is the result of the expression: 10 + '5' in JavaScript?",
    answers: ["15", "'105'", "105", "Error"],
    correctAnswer: 1, // "105"
  },
  {
    category: "HTML",
    question: "Which tag is used to define the navigation links in HTML5?",
    answers: ["<nav>", "<header>", "<section>", "<aside>"],
    correctAnswer: 0, // <nav>
  },
  {
    category: "CSS",
    question: "How do you select an element with the id 'example' in CSS?",
    answers: [".example", "#example", "element.example", "id.example"],
    correctAnswer: 1, // #example
  },
  {
    category: "JavaScript",
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    answers: ["pop()", "shift()", "remove()", "delete()"],
    correctAnswer: 0, // pop()
  },
];
