import { animate, query, style, transition, trigger } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('Welcome => PartOne', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0
        })
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease-in',
          style({
            opacity: 1
          }))
      ], {optional: true})
    ]),
    transition('PartOne => PartTwo', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
          transform: 'scale(0)'
        })
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease-in',
          style({
            opacity: 1,
            transform: 'scale(1)'
          }))
      ], {optional: true})
    ])
  ]);
