let myLibrary = [];

const contentWrapper = document.querySelector(".contentWrapper");

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
  }
  this.read = "No";
};

function addBookToLibrary(book) {
  book.title = document.querySelector("#title").value;
  book.author = document.querySelector("#author").value;
  book.pages = document.querySelector("#pages").value;
  book.read = document.querySelector("input[name=read]:checked").value;
  myLibrary.push(book);
}

//create card elements
function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  contentWrapper.appendChild(card);
  const cardInfo = [
    (title = document.createElement("p")),
    (author = document.createElement("p")),
    (pages = document.createElement("p")),
    (read = document.createElement("p")),
    (removeButton = document.createElement("button")),
    (changeRead = document.createElement("button")),
    (listItem = document.createElement("li")),
    (listItem2 = document.createElement("li")),
  ];
  removeButton.classList.add("removeButton");
  removeButton.textContent = "Remove";
  changeRead.classList.add("changeRead");
  changeRead.textContent = "Change Read?";
  read.classList.add("change");
  for (i = 0; i < cardInfo.length; i++) {
    card.appendChild(cardInfo[i]);
  }
  const list = document.createElement("ul");
  card.appendChild(list);
  listItem.appendChild(removeButton);
  listItem2.appendChild(changeRead);
  list.appendChild(listItem);
  list.appendChild(listItem2);
}

//displays entire library
function displayLibrary(library) {
  createCard();
  const cards = document.querySelectorAll(".card");
  library.forEach(function (book, index) {
    title.textContent = "Title: " + `${book.title}`;
    author.textContent = "Author: " + `${book.author}`;
    pages.textContent = "Pages: " + `${book.pages}`;
    read.textContent = "Read: " + `${book.read}`;
    cards[index].setAttribute("data-cardCount", index); //resets all the data-cardCount when one is deleted
  });
  addChangeReadStatus();
  addRemoveButtonFunction();
}

//adds function to all removeButtons
function addRemoveButtonFunction() {
  let removeButtons = document.querySelectorAll(".removeButton");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeCard);
  });
}

//uses closest to remove the closest parent (card) to the button
function removeCard() {
  this.closest(".card").remove();
  for (i = 0; i < myLibrary.length; i++) {
    if (!!document.querySelector(`[data-cardCount="${i}"]`) === false) {
      myLibrary.splice(i, 1);
    } else {
      continue;
    }
  }
}

function addChangeReadStatus() {
  const bookIndex = changeRead.closest(".card").getAttribute("data-cardCount");
  const change = document.querySelectorAll(".change");
  changeRead.addEventListener("click", () => {
    myLibrary[bookIndex].changeReadStatus();
    change[bookIndex].textContent = "Read: " + `${myLibrary[bookIndex].read}`;
  });
}

//Constraint Validation DOM

const form = document.querySelector("#popupForm");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");

titleInput.addEventListener("input", () => {
  titleInput.setCustomValidity("");
  titleInput.reportValidity();
});

titleInput.addEventListener("invalid", () => {
  if (titleInput.value === "") {
    titleInput.setCustomValidity("Please enter a title");
  }
});

pagesInput.addEventListener("input", () => {
  pagesInput.setCustomValidity("");
  pagesInput.checkValidity();
});

pagesInput.addEventListener("invalid", () => {
  if (pagesInput.value === "") {
    pagesInput.setCustomValidity("Please enter a page number");
  }
});



form.addEventListener("submit", (e) => {
  e.preventDefault(); //stops refreshing of page
  const bookObj = new Book();
  addBookToLibrary(bookObj);
  displayLibrary(myLibrary);
  form.reset();
});
