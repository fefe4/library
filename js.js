let myLibrary =[];
let i = 0; // i is an element in the library 

//Book Constructor
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.read = read
  this.Info = function (){
    return title + ", " + author + ". " + pages + "." + read;
  }
}
// takes input from user, and makes an object, also stores the book information
// (bookInfo) as an array, then stores that array as en element into myLibrary 
const addBookToLibrary = function (newBook) {
  let title = prompt (alert("title"));
  let author = prompt (alert("author"));
  let pages = prompt (alert("pages"));
  let read = prompt (alert("read"));
   newBook = new Book(title, author, pages, read);
  let bookInfo = [newBook.title, newBook.author, newBook.pages, newBook.read];
  myLibrary.push(bookInfo);
  loopThroughtheLibrary ();
}
// a function that loops through the array and displays each book on the page
const loopThroughtheLibrary = function () {
    const bookContainer = document.getElementById ("whereTheBooksAre");
    const displayBook = document.createElement('h4');
    displayBook.classList.add('book');
    displayBook.textContent =   myLibrary [i].title ;
    bookContainer.appendChild(displayBook);
    i++;
}
//testing books
 const book1 = new Book ("The Lord of The rings", "Tolkien", "500", "X")
 const book2 = new Book ("Dune", "Frank Herbert", "412", "X")
 myLibrary.push (book1);
 myLibrary.push (book2);
 loopThroughtheLibrary ();
//testing books


//button for adding new books to the library... in progress
const addNewBookButton = document.getElementById ("addNewBook");
addNewBookButton.addEventListener ('click', () => {
  addBookToLibrary ()
});


