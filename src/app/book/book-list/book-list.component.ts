import { NavbarService } from './../../navbar/services/navbar.service';
import { Book } from './../models/book.model';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-50px)'}),
          stagger(
            '50ms',
            animate('500ms ease-in',
            style({ opacity: 1, transform: 'translateY(0px)'})
            )
          )
        ], 
        {optional: true},
        ),
        query(
          ':leave',
          [
            animate('500ms', style({opacity: 0, transform: 'rotate(90deg)'}))],
          {
            optional: true,
          },
        ),
      ])
    ]),
  ],
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  loadingBooks: Array<Number>;

  constructor(private bookService: BookService, private navbarService: NavbarService) { }

  ngOnInit() {

    this.loadingBooks = new Array(10).fill(0)
    .map((n, index) => index);

    this.books$ = this.bookService.getBooksFromHttp();
    this.navbarService.title.next('bookstore');
  }

}
