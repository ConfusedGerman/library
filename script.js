const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(form) {
    let authorInput = form.author.value;
    let titleInput = form.title.value;
    let pagesInput = form.pages.value;
    let readInput = form.status.value;
    const usersBook = new Book(authorInput, titleInput, pagesInput, readInput);
    myLibrary.push(usersBook);
    displayBooks();
    //TODO: readInput value is always "on"
}

function displayBooks () {
    if (myLibrary.length < 1) {
        return;
    }
    
    let tbody = document.querySelector('tbody');
    // Clear the table before re-populating it
    tbody.innerHTML = '';

    for (let book of myLibrary) {
        let row = tbody.insertRow();
        for (let key in book) {
            if (book.hasOwnProperty(key)) {
                let cell = row.insertCell();
                cell.appendChild(document.createTextNode(book[key]));
            }
        }
    }
}