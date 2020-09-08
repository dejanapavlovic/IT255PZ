import { ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';



@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookComponent, AddBookComponent],
  imports: [
    CommonModule, BookRoutingModule, ReactiveFormsModule
  ]
})
export class BookModule { }
