import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { asyncScheduler, catchError, Observable, scheduled } from 'rxjs';
import { Book } from '../interfaces/book.interface';

@Injectable({providedIn: 'root'})
export class BookService {

    private URLBase = environment.apiUrl;

    constructor(private _http:HttpClient) { }
    
    getBooks():Observable<Book[]>{
      return this._http.get<Book[]>(`${this.URLBase}/api/books`)
    }

    getBookById(id: Number): Observable<Book | undefined> {
      return this._http
        .get<Book>(`${this.URLBase}/api/books/${id}`)
        .pipe(catchError((_) => scheduled([undefined], asyncScheduler)));
    }

    addBook(book: Book): Observable<Book> {
      return this._http.post<Book>(`${this.URLBase}/api/books`, book);
    }

    updateBook(id: number, book: Partial<Book>): Observable<unknown> {
      return this._http.put(`${this.URLBase}/api/books/${id}`, book);
    }

    deleteBook(id: number): Observable<unknown> {
      return this._http.delete(`${this.URLBase}/api/books/${id}`);
    }
}