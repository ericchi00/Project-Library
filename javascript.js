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

function addBookToLibrary(book) {
    book.title = document.querySelector('#title').value;;
    book.author = document.querySelector('#author').value;
    book.pages = document.querySelector('#pages').value;
    book.read = document.querySelector('input[name=read]:checked').value;
    myLibrary.push(book);
}


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
   // card.setAttribute('data-cardCount', myLibrary.length - 1);
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'Remove';
    changeRead.classList.add('changeRead');
    changeRead.textContent = 'Change Read Status';
    for (i = 0; i < cardInfo.length; i++) {
        card.appendChild(cardInfo[i]);
    }
}


//displays entire library
function displayLibrary(library) {
    createCard();
    addRemoveButtonFunction();
    const cards = document.querySelectorAll('.card');
    library.forEach(function (book, index) {
        title.textContent = 'Title: ' + `${book.title}`;
        author.textContent = 'Author: ' + `${book.author}`;
        pages.textContent = 'Pages: ' + `${book.pages}`;
        read.textContent = 'Read: ' + `${book.read}`;
        cards[index].setAttribute('data-cardCount', index); //resets all the data-cardCount when one is deleted 
    })
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

// for (i = 0; i < myLibrary.length; i++) {

//     if (document.querySelector(`[data-cardCount="${i}"]`) !== myLibrary[i]) {
//         myLibrary.splice(i, 1);
//     }

/*
        const card = document.querySelector(`[data-cardCount="${index}"]`);
        if (card === myLibrary[index]) {
            console.log(index);
            card.querySelector(`[data-cardCount="${index}"]`).remove();
            //card.closest('div').remove();
            myLibrary.splice(index, 1);
        } else {
            console.log(index);
        }
        //      const card = document.querySelector(`[data-cardCount="${index}"]`)
        //    card.closest('div').remove();
    })
    */


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