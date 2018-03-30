import { CardSingleComponent } from './../card-single/card-single.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { serviceCards } from './../../../../../content';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  services = serviceCards.cards;

  constructor() { }

  ngOnInit() {
  }

}
