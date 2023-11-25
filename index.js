const die = document.querySelector(".die");
const dots = document.querySelectorAll(".dot");
const dotsDiv = document.querySelector(".dots-div");
const rollDict = { 1: one, 2: two, 3: three, 4: four, 5: five, 6: six };

window.addEventListener('DOMContentLoaded', () => {
    rollDict[Math.ceil(Math.random() * 6)]();
})

window.addEventListener("keypress", (event) => {
  if (event.key == " "){
    rollDie();
  }
});

function rollDie() {
  die.style.backgroundColor = "gray";

  let times = 0;
  var prev = 0;
  var interval = setInterval(() => {
    if (times >= 5) {
      clearInterval(interval);
      die.style.backgroundColor = "white";
    }
    let picked = Math.ceil(Math.random() * 6);
    if (!prev || prev != picked) {
      rollDict[picked]();
      prev = picked;
      times++;
    }
  }, 200);
}

function showDots(count) {
  let dotsShown = [];
  for (let dot of dots) {
    dot.style.position = "static";
    dot.style.display = "block";
    dot.style.display = "none";
  }
  for (let i = 0; i < count; i++) {
    dots[i].style.display = "block";
    dotsShown.push(dots[i]);
  }
  dotsDiv.classList.remove("diagonal");
  dotsDiv.classList.remove("one80");
  dotsDiv.style = {};
  return dotsShown;
}

function one() {
  showDots(1);
  dotsDiv.style.display = "flex";
  dotsDiv.style.alignItems = "center";
  dotsDiv.style.justifyContent = "center";
}

function two() {
  showDots(2);
  dotsDiv.style.width = "600px";
  dotsDiv.style.display = "flex";
  dotsDiv.style.justifyContent = "space-between";
  dotsDiv.classList.add("diagonal");
}

function three() {
  showDots(3);
  dotsDiv.style.width = "600px";
  dotsDiv.style.display = "flex";
  dotsDiv.style.justifyContent = "space-between";
  dotsDiv.classList.add("diagonal");
}

function four() {
  showDots(4);
  dotsDiv.style.display = "flex";
  dotsDiv.style.width = "76%";
  dotsDiv.style.height = "76%";
  dotsDiv.style.rowGap = "180px";
  dotsDiv.style.columnGap = "150px";
  dotsDiv.style.flexWrap = "wrap";
}

function five() {
  let shown = showDots(5);
  shown[4].style.position = "fixed";
  dotsDiv.style.display = "flex";
  dotsDiv.style.width = "76%";
  dotsDiv.style.height = "76%";
  dotsDiv.style.rowGap = "180px";
  dotsDiv.style.columnGap = "150px";
  dotsDiv.style.flexWrap = "wrap";

  shown[4].style.top = "255px";
  shown[4].style.left = "623px";
}

function six() {
  showDots(6);
  dotsDiv.style.width = "85%";
  dotsDiv.style.height = "85%";
  dotsDiv.style.display = "flex";
  dotsDiv.style.rowGap = "60px";
  dotsDiv.classList.add("one80");
  dotsDiv.style.columnGap = "50px";
  dotsDiv.style.flexWrap = "wrap";
  dotsDiv.style.justifyContent = "center";
}
