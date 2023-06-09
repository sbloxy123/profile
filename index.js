const getPosition = document.querySelector(".navbar-style");
const bg = document.createElement("div");
const alertBox = document.createElement("div");

alertBox.innerHTML = `<div class="alert-text-container">
  <h1>
  Hey! It seems you've come to my old website..
</h1>
</br>
<h2>please <strong>click on the link</strong> below to visit me over here 🙋 </h2>
</br>
<button class="alert-btn">
<a href="https://www.stuartbloxham.tech"> Visit my new site here </a>
</button>
<div id="Timer"></div>
</div>
`;
alertBox.classList.add("redirect-alert");

getPosition.insertAdjacentElement("afterend", bg);
getPosition.insertAdjacentElement("afterend", alertBox);

let timeLeft = 10;
const elem = document.getElementById("Timer");
const timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = "redirecting automatically in " + timeLeft;
    timeLeft--;
  }
}
