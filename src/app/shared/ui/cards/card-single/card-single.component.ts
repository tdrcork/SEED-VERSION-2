import { serviceCards } from './../../../../../content';
import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss'],
})
export class CardSingleComponent implements OnInit {
  services = serviceCards.cards;

  constructor() { }

  ngOnInit() {
  }

}
