import { Action } from '@ngrx/store';

import { AuthActions, SET_NO_USER, SET_NEW_USER, SET_CONFIRMED_USER } from './auth.actions';

export interface State {
  userExists: boolean;
  userIsConfirmed: boolean;
}

const initialState: State = {
  userExists: false,
  userIsConfirmed: false
};

export function authReducer(state: State, action: AuthActions) {
  switch (action.type) {
    case SET_NO_USER:
      return {
        userExists: false,
        userIsConfirmed: false
      };
    case SET_NEW_USER:
      return {
        userExists: true,
        userIsConfirmed: false
      };
    case SET_CONFIRMED_USER:
      return {
        userExists: true,
        userIsConfirmed: true
      };
    default: {
      return state;
    }
  }
}

export const getIsConfirmed = (state: State) => state.userIsConfirmed;
