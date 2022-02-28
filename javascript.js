let myLibrary = [];

const contentWrapper = document.querySelector('.contentWrapper');

//creates book object
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//changes read in obj
Book.prototype.changeReadStatus = function () {
    if (this.read === "No") {
        this.read = "Yes";
    } else {
        this.read = "No";
    }
}

function addBookToLibrary(book) {
    book.title = document.querySelector('#title').value;;
    book.author = document.querySelector('#author').value;
    book.pages = document.querySelector('#pages').value;
    book.read = document.querySelector('input[name=read]:checked').value;
    myLibrary.push(book);
}

//create card elements
function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    contentWrapper.appendChild(card);
    const cardInfo = [
        title = document.createElement('p'),
        author = document.createElement('p'),
        pages = document.createElement('p'),
        read = document.createElement('p'),
        removeButton = document.createElement('button'),
        changeRead = document.createElement('button'),
    ]
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'Remove';
    changeRead.classList.add('changeRead');
    changeRead.textContent = 'Change Read Status';
    read.classList.add('change');
    for (i = 0; i < cardInfo.length; i++) {
        card.appendChild(cardInfo[i]);
    }
}


//displays entire library
function displayLibrary(library) {
    createCard();
    const cards = document.querySelectorAll('.card');
    library.forEach(function (book, index) {
        title.textContent = 'Title: ' + `${book.title}`;
        author.textContent = 'Author: ' + `${book.author}`;
        pages.textContent = 'Pages: ' + `${book.pages}`;
        read.textContent = 'Read: ' + `${book.read}`;
        cards[index].setAttribute('data-cardCount', index); //resets all the data-cardCount when one is deleted 
    })
    addChangeReadStatus();
    addRemoveButtonFunction();
}

//adds function to all removeButtons
function addRemoveButtonFunction() {
    let removeButtons = document.querySelectorAll('.removeButton');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeCard);
    })
}


//uses closest to remove the closest parent (card) to the button
function removeCard() {
    this.closest('.card').remove();
    for (i = 0; i < myLibrary.length; i++) {
        if (!!document.querySelector(`[data-cardCount="${i}"]`) === false) {
            myLibrary.splice(i,1);
        } else {
            continue;
        }
    }
}



function addChangeReadStatus() {
    const bookIndex = changeRead.closest('.card').getAttribute('data-cardCount');
    const change = document.querySelectorAll('.change');
    changeRead.addEventListener('click', () => {
        myLibrary[bookIndex].changeReadStatus();
        change[bookIndex].textContent = 'Read: ' + `${myLibrary[bookIndex].read}`;
    })
}

//adds form input to library
const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    const bookObj = new Book();
    addBookToLibrary(bookObj);
    displayLibrary(myLibrary);
});


function openForm() {
    document.querySelector('.formWrapper').style.display = 'block';
}

function closeForm() {
    document.querySelector('.formWrapper').style.display = 'none';
}

const newBook = document.querySelector('#newBook');
const form = document.querySelector('.formWrapper');
newBook.addEventListener('click', () => {
    if (form.style.display === 'none') {
        openForm();
    } else {
        closeForm();
    }
});