import { trigger, style, transition, animate, query, group } from "@angular/animations";

export const chordAnimationTrigger = trigger('chordAnimate', [
    transition(':enter', [
        group([
            query(':self', [
                style({
                    transform: 'scale(1.1) translateY(-40px)',
                    opacity: '0.5'
                }),
                animate('200ms ease-out')
            ]),
            query('.hm-chord-display__numeral', [
                style({
                    transform: 'scale(0.5) translateY(60px)',
                    opacity: '0.5'
                }),
                animate('200ms 20ms ease-out')
            ])
        ])
    ])
]);