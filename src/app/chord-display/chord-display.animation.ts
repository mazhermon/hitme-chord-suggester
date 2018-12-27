import { trigger, stagger, style, transition, animate, query } from "@angular/animations";

export const chordAnimationTrigger = trigger('chordAnimate', [
    transition(':enter', [
        style({
            transform: 'scale(1.2)'
        }),
        animate('300ms ease-out')
    ]),
    transition(':leave', [
        animate('200ms cubic-bezier(0.5,-0.5,0.75,1)', style({
            transform: 'scale(0.2) rotate(-20deg) translate(-400px, -50px)',
            opacity: 0
        }))
    ])
]);