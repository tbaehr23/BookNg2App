import { Component } from '@angular/core';
import {BookListComponent} from './books/book-list.component';

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
  directives: [BookListComponent]
})
export class AppComponent {
  pageTitle: string = "Book Manager";
 }