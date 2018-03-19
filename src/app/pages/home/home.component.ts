import { Component, OnInit } from '@angular/core';
import { contact, home } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content = home;
  cards = home.cards;
  constructor() { }

  ngOnInit() {
  }
}
