import { Mode } from '../models/mode.model';

export const MODES: Mode[] = [
    {
        name: 'ionian',
        scale: ['maj7','min7','min7','maj7','7','min7','min7(b5)']
    },
    {
        name: 'dorian',
        scale: ['min7','min7','maj7','7','min7','min7(b5)','maj7']
    },
    {
        name: 'phrygian',
        scale: ['min7','maj7','7','min7','min7(b5)','maj7','min7']
    },
    {
        name: 'lydian',
        scale: ['maj7','7','min7','min7(b5)','maj7','min7','min7']
    },
    {
        name: 'mixolydian',
        scale: ['7','min7','min7(b5)','maj7','min7','min7','maj7']
    },
    {
        name: 'aolian',
        scale: ['min7','min7(b5)','maj7','min7','min7','maj7','7']
    },
    {
        name: 'locrian',
        scale: ['min7(b5)','maj7','min7','min7','maj7','7','min7']
    }
];