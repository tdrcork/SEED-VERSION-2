import { Action } from '@ngrx/store';

export const SET_NO_USER = '[Auth] No User Exists';
export const SET_NEW_USER = '[Auth] User is unconfirmed';
export const SET_CONFIRMED_USER = '[Auth] User is Confirmed';

export class SetNoUser implements Action {
  readonly type = SET_NO_USER;
}

export class SetNewUser implements Action {
  readonly type = SET_NEW_USER;
}

export class SetConfirmedUser implements Action {
  readonly type = SET_CONFIRMED_USER;
}

export type AuthActions = SetNoUser | SetNewUser | SetConfirmedUser;
