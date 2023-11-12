const presentation = document.querySelector(".presentation");
const bienvenue = document.querySelector(".bienvenue");
const btnCard = document.querySelector(".btnCard");
const puzzle = document.querySelector(".puzzleImg");

setTimeout(() => {
  document.body.style.backgroundImage =
    "url(./assets/images/background/background1.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}, 4000);

var puzzleImg = document.querySelectorAll(".puzzleImg");

puzzleImg.forEach((puzzleImg) => {
  window.addEventListener("load", () => {
    puzzleImg.style.opacity = 1;
    puzzleImg.style.transform = "none";
    puzzleImg.style.top = 0;
    puzzleImg.style.left = 0;
  });
  presentation.style.opacity = 1;
  presentation.style.transform = "none";
});

/*****changement de carte au click****************************/

var cvs = document.querySelectorAll(".cv");

cvs.forEach((cv) => {
  cv.addEventListener("click", () => {
    cv.style.top = "-600px";
    cv.style.transform = "rotateZ(-90deg)";
    cv.style.opacity = 0;
  });
  cv10.addEventListener("click", () => {
    cv.style.top = 0;
    cv.style.transform = "rotateZ(0deg)";
    cv.style.opacity = 1;
  });
});
