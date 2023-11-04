const btn = document.querySelector("button");
const shelf = document.querySelector(".shelf");
const bookForm = document.querySelector("#book-form");

btn.addEventListener('click', () => {
  showForm();
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  for (val of e.target) {
    console.log(val.name + ": " + val.value);
  }
});

let books = [
  {
    title: "Republic",
    author: "Plato",
    pages: 512,
  },
  {
    title: "Politics",
    author: "Aristotle",
    pages: 536,
  },
  {
    title: "The Prince",
    author: "Niccolo Machiavelli",
    pages: 151,
  },
];

function addBooksToShelf() {
  for (let book of books) {
    let bookDiv = document.createElement("div");
    let bookWidth = getWidth(book);
    bookDiv.setAttribute("class", "book");
    bookDiv.setAttribute("style", `background: ${getRandomRGB()}; width: ${bookWidth}px`);
    let title = document.createElement("h3");
    title.setAttribute("class", "title");
    title.textContent = book.title;
    let author = document.createElement("h5");
    author.setAttribute("class", "author");
    author.setAttribute("style", `width: ${bookWidth}px`);
    author.textContent = book.author;
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    shelf.appendChild(bookDiv);
  }
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let book = new Book();
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

addBooksToShelf()
