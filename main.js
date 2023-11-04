const newBookBtn = document.querySelector("#newbook");
const shelf = document.querySelector(".shelf");
const bookForm = document.querySelector("#book-form");

function newBookEvent() {
  newBookBtn.addEventListener('click', () => {
    if (bookForm.getAttribute('hidden') === '') {
      showForm();
    } else {
      resetForm();
    }
  });
}

function submitFormEvent() {
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = e.target.book_title.value;
    let author = e.target.book_author.value;
    let pages = e.target.book_pages.value;
    let read = e.target.have_read.value;

    addBookToLibrary(title, author, pages, read);
    addBooksToShelf();

  });
}


let books = [];

function addBooksToShelf() {
  shelf.replaceChildren();
  for (let book of books) {
    let bookDiv = document.createElement("div");
    let bookWidth = getWidth(book);
    bookDiv.setAttribute("class", "book");
    bookDiv.setAttribute("style", `background: ${getRandomRGB()}; width: ${bookWidth}px`);
    bookDiv.setAttribute('data-index-number', books.indexOf(book));

    let title = document.createElement("h3");
    title.setAttribute("class", "title");
    title.textContent = book.title;

    let author = document.createElement("h5");
    author.setAttribute("class", "author");
    author.setAttribute("style", `width: ${bookWidth}px`);
    author.textContent = book.author;

    let removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove');
    removeBtn.textContent = "R";

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(removeBtn);
    shelf.appendChild(bookDiv);
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  books.push(book);
}

function getRandomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function getWidth(book) {
  let pages = book.pages;
  return String(Math.floor((pages / 100) * 15));
}


function showForm() {
  let bookForm = document.querySelector("#book-form");
  bookForm.removeAttribute("hidden");
}

function resetForm() {
  bookForm.reset();
}

function removeBook(book) {
  books.splice(book.indexNumber);
}


addBookToLibrary("Republic", "Plato", "412", "read");
addBookToLibrary("Politics", "Aristotle", "375", "read");
addBookToLibrary("The Prince", "Machiavelli", "150", "read");

addBooksToShelf();

