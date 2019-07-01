import { KeyCentre } from '../settings/state/settings.reducer';

//might want to only put the major keys in and generate the minor keys from those
// or could use another lib to generate all of these some day
export const KEYS: KeyCentre[] = [
    {
        name: 'C',
        quality: 'maj',
        scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    },
    {
        name: 'C',
        quality: 'min',
        scale: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
    },
    {
        name: 'Db',
        quality: 'maj',
        scale: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']
    },
    {
        name: 'Db',
        quality: 'min',
        scale: ['Db', 'Eb', 'E', 'Gb', 'Ab', 'A', 'B']
    },
    {
        name: 'D',
        quality: 'maj',
        scale: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']
    },
    {
        name: 'D',
        quality: 'min',
        scale: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C']
    },
    {
        name: 'Eb',
        quality: 'maj',
        scale: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
    },
    {
        name: 'Eb',
        quality: 'min',
        scale: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'B', 'Db']
    },
    {
        name: 'E',
        quality: 'maj',
        scale: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']
    },
    {
        name: 'E',
        quality: 'min',
        scale: ['E', 'F#', 'G', 'A', 'B', 'C', 'D']
    },
    {
        name: 'F',
        quality: 'maj',
        scale: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E']
    },
    {
        name: 'F',
        quality: 'min',
        scale: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb']
    },
    {
        name: 'G',
        quality: 'maj',
        scale: ['G', 'A', 'B', 'C', 'D', 'E', 'F#']
    },
    {
        name: 'G',
        quality: 'min',
        scale: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F']
    },
    {
        name: 'Bb',
        quality: 'maj',
        scale: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
    },
    {
        name: 'Bb',
        quality: 'min',
        scale: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab']
    },
];