const myLibrary = [];
var bookCounter = 0;

function Book(title, author, pages, read, number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = number;
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
        dialog.close(); // Close the dialog after adding a book
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
    bookCounter += 1;
    const usersBook = new Book(titleInput, authorInput, pagesInput, readInput, number);
    myLibrary.push(usersBook);

    // Reset form
    document.forms['form'].reset();
    displayBooks();
}

function displayBooks() {
    if (myLibrary.length < 1) {
        return;
    }

    let tbody = document.querySelector('tbody');
    // Clear the table before re-populating it
    tbody.innerHTML = '';

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
        cell.appendChild(btn);
    }
}

//remove array object via its positon by using the position-number as data-attribute on dinamically created buttons
//I think it is allowed to assume that the array is empty at the start