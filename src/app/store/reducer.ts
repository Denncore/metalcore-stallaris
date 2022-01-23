import { createReducer, on } from '@ngrx/store';
import { Description } from 'src/app/model';
import { HELP_DESCRIPTION } from 'src/app/data';
import * as DataActions from './actions';

export interface Data {
  description?: Description;
  showDescription?: boolean;
}


export const initialState: Data = {
  description: {...HELP_DESCRIPTION},
  showDescription: true
};

export const dataReducer = createReducer(
  initialState,

  on(DataActions.updateDescription, (state, action) => {
    return {...state, description: action.description, showDescription: true};
  }),

  on(DataActions.hideDescription, (state) => {
    return {...state, showDescription: false};
  })
);
