import { LoadBooksAction } from './book.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookService } from './../services/book.service';
import { map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as types from './action.types';
import * as bookActions from './book.actions';

import { Observable } from 'rxjs';


export class BookEffects {
  constructor(private service: BookService, private actions$: Actions) {}

  @Effect() loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.LoadBooksAction>(types.LOAD_BOOKS),
    mergeMap(() =>
      this.service.getAllBooks().pipe(map(books => new bookActions.LoadBooksSuccessAction(books)))
    )
  );
}
