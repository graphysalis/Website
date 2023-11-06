const navbar = document.querySelector(".menu");
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");
const arrow3 = document.querySelector(".arrow3");

// au scroll > 70 => sideBar position top 0
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.style.top = "0px";
    sideBar.style.top = "40px";
    arrow3.style.opacity = 1;
  } else {
    navbar.style.top = "52px";
    sideBar.style.top = "95px";
    arrow3.style.opacity = 0;
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
