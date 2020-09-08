import { NavbarService } from './../../navbar/services/navbar.service';
import { books } from './../models/book.model';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BookService } from './../services/book.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  id: number;
  book: Book;
  bookSub$: Subscription;


  constructor
  (private bookService: BookService, 
  private navbarService: NavbarService,
  private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.bookSub$ = this.bookService
    .bookFromHttp(this.id)
    .subscribe(book => {
        this.book = book;
        this.navbarService.title.next(book.name);
      });
  }
  ngOnDestroy(): void {
    this.bookSub$.unsubscribe();
  }

}
