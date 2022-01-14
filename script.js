// class Book {
//     constructor(title, author){
//         this.title = title
//         this.author = author
      
//     }
// }

//Success! We've managed to rewrite everything using constructor functions! 
//we only have a slight little error showing up on the console at our this.UI.this.deleteBook line,
//however, the error doesn't stop the code from running as expected. Still, we may want to look into it.
//I was sure we wouldn't be able to do this without looking anything up on the web, but we did it without any help!
//EDIT: Not even 2 minutes later, we immediately corrected our error, we just had to rewrite to: UI.deleteBook.
//It now works just as it used to when it was classes, but it's written with constructors! Great Success!
//LMAOOOOOOOOOOOOOOOO LLLLLMMMMMAAAAAOOOOOO WE HADN'T DELETED OUR PREVIOUS CODE. THE NEW CODE DOESN'T WORK AT ALL!

function Book(title,author){
    this.title = title;
    this.author = author;


this.UI = function(){
    this.displayBooks = function(){
        this.storedBooks = [
            { 
            title : 'Book one',
            author : 'John Doe',
        }
    ];
    this.books = this.storedBooks;
    this.books.forEach((bk) => this.UI.this.addBookToList(bk));
}
    this.addBookToList = function(book){
        this.list = document.querySelector('#book-list');
        this.row = document.createElement('tr');

        this.row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
        <label class="switch>
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        </td> 
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;
        this.list.appendChild(this.row);
    }
    this.deleteBook = function(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    this.clearFields = function(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#read').value = '';
    }
}
//Let's try 2 ways: One is putting everything here inside our constructor. The other is ending the constructor here
//and displaying the Books like so: document.addEventListener('DOMContentLoaded', Book.UI.displayBooks); Let's see:

    document.addEventListener('DOMContentLoaded', this.UI.displayBooks);
    document.querySelector('#book-form').addEventListener('submit', (e) =>{
        e.preventDefault();
        this.title = document.querySelector('#title').value;
        this.author = document.querySelector('#author').value;
        this.read = document.querySelector('#read').value;
        this.book = new Book(this.title,this.author,this.read);
        console.log(this.book);

        this.UI.this.addBookToList(book);
        this.UI.this.clearFields();
    });
    document.querySelector('#book-list').addEventListener('click',(e) =>{
        UI.deleteBook(e.target);
    })
}





//






//display Books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

//add a book
// document.querySelector('#book-form').addEventListener('submit', (e) => {

    // e.preventDefault();
    // const title = document.querySelector('#title').value; 
    // const author = document.querySelector('#author').value;
    // let read = document.querySelector('#read').value; 

    //instantiate book
    // const book = new Book(title,author,read);
    // console.log(book);

    //add book to UI
    // UI.addBookToList(book);

    //clear fields
    // UI.clearFields();
// });

//remove a book
// 
// document.querySelector('#book-list').addEventListener('click', (e) =>{
    // UI.deleteBook(e.target);
// })
// 
// 



//////////////////////////////////////////////////////



