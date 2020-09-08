import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Book,books } from './../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private ROOT_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  addBook(book: Book) {
    return this.http.post(this.ROOT_URL, book);
  }

  getBooksFromHttp(){
    return this.http.get<Book[]>(this.ROOT_URL)
    .pipe(this.addDelay);
  }

  bookFromHttp(id: number){
    return this.http.get<Book>(`${this.ROOT_URL}/${id}`);
  }

  getBooks(){
    return of(books);
  }

  book(id: number) {
    return of(
      books.find(book => +book.id === +id)); 
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000))
  }

}
