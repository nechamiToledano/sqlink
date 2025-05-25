import { AuthEffects } from '../auth/store/auth.effects';
import { UserEffects } from '../users/store/user.effects';

export const appEffects = [AuthEffects,UserEffects];
