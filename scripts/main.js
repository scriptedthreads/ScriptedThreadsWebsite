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

var getStartedButton = document.getElementById("get-started-btn");
var getStartedButtonMobile = document.getElementById("get-started-btn-mobile");

var modalCloseX = document.querySelector(".modal-close-x");

getStartedButton.onclick = function () {
  getStartedModal.style.display = "block";
};

getStartedButtonMobile.onclick = function () {
  getStartedModal.style.display = "block";
};

modalCloseX.onclick = function () {
  getStartedModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == getStartedModal) {
    getStartedModal.style.display = "none";
  }
};
