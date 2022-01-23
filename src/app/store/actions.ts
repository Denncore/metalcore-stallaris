import { createAction, props } from '@ngrx/store';
import { Description } from 'src/app/model';

export const updateDescription = createAction('[DATA] updateDescription', props<{ description: Description }>());
export const hideDescription = createAction('[DATA] hideDescription');
