import {Component, OnInit} from '@angular/core'
import {BookService} from './book.service';
import {IBook} from './book.entity'

@Component({
    selector:"book-list",
    templateUrl:"app/books/book-list.component.html"
    
})
export class BookListComponent implements OnInit{
    pageTitle: string = "Book List";
    books: IBook[];
    

    constructor(private _bookService: BookService){}

    ngOnInit(): void{
        this.books = this._bookService.getBooks();
    }
}