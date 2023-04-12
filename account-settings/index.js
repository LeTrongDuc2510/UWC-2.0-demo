//handle drop down list
const button = document.querySelector(".btn");
const toggleList = function () {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("arrow").classList.toggle("toggleArrow");
};

button.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleList();
});

// handle choosing language
const vn = document.querySelector(".vietnamese");
const eng = document.querySelector(".english");
// if user choose English
const english = function () {
  document.getElementById("curr-lang").textContent = "English";
  eng.innerHTML = "English <span></span> &#x2713;";
  vn.innerHTML = "Tiếng Việt";
};

// if choose Vietnamese
const vietnamese = function () {
  document.getElementById("curr-lang").textContent = "Tiếng Việt";
  vn.innerHTML = "Tiếng Việt &#x2713;";
  eng.innerHTML = "English";
};

// handle transform input to display
const inputName = document.querySelectorAll("#input");

for (let i = 0; i < inputName.length; i++) {
  inputName[i].addEventListener("click", function (e) {
    inputName[i].placeholder = "";
  });
  inputName[i].addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      inputName[i].placeholder = inputName[i].value;
      inputName[i].value = "";
      inputName[i].cursor = none;
    }
  });
}

// handle notification
let modal = document.getElementById("notiModal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
