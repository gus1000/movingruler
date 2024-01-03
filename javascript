const size = document.querySelector(".size");

const ruler = document.querySelector(".ruler");
const lowerTicks = document.createElement("ul");
const upperTicks = document.createElement("ul");
lowerTicks.classList.add("tick-container-one");
upperTicks.classList.add("tick-container-two");

const setOfTicks = 25;

function createRuler() {
  let ticks = ``;

  for (let i = 0; i < setOfTicks; i++) {
    ticks =
      ticks +
      `
    <li class="tick-one"></li>
    <li class="tick-two"></li>
    <li class="tick-three"></li>
    <li class="tick-four"></li>
    <li class="tick-five"></li>`;
  }

  lowerTicks.innerHTML = ticks;
  upperTicks.innerHTML = ticks;

  ruler.appendChild(lowerTicks);
  ruler.appendChild(upperTicks);
}

createRuler();

window.addEventListener("resize", function (e) {
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  console.log(height, width);
  size.innerText = `${width}px`;
});


window.addEventListener("load", function (e) {
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  console.log(height, width);
  size.innerText = `${width}px`;
});
