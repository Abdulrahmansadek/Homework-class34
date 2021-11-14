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

// task1;
const body = document.querySelector('body');
body.style.fontFamily = 'Arial,sans-serif';
const nickName = document.getElementsById('nickname');
const favFood = document.getElementsById('fav-food');
const hometown = document.getElementsById('hometown');
nickName.textContent = 'Abdulrahman';
favFood.textContent = 'pasta';
hometown.textContent = 'Damascus';

//task2:
const img = document.createElement('img');
img.src = '';
body.appendChild(img);
