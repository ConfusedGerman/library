const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }


}
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet.');

function addBookToLibrary(form) {
    var authorInput = form.author.value;
    var titleinput = form.title.value;
    var pagesInput = form.pages.value;
    var readInput = form.status.value;
    const usersBook = new book(authorInput, titleinput, pagesInput, readInput);
    myLibrary.push(usersBook);
    //TODO: readInput value is always "on"
}

function displayBooks (myLibrary) {
    if (myLibrary.length < 1) {
        return;
    }
    else {
        
    }
}