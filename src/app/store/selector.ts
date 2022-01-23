import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Data } from 'src/app/store/reducer';

export const dataSelector = createFeatureSelector<Data>('data');

export const descriptionSelector = createSelector(dataSelector, (state) => state?.description);
export const showDescriptionSelector = createSelector(dataSelector, (state) => state?.showDescription);
