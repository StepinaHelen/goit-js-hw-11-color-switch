const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector("body"),
  buttonStart: document.querySelector("button[data-action='start']"),
  buttonStop: document.querySelector("button[data-action='stop']")

};
let timerId = null;
let isActive = false;
refs.buttonStart.addEventListener("click", () => {
  refs.buttonStop.removeAttribute("disabled", "disabled")
  refs.buttonStart.setAttribute("disabled", "disabled")
  if (isActive) {
    return
  }
 isActive = true; 
  timerId = setInterval(() => {
    // randomIntegerFromInterval ()
     refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0,5)]}`;
    
  }, 1000);
});

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
    // const max = colors.length - 1;
    // const min = 0;
    // const index = Math.round(Math.random() * (max - min) + min);
    // const color = colors[index];
    // refs.body.style.backgroundColor = `${color}`;
}

refs.buttonStop.addEventListener("click", () => {
  isActive = false;
  refs.buttonStop.setAttribute("disabled", "disabled")
  refs.buttonStart.removeAttribute("disabled", "disabled")
  clearTimeout(timerId);
})