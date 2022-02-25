let myLibrary = [];

class Book {
    constructor(read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        read = read;
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//use document fragment to appendchild all at once
function appendDocumentFragment() {
    const card = document.createElement('div');
    card.classList.add('card');
    contentWrapper.appendChild(card);
    const cardInfo = [
     title = document.createElement('p'),
     author = document.createElement('p'),
     pages = document.createElement('p'),
     read = document.createElement('p'),
    ];
    let fragment = document.createDocumentFragment();
    for (i = 0; i < cardInfo.length; i++) {
        fragment.appendChild(cardInfo[i]);
    }
    card.appendChild(fragment);
}

const contentWrapper = document.querySelector('.contentWrapper');

//displays entire library
function displayLibrary (library) {
    appendDocumentFragment();
    library.forEach(book => {
        title.textContent = 'Title: ' + `${book.title}`;
        author.textContent = 'Author: ' + `${book.author}`;
        pages.textContent = 'Pages: ' + `${book.pages}`;
        read.textContent = 'Read: ' + `${book.read}`;
  })
}
//to do: add remove button to display library, probably to the document fragment



const newBook = document.querySelector('#newBook');
const form = document.querySelector('.formWrapper');
newBook.addEventListener('click', () => {
  if (form.style.display === 'none') {
    openForm();
  } else {
    closeForm();
  }
});

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  const bookObj = new Book();
  bookObj.title = document.querySelector('#title').value;;
  bookObj.author = document.querySelector('#author').value;
  bookObj.pages = document.querySelector('#pages').value;
  bookObj.read = document.querySelector('input[name=read]:checked').value;
  addBookToLibrary(bookObj);
  displayLibrary(myLibrary);
});


function openForm () {
  document.querySelector('.formWrapper').style.display = 'block';
}

function closeForm() {
  document.querySelector('.formWrapper').style.display = 'none';
}

