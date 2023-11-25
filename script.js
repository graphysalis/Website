const navbar = document.querySelector(".menu");
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");
const arrow3 = document.querySelector(".arrow3");
const linksBox = document.querySelector(".linksBox");

// au scroll > 70 => sideBar/menu position top 0
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.style.top = "0px";
    sideBar.style.top = "40px";
    arrow3.style.display = "flex";
  } else {
    navbar.style.top = "52px";
    sideBar.style.top = "95px";
    arrow3.style.display = "none";
  }
});

//side-bar open/close(mobile)
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  btn.classList.toggle("cross");
});

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
  btn.classList.remove("cross");
});
