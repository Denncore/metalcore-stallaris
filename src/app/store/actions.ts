import { createAction, props } from '@ngrx/store';
import { Description } from 'src/app/model';

export const updateDescription = createAction('[DATA] updateDescription', props<{ description: Description }>());
export const updateToDefaultDescription = createAction('[DATA] updateToDefaultDescription', props<{ urlPart: string }>());
export const hideDescription = createAction('[DATA] hideDescription');
