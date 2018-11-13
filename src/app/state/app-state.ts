import { HitMeState, HITME_FEATURE_KEY } from './hitme/hitme.reducer';

export interface ApplicationState {
    [HITME_FEATURE_KEY]: HitMeState
}