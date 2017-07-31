import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, INCREMENTTEN, DECREMENTTEN, RESET } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor( private store: Store<AppState>) {
    this.counter = store.select<number>((state: AppState)=>{
      return state.counter;
    });

  }

  increment(increment){
    this.store.dispatch({ type: INCREMENT });
  }

  incrementTen(){
    this.store.dispatch({ type: INCREMENTTEN });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  decrementTen(){
    this.store.dispatch({ type: DECREMENTTEN });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }


}
