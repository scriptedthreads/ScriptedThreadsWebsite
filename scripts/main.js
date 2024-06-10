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

// Open And Close Get Started Modal
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
var getEarlyAccessFormModal = document.getElementById("get-early-access-form-modal");
var getEarlyAccessFormInput = document.getElementById(
  "get-early-access-form-input"
);
var getEarlyAccessFormInputModal = document.getElementById(
  "get-early-access-form-input-modal"
);

async function handleGetEarlyAccessFormSubmit(event) {
  event.preventDefault();
  var getEarlyAccessFormStatus = document.getElementById("get-early-access-form-status");
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
            getEarlyAccessFormStatus.innerHTML = "Oops! There was a problem submitting your form";
            getEarlyAccessFormStatus.style.color = "red";
          }
        });
      }
    })
    .catch((error) => {
      getEarlyAccessFormStatus.innerHTML = "Oops! There was a problem submitting your form";
      getEarlyAccessFormStatus.style.color = "red";
    });
}

async function handleGetEarlyAccessFormModalSubmit(event) {
  event.preventDefault();
  var getEarlyAccessFormStatusModal = document.getElementById("get-early-access-form-status-modal");
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
            getEarlyAccessFormStatusModal.innerHTML = "Oops! There was a problem submitting your form";
            getEarlyAccessFormStatusModal.style.color = "red";
          }
        });
      }
    })
    .catch((error) => {
      getEarlyAccessFormStatusModal.innerHTML = "Oops! There was a problem submitting your form";
      getEarlyAccessFormStatusModal.style.color = "red";
    });
}

getEarlyAccessForm.addEventListener("submit", handleGetEarlyAccessFormSubmit);
getEarlyAccessFormModal.addEventListener("submit", handleGetEarlyAccessFormModalSubmit);
