import { counterReducer } from './counter.reducer';

export interface AppState{
  counter: number;
}

export const REDUCERS = {
  counter: counterReducer
};
