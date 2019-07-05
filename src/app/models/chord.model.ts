import { KeyCentre } from "../settings/state/settings.reducer";

export interface Chord {
    rootNote: string,
    quality: string,
    numeral: string,
    key?: KeyCentre,
    modeName?: string
}

export interface ChordSetter {
    numeral: string,
    key: KeyCentre
}