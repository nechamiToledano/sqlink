import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { authReducer } from '../auth/store/auth.reducer';
import { userReducer } from '../users/store/user.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  users: userReducer, 
};

