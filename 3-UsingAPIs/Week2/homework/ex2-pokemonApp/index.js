'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const data = await fetchData(url);
  const pokemons = data.results;
  const list = document.querySelector('.select-list');
  list.textContent = '';
  const userList = (event) => {
    pokemons.forEach((pokemon) => {
      if (pokemon.name === event.target.value) {
        fetchImage(pokemon.url);
      }
    });
  };
  list.addEventListener('change', userList);

  const option = document.createElement('option');
  option.textContent = 'Select one Pokemon';
  list.appendChild(option);

  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.name;
    option.textContent = ` ${pokemon.name}`;
    list.appendChild(option);
  });
}

async function fetchImage(url) {
  const data = await fetchData(url);
  const imgUrl = data.sprites.front_default;
  const img = document.createElement('img');
  const imagesContainer = document.querySelector('.images-container');
  imagesContainer.textContent = '';
  img.src = imgUrl;
  imagesContainer.appendChild(img);
}

function main() {
  const btn = document.createElement('button');
  const selectList = document.createElement('select');
  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('images-container');
  selectList.classList.add('select-list');
  btn.setAttribute('type', 'submit');
  btn.textContent = 'Get Pokemon';
  btn.addEventListener('click', () => {
    fetchAndPopulatePokemons();
  });

  document.body.append(imagesContainer, btn, selectList);
}

window.addEventListener('load', main);
