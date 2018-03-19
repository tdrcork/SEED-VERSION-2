import { Component, OnInit } from '@angular/core';
import { header } from '../../../environments/environment';
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
