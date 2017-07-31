import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTTEN = 'INCREMENTTEN';
export const DECREMENTTEN = 'DECREMENTTEN';
export const RESET = 'RESET';

export function counterReducer( state:number = 0, action: Action):number {
  switch(action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case INCREMENTTEN:
        return state + 10;

    case DECREMENTTEN:
        return state - 10;
        
    case RESET:
      return 0;

    default:
      return state;
  }
}
