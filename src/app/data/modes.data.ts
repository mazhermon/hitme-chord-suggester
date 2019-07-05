import { Mode } from '../models/mode.model';

//qualities only, flats will be taken care of in scales
// since this is the case, these could just be generated from the ionian mode
export const MODES: Mode[] = [
    {
        name: 'ionian',
        scale: ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7(b5)']
    },
    {
        name: 'dorian',
        scale: ['min7', 'min7', 'maj7', '7', 'min7', 'min7(b5)', 'maj7']
    },
    {
        name: 'phrygian',
        scale: ['min7', 'maj7', '7', 'min7', 'min7(b5)', 'maj7', 'min7']
    },
    {
        name: 'lydian',
        scale: ['maj7', '7', 'min7', '#min7(b5)', 'maj7', 'min7', 'min7']
    },
    {
        name: 'mixolydian',
        scale: ['7', 'min7', 'min7(b5)', 'maj7', 'min7', 'min7', 'maj7']
    },
    {
        name: 'aolian',
        scale: ['min7', 'min7(b5)', 'maj7', 'min7', 'min7', 'maj7', '7']
    },
    {
        name: 'locrian',
        scale: ['min7(b5)', 'maj7', 'min7', 'min7', 'maj7', '7', 'min7']
    }
];

// back up with hard coded flats, - remove this when ready
// export const MODES: Mode[] = [
//     {
//         name: 'ionian',
//         scale: ['maj7','min7','min7','maj7','7','min7','min7(b5)']
//     },
//     {
//         name: 'dorian',
//         scale: ['min7','min7','bmaj7','7','min7','min7(b5)','bmaj7']
//     },
//     {
//         name: 'phrygian',
//         scale: ['min7','bmaj7','b7','min7','min7(b5)','bmaj7','bmin7']
//     },
//     {
//         name: 'lydian',
//         scale: ['maj7','7','min7','#min7(b5)','maj7','min7','min7']
//     },
//     {
//         name: 'mixolydian',
//         scale: ['7','min7','min7(b5)','maj7','min7','min7','bmaj7']
//     },
//     {
//         name: 'aolian',
//         scale: ['min7','min7(b5)','bmaj7','min7','min7','bmaj7','b7']
//     },
//     {
//         name: 'locrian',
//         scale: ['min7(b5)','bmaj7','bmin7','min7','bmaj7','b7','bmin7']
//     }
// ];