import { createReducer, on } from '@ngrx/store';
import { Description } from 'src/app/model';
import { CHAPTER_DESCRIPTION } from 'src/app/data';
import * as DataActions from './actions';

export interface Data {
  description?: Description
  showDescription?: boolean;
}


export const initialState: Data = {
  description: {
    title: CHAPTER_DESCRIPTION.title,
    text: CHAPTER_DESCRIPTION.description,
    isHelpText: CHAPTER_DESCRIPTION.isHelpPage
  },
  showDescription: true
};

export const dataReducer = createReducer(
  initialState,

  on(DataActions.updateDescription, (state, action) => {
    return { ...state, description: action.description, showDescription: true};
  }),

  on(DataActions.hideDescription, (state) => {
    return { ...state, showDescription: false};
  })
);
