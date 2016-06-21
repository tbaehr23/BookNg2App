import {Component, OnInit} from '@angular/core'
import {BookService} from './book.service';

@Component({
    selector:"book-list",
    templateUrl:"app/books/book-list.component.html"
    
})
export class BookListComponent implements OnInit{
    pageTitle: string = "Book List";
    books: any[];
    

    constructor(private _bookService: BookService){}

    ngOnInit(): void{
        this.books = this._bookService.getBooks();
    }
}