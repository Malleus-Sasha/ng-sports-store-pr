import { animate, group, state, style, transition, trigger } from "@angular/animations";

const commonStyle = {
  border: '4px solid black',
  color: 'white',
}
export const HighlightTrigger = trigger('rowHighlight', [
  state("selected", style([commonStyle, {
    backgroundColor: 'lightgreen',
    fontSize: '20px',
  }])),
  state('notselected', style([commonStyle, {
    backgroundColor: 'lightsalmon',
    fontSize: '12px',
  }])),
  state('*', style({
    border: '2px solid black',
  })),
  state('void', style({
    opacity: 0,
    transform: 'translateX(-50%)',
  })),
  // transition('selected => notselected', animate('200ms')),
  // transition('notselected => selected', animate('400ms')),
  transition('* => notselected', animate('200ms')),
  transition('* => selected', [animate('400ms 200ms ease-in',
    style({
      backgroundColor: 'lightblue',
      fontSize: '25px',
    })),
    // animate('250ms', style({
    //   backgroundColor: 'lightcoral',
    //   fontSize: '30px',
    // })),
    group([
      animate("250ms", style({
          backgroundColor: "lightcoral",
      })),
      animate("450ms", style({
          fontSize: "30px"
      })),
    ]),
    animate('200ms')
  ]), 
  // 'void => *' :enter; '* => void' :leave
  transition('void => *', animate('500ms')),
]);
