import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { footer } from '../../../content';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer = footer;
  constructor() { }

  ngOnInit() {
  }

}
