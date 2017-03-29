import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('0.3s ease-in'),
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
      })),
    ]),
  ]);
  
export const slideInLeftAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      animate('0.3s ease-in'),
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)',
      })),
    ]),
  ]);

export const slideInRightAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      }),
      animate('0.3s ease-in'),
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateX(-100%)',
      })),
    ]),
  ]);

export const slideInDownAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)',
      }),
      animate('0.3s ease-in'),
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)',
      })),
    ]),
  ]);
  
export function SlideInBottomAnimation(duration: number = 150): AnimationTriggerMetadata {
  return trigger('slideInBottom', [
    state('0', style({
      opacity: '0',
      display: 'none',
    })),
    state('1',  style({
      opacity: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}

export function FadeInOutAnimation(duration: number = 150): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    state('0', style({
      opacity: '0',
      display: 'none',
    })),
    state('1',  style({
      opacity: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}
