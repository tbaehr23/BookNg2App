import {Injectable} from '@angular/core'

@Injectable()
export class BookService{

    getBooks(): any[]{
        return [
            {
                id: 1,
                title: "book 1",
                year: 1990,
                price: 10.00,
                genre: "mystery"
            },
            {
                id: 2,
                title: "book 2",
                year: 1887,
                price: 25.00,
                genre: "history"
            }
        ];
    }
}