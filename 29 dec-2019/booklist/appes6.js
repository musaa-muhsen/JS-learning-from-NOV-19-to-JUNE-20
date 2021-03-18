
//book class
class Book {
    constructor(titleP, authorP, isbnP) {
        this.titleT = titleP;
        this.authorT = authorP;
        this.isbnT = isbnP; 
    }
}

//UI class mostly methods  ====================================================
class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        //create tr element 
        const row = document.createElement('tr');
        // Insert cols // book parameter is used to point out this keyword for each one 
        row.innerHTML = `
        <td>${book.titleT}</td> 
        <td>${book.authorT}</td> 
        <td>${book.isbnT}</td> 
        <td><a href="#" class="delete">X</a></td> 
        `;
    
        list.appendChild(row);
    }

    showAlert(messageP, classNameP) {

        // 1) create div 
    const div = document.createElement('div');

    // 2) add classes 
    div.className = `alert ${classNameP}`;

    // 3) add text 
    div.appendChild(document.createTextNode(messageP));

    // 4) get parent 
    const container = document.querySelector('.container');

    // 5) get form 
    const form = document.querySelector('#book-form');

    // 6) insert alert 
    container.insertBefore(div, form);

    // 7) time out after 3 sec 
    setTimeout( function() {
        document.querySelector('.alert').remove();
    }, 3000);

    }

    deleteBook(target) {

        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}

// Local Storage Class

class Store {
    static getBooks() {
         
    }

    static displayBooks() {

    }

    static addBook() {

    }

    static removeBook() {

    }
}





//Event Listeners for add book =================================================
document.getElementById('book-form').addEventListener('submit',
function(e) {
//get form values 
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value
     
// Instantiate book
const book = new Book(title, author, isbn);

//Instantiate UI, which is still empty 
const ui = new UI();

//validate 
if (title === '' || author === '' || isbn === '') {
   ui.showAlert('Please fill in all fields!' , 'error')
} else {

// Add book to list 
ui.addBookToList(book);

//clear fields 
ui.clearFields();

//show success 
ui.showAlert('Book Added!' , 'success');
   
}

e.preventDefault();
});

// Event Listener for deletation of the list ============================================
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate UI again because its a blueprint that can be used many different ways in this case its a method
    const ui = new UI();

    // Delete book 
    ui.deleteBook(e.target);

    // show message 
    ui.showAlert('Book Removed!', 'success');


    e.preventDefault();
});