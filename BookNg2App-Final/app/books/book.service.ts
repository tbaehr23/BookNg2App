import {Injectable} from '@angular/core';
import {IBook} from './book.entity';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BookService{


    constructor(private _http: Http){};
    
    getBooks(): Observable<IBook[]>{
        return this._http.get("api/books.json")
                    .map( (data: Response) => <IBook[]>data.json() );
    }
}