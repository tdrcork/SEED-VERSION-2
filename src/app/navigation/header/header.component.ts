import { Component, OnInit } from '@angular/core';
import { header } from '../../../content';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/controller/auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header = header;
  isConfirmed$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
