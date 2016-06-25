import { Component } from '@angular/core';
import {BookListComponent} from './books/book-list.component';
import {BookService} from './books/book.service';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx'; // loads all library features as javascript

@Component({
  selector: 'bm-app',
  template: `
  <div>
  <nav>
   <h1>{{pageTitle}}</h1>
  </nav>
  <div>
    <book-list></book-list>
  </div>
  </div>
  `,
  directives: [BookListComponent],
  providers: [BookService, HTTP_PROVIDERS]
})
export class AppComponent {
  pageTitle: string = "Book Manager";
 }