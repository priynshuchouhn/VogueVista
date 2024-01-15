import { createAction, props } from '@ngrx/store';
import { Cart } from 'src/app/shared/model/product/cart.model';

export const loadCartItems = createAction('[Cart] Load Items', props<{ items: Cart[] }>());
export const addItemToCart = createAction('[Cart] Add Item', props<{ item: Cart }>());
export const removeItemFromCart = createAction('[Cart] Remove Item', props<{ itemId: string }>());
export const updateCartItem = createAction('[Cart] Update Item', props<{ updatedItem: Cart }>());
export const emptyCart = createAction('[Cart] Empty Cart');
