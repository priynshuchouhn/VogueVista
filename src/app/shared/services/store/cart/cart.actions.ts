import { createAction, props } from '@ngrx/store';
import { Cart } from 'src/app/shared/model/product/cart.model';

export const addItemToCart = createAction('[Cart] Add Item', props<{ item: Cart }>());
export const removeItemFromCart = createAction('[Cart] Remove Item', props<{ itemId: string }>());
