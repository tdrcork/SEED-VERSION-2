import { Component, OnInit } from '@angular/core';
import { header } from '../../../content';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header = header;
  constructor() { }

  ngOnInit() {
  }

}
