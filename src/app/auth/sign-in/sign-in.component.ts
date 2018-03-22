import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from '../controller/auth.service';
import { UIService } from '../../shared/ui/ui.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoading$: Observable<boolean>;
  @ViewChild('loginForm') form: NgForm;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  onSubmit() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.authService.login(username, password);
  }
}
