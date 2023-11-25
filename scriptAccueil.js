const presentation = document.querySelector(".presentation");
const bienvenue = document.querySelector(".bienvenue");
const titreH2 = document.querySelector("#visId h2");
const text = document.querySelector("#visId p");
const pic1 = document.querySelector("#visId .pic");
const linkBox = document.querySelector(".linkBox");
const visIdLine1 = document.querySelector("#visId .line1");
const visIdLine2 = document.querySelector("#visId .line2");
const logoLine1 = document.querySelector("#logo .line1");
const logoLine2 = document.querySelector("#logo .line2");
const charteLine1 = document.querySelector("#charte .line1");
const charteLine2 = document.querySelector("#charte .line2");
const webLine1 = document.querySelector("#web .line1");
const webLine2 = document.querySelector("#web .line2");

//apparition image  ou texte au chargement de la page:
window.addEventListener("load", () => {
  presentation.style.opacity = 1;
  bienvenue.style.opacity = 1;
  presentation.style.transform = "none";
  bienvenue.style.transform = "none";
  //document.documentElement.style.overflow = "hidden";empêcher scroll:
});

window.addEventListener("scroll", () => {
  //connaitre le niveau de scroll et l'afficher sur la page:document.getElementById("showScroll").innerHTML = window.scrollY + "px";
  /******************* */
  //connaitre dimensions du viewport :
  var hauteur = window.innerHeight;
  /********************* */
  //récupérer position "Y" d'un élément sur viewport :
  var posBox1 = visId.getBoundingClientRect();
  var posBox2 = logo.getBoundingClientRect();
  var posBox3 = charte.getBoundingClientRect();
  var posBox4 = web.getBoundingClientRect();

  if (posBox1.y <= hauteur / 1.5) {
    visId.style.opacity = 1;
    visIdLine1.style.width = "50px";
    visIdLine2.style.height = "100px";
  } else {
    visId.style.opacity = 0.2;
    visIdLine1.style.width = "0px";
    visIdLine2.style.height = "0px";
  }
  if (posBox2.y <= hauteur / 1.5) {
    logo.style.opacity = 1;
    logoLine1.style.width = "50px";
    logoLine2.style.height = "100px";
  } else {
    logo.style.opacity = 0.2;
    logoLine1.style.width = "0px";
    logoLine2.style.height = "0px";
  }

  if (posBox3.y <= hauteur / 1.5) {
    charte.style.opacity = 1;
    charteLine1.style.width = "50px";
    charteLine2.style.height = "100px";
  } else {
    charte.style.opacity = 0.2;
    charteLine1.style.width = "0px";
    charteLine2.style.height = "0px";
  }
  if (posBox4.y <= hauteur / 1.5) {
    web.style.opacity = 1;
    webLine1.style.width = "50px";
    webLine2.style.height = "100px";
  } else {
    web.style.opacity = 0.2;
    webLine1.style.width = "0px";
    webLine2.style.height = "0px";
  }
});

/**********  défilement img #web *****/
var images = new Array();
images = [
  "./assets/images/website/01.png",
  "./assets/images/website/02.png",
  "./assets/images/website/03.png",
  "./assets/images/website/04.png",
];
const pauseDefile = document.querySelector(".pauseDefile");
const playDefile = document.querySelector(".playDefile");

var index = 0;

function changeImage() {
  imgPlace.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  timerDefile = setTimeout(changeImage, 2500);
}

// déclencher la fonction "onload" :
window.addEventListener("load", () => {
  changeImage();
});
// puis déclencher/stopper la fonction sur "play":
pauseDefile.addEventListener("click", () => {
  clearTimeout(timerDefile);
  playDefile.style.visibility = "visible";
  pauseDefile.style.visibility = "hidden";
});

playDefile.addEventListener("click", () => {
  changeImage();
  pauseDefile.style.visibility = "visible";
  playDefile.style.visibility = "hidden";
});
