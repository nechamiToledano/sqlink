import { AuthState } from "../auth/store/auth.reducer"
import { UserState } from "../users/store/user.reducer"

export interface AppState {
  auth: AuthState
  users: UserState
}