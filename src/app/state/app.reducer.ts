import * as fromAppState from './app.state';
import * as appActions from './app.actions';

export function reducer(state = fromAppState.initialShellState, action): fromAppState.ShellState {
    switch (action.type) {
        case appActions.AppActionTypes.ToggleSideBar:
            return {
                ...state,
                sideBarIsOpen: !state.sideBarIsOpen
            }

        default:
            return state
    }
}