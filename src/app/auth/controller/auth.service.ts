/* Base Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* My Files/Modules/Services */
import { environment, cognitoCredentials } from '../../../environments/environment';
import { UIService } from '../../shared/ui/ui.service';
import { MatSnackBar } from '@angular/material';
import * as fromRoot from '../../app.reducer';
import * as UI from '../../shared/ui/ui.actions';
import * as userState from './auth.actions';

/* Special */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import Amplify, { Auth } from 'aws-amplify';
import { SET_NO_USER, SET_NEW_USER, SET_CONFIRMED_USER } from './auth.actions';

@Injectable()
export class AuthService {

  constructor(
    private router:  Router,
    private uiService: UIService,
    private store: Store<fromRoot.State>,
  ) { Amplify.configure(cognitoCredentials); }

  registerUser(username: string, password: string, email: string) {
    this.store.dispatch(new UI.StartLoading());
    Auth.signUp({
      username,
      password,
      attributes: {
        email
      },
      validationData: []
    })
    .then(data => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new userState.SetNewUser());
      this.uiService.showSnackbar(data.message, null, 5000);
      // user must be confirmed through email before they are confirmed in AWS
      this.router.navigate(['/confirm']);
    })
    .catch(err => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(err.message, null, 5000);
    });
  }

  confirmNewUser(username: string, code: string) {
    this.store.dispatch(new UI.StartLoading());
    Auth.confirmSignUp(username, code)
    .then(data => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new userState.SetConfirmedUser());
      this.uiService.showSnackbar(data.message, null, 5000);
    })
    .catch(err => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(err.message, null, 5000);
    });
  }

  login(username: string, password: string) {
    this.store.dispatch(new UI.StartLoading());
    Auth.signIn(username, password)
    .then(data => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new userState.SetConfirmedUser());
      this.uiService.showSnackbar(data.message, null, 5000);
    })
    .catch(err => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(err.message, null, 5000);
    });
  }

  logout() {
    this.store.dispatch(new UI.StartLoading());
    Auth.signOut()
    .then(data => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new userState.SetNoUser());
      this.uiService.showSnackbar('You have Logged Out', null, 5000);
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new userState.SetNoUser());
      this.uiService.showSnackbar(err.message, null, 5000);
    });
  }

  setState() { // broken
    Auth.currentSession()
    .then(session => {
      this.store.dispatch(new userState.SetNewUser());
      Auth.currentAuthenticatedUser()
      .then(data => {
        this.store.dispatch(new userState.SetConfirmedUser());
      })
      .catch(err => {
        this.router.navigate(['/confirm']);
      });
    })
    .catch(err => this.store.dispatch(new userState.SetNoUser()));
  }
  
/*
  sendResetPasswordEmail(username: string) {
    Auth.forgotPassword(username)
      .then(data => this.uiService.showSnackbar(data, null, 5000))
      .catch(err => this.uiService.showSnackbar(err, null, 5000));
  }

  resetPasswordSubmit(username, code, newPassword) {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(data => this.uiService.showSnackbar(data, null, 5000))
      .catch(err => this.uiService.showSnackbar(err, null, 5000));
  }

  setNewPassword(user, oldPassword, newPassword) {
    Auth.forgotPasswordSubmit(user, oldPassword, newPassword)
    .then(data => this.uiService.showSnackbar(data, null, 5000))
    .catch(err => this.uiService.showSnackbar(err, null, 5000));
  }

  getSessionTokens() {
    return Auth.currentSession();
  }
 */
}
