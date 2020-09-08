import { NavbarService } from './services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title$ = this.NavbarService.title;

  constructor(private NavbarService: NavbarService, private roter: Router) { }

  ngOnInit() {
  }

}
