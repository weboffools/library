const btn = document.querySelector('button')
const shelf1 = document.querySelector('.s-1')
const shelf2 = document.querySelector('.s-2')
const shelf3 = document.querySelector('.s-3')


let books = [
  {
    title: 'Republic',
    author: 'Plato',
    pages: 489
  },
  {
    title: 'Politics',
    author: 'Aristotle',
    pages: 298
  },
  {
    title: 'The Prince',
    author: 'Machiavelli',
    pages: 222
  }
]

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
 for (const book of books) {
   let bookDiv = document.createElement('div');
   bookDiv.setAttribute('class', 'book');
   bookDiv.textContent = book.title;
   shelf1.appendChild(bookDiv);
 }
}


