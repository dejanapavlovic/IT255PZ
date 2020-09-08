import { BookService } from './../services/book.service';
import { NavbarService } from './../../navbar/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

bookForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  image: new FormControl('', [Validators.required]),
  genre: new FormControl('', [Validators.required]),
  releaseYear: new FormControl('', [Validators.required]),
});

  constructor(
    private router: Router,
    private bookService: BookService,
    private navbarService: NavbarService
    ) { }

  ngOnInit() {
    this.navbarService.title.next('Add books');

  }

  addBook(){
    if (this.bookForm.valid){
      this.bookService.addBook(this.bookForm.value)
      .subscribe(res => {
          this.bookForm.reset();
          this.router.navigate(['/'])
      });
  }
}
}
