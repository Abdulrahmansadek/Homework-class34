'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
// task1;
const body = document.querySelector('body');
body.style.fontFamily = 'Arial,sans-serif';

// task2:
const spans = document.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
  spans[0].textContent = 'Abdulrahman';
  spans[1].textContent = 'Pasta';
  spans[2].textContent = 'Damascus';
}

// task3:
const listItem = document.getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++) {
  listItem[i].className = 'list-item';
}
//task5:
const img = document.createElement('img');
img.src = '';
body.appendChild(img);
