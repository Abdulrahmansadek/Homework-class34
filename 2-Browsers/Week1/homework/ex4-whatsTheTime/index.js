'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const div = document.createElement('p');
document.body.appendChild(div);
div.style.fontSize = '20px';
div.style.textAlign = 'center';
div.style.border = '1px solid black';
div.style.width = '200px';

div.style.alignItems = 'center';
div.style.margin = 'auto';
div.style.padding = 'auto';
function addCurrentTime() {
  const today = new Date();
  const currentTime = today.toLocaleTimeString();
  div.textContent = currentTime;
}
setInterval(addCurrentTime, 1000);
window.addEventListener('load', addCurrentTime);
