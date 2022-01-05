class Book {
    constructor(title, author, read){
        this.title = title
        this.author = author
        this.read = read
    }
}

class UI {
    static displayBooks(){
        const StoredBooks = [
            {
            title: 'Book one',
            author: 'John DOe',
            read: 'read',
        }
    ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        let list = document.querySelector('#book-list');

        let row = document.createElement('tr');

        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.read}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>

        `;

        list.appendChild(row);
        
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#read').value = '';
    }
}

//display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();
    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value;
    let read = document.querySelector('#read').value; 

    //instantiate book
    const book = new Book(title,author,read);
    console.log(book);

    //add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFields();
});

//remove a book

document.querySelector('#book-list').addEventListener('click', (e) =>{
    UI.deleteBook(e.target);
})

//we want to create a toggle for read/unread, do we append this to each new object? 
//I think we append it to the table, just like we did with the close button 

//toggle 