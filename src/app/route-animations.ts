import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
        })
      ], {optional: true}),
      group([
        query(':enter', [
          animate('1000ms ease', keyframes([
            style({ transform: 'scale(0) '}),
            style({ transform: 'scale(0.5)' }),
            style({ transform: 'scale(1)'}),
          ])),
        ]),
        query(':leave', [
          animate('1000ms ease', keyframes([
            style({ transform: 'scale(1)'}),
            style({ transform: 'scale(3)'}),
            style({ opacity: 0, transform: 'scale(6)'}),
          ])),
        ])
      ]),
    ])
  ]);
