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
// const addBookToLibrary = function (newBook) {
//   let title = prompt (alert("title"));
//   let author = prompt (alert("author"));
//   let pages = prompt (alert("pages"));
//   let read = prompt (alert("read"));
//   newBook = new Book(title, author, pages, read);
//   let bookInfo = [newBook.title, newBook.author, newBook.pages, newBook.read];
//   myLibrary.push(newBook);
//   loopThroughtheLibrary ();
// }

//button for adding new books to the library...
const addNewBookButton = document.getElementById ("addNewBook");
addNewBookButton.addEventListener ('click', () => {
  addBookToLibrary ()
});


// I'm gonna try to store the values above there without spamming alert,
 const addBookToLibrary = function (newBook) {
  const title = document.getElementById ("title").value;
  const author = document.getElementById ("author").value;
  const pages = document.getElementById ("pages").value;
  const read =document.getElementById ("read").value;
  console.log (title + author + pages + read);
  newBook = new Book(title, author, pages, read);
  let bookInfo = [newBook.title, newBook.author, newBook.pages, newBook.read];
  myLibrary.push(newBook);
  loopThroughtheLibrary ();
}

// a function that loops through the array and displays each book on the page
const loopThroughtheLibrary = function () {
    const bookContainer = document.getElementById ("tableBody");
    let row = bookContainer.insertRow(i)
    row.id = "id" + i
    console.log (row.id)
    const displayTitle = document.createElement('th');
    displayTitle.classList.add('book');
    displayTitle.textContent =   myLibrary [i].title ;
    row.appendChild(displayTitle);
    const displayAuthor = document.createElement('td');
    displayAuthor.classList.add('book');
    displayAuthor.textContent =   myLibrary [i].author ;
    row.appendChild(displayAuthor);
    const displayPages = document.createElement('td');
    displayPages.classList.add('book');
    displayPages.textContent =   myLibrary [i].pages ;
    row.appendChild(displayPages);
    const displayRead = document.createElement('td');
    displayRead.classList.add('book');
    displayRead.textContent =   myLibrary [i].read ;
    row.appendChild(displayRead);
    const removeButton =  document.createElement ('button')
    removeButton.textContent = "Remove";
    removeButton.id = i;
    row.appendChild (removeButton);
    chocolate()
    
    i++;
}

function chocolate () {
const findBookButton = document.querySelectorAll ('button');
findBookButton.forEach((button)=>{
  button.addEventListener('click', () => {
    const gettingRow = document.getElementById ("id" + button.id );
    gettingRow.remove();
  });
});
}

//testing books
 const book1 = new Book ("The Fellowship of The Ring", "Tolkien", "423", "X")
 const book2 = new Book ("The Two Towers", "Tolkien", "354", "X" )
 const book3 = new Book ("The Return of the King", "Tolkien", "416", "X")
 const book4 = new Book ("Dune", "Frank Herbert", "412", "X")
 myLibrary.push (book1);
 myLibrary.push (book2);
 myLibrary.push (book3);
 myLibrary.push (book4); 
 loopThroughtheLibrary ();
 loopThroughtheLibrary ();
 loopThroughtheLibrary ();
 loopThroughtheLibrary ();
//testing books



