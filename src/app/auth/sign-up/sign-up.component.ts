import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../controller/auth.service';
import { UIService } from '../../shared/ui/ui.service';
import * as fromRoot from '../../app.reducer';
import AuthClass from 'aws-amplify/lib/Auth/Auth';

@Component({
  selector: 'app-signup',
  providers: [  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isLoading$: Observable<boolean>;
  username: string;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser(
      form.value.username,
      form.value.email,
      form.value.password);
  }
}
