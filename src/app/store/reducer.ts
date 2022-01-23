import { createReducer, on } from '@ngrx/store';
import { Description } from 'src/app/model';
import { HELP_DESCRIPTION, METALCORE_DESCRIPTION, METALCORE_DESCRIPTION_2 } from 'src/app/data';
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

  on(DataActions.updateToDefaultDescription, (state, action) => {
    if (action.urlPart.indexOf('part-1') > -1) {
      return {...state, description: {...METALCORE_DESCRIPTION}, showDescription: true};
    } else if (action.urlPart.indexOf('part-2') > -1) {
      return {...state, description: {...METALCORE_DESCRIPTION_2}, showDescription: true};
    }
    return {...state, description: {}, showDescription: false};
  }),

  on(DataActions.hideDescription, (state) => {
    return {...state, showDescription: false};
  })
);
