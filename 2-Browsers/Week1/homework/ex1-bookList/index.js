//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // create new elements and styling
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.justifyContent = 'center';
  ul.style.width = '1200px';
  ul.style.margin = 'auto';

  books.forEach((item, i) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `${item.title} - ${item.author}`;
    li.style.width = '300px';
    li.style.margin = '30px';
    // condition of the background color .
    if (item.alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
    // creating images .
    const img = document.createElement('img');
    img.style.width = '200px';
    if (i === 0) {
      img.src = 'assets/the_design_of_everyday_things.jpg';
    } else if (i === 1) {
      img.src = 'assets/the_most_human_human.jpg';
    } else img.src = 'assets/the_pragmatic_programmer.jpg';
    // appending children.
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
  });

  return ul;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
