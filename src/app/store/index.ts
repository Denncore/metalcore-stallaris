import { ActionReducerMap } from '@ngrx/store';
import * as fromData from 'src/app/store/reducer';

export interface State {
  data: fromData.Data;
}

export const reducers: ActionReducerMap<State> = {
  data: fromData.dataReducer,
};
