import { ApplicationState } from "../app-state";

export namespace HitMeSelectors {
    export const getUserChords = (state:ApplicationState) => state.hitme.userChords;
}