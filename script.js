const myLibrary = [];
var bookCounter = 0;

function Book(title, author, pages, read, number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = number;
}

Book.prototype.isRead = function() {
    if (this.read === "read") {
        this.read = "Not read"
    }
    this.read = "read"
}

function buttons() {
    const dialog = document.getElementById('dialog');
    const addBookButton = document.getElementById('addBook');

    addBookButton.addEventListener("click", () => {
        dialog.showModal();
    });

    const submitButton = document.getElementById('submitForm');
    submitButton.addEventListener("click", () => {
        addBookToLibrary();
        dialog.close();
    });
}

buttons();

function addBookToLibrary() {
    const form = document.forms['form'];
    let authorInput = form.author.value;
    let titleInput = form.title.value;
    let pagesInput = form.pages.value;
    let readInput = form.status.value;
    let number = bookCounter;
    //Give every book a unique number to identify it
    bookCounter += 1;
    const usersBook = new Book(titleInput, authorInput, pagesInput, readInput, number);
    myLibrary.push(usersBook);

    // Reset form
    document.forms['form'].reset();
    displayBooks();
}

function displayBooks() {

    let tbody = document.querySelector('tbody');
    // Clear the table before re-populating it
    tbody.innerHTML = '';

    if (myLibrary.length < 1) {
        return;
    }

    for (let book of myLibrary) {
        let row = tbody.insertRow();
        for (let key in book) {
            if (key === "number") {
                continue;
            }
            if (book.hasOwnProperty(key)) {
                let cell = row.insertCell();
                cell.appendChild(document.createTextNode(book[key]));
            }
        }
        let cell = row.insertCell();
        var btn = document.createElement('button')
        btn.className = "btn";
        btn.innerText = "Delete";
        btn.setAttribute('data-book-number', book.number);
        cell.appendChild(btn);
    }
    deleteBook();
}

function deleteBook() {
    const deleteBtns = document.querySelectorAll('.btn');
    deleteBtns.forEach((button) => 
        button.addEventListener('click', () => {
        let n = button.getAttribute('data-book-number');
        n = parseInt(n);
        let position = myLibrary.findIndex(obj => obj.number === n);
        myLibrary.splice(position, 1);
        displayBooks();
    }));
}