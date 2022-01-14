//text-tape
document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Welcome on my Website", "To continue, press Enter button"];

  function typeWriter(text, i, fnCallback) {
    console.log(text.length)
    if (i < (text.length)) {
      document.querySelector(".intro_code").innerHTML = text.substring(0, i + 1);
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
        typeWriter (dataText[i], 0, function () {
        StartTextAnimation(i +1);
      });
    }
  }
  StartTextAnimation(0);
});
// start the falling animation

let tableau = document.querySelectorAll("code")
// Création d'un tableau avec tout les nombres randoms 
let tableau_random = [];
for (let i = 0; i < tableau.length; i++) {
  tableau_random.push(i)
}
let shuffleArray = (tableau_random) => {
  tableau_random.sort(() => Math.random() - 0.5);
}
shuffleArray(tableau_random);

console.log(tableau_random);
//animation se lance en apuyant sur la touche "Enter"
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector(".cursor").setAttribute("class", "none");
    let i = 0
    const myInterval = setInterval(() => {
      if (i === tableau.length - 1) {
        clearInterval(myInterval);
      }
      tableau[tableau_random[i]].setAttribute("class", "display-anim")
      i++
    }, 10000 / tableau.length);
  };
//disparition de la div et apparition du site web

  setTimeout(() => {

    let bigDiv = document.getElementsByClassName("divTotal")[0]
    bigDiv.setAttribute("class","fondu")
    bigDiv.setAttribute("class", "endAnim")
  }, 11000);
});



