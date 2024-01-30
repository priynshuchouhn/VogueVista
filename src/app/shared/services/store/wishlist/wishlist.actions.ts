import { createAction, props } from '@ngrx/store';
import { Wishlist } from 'src/app/shared/model/product/wishlist.model';

export const addItemToWishlist = createAction('[Wishlist] Add Item', props<{ item: Wishlist }>());
export const removeItemFromWishlist = createAction('[Wishlist] Remove Item', props<{ itemId: string }>());
export const loadWishlist = createAction('[Wishlist] load Wishlist', props<{lstWishlist: Wishlist[]}>());
export const emptyWishlist = createAction('[Wishlist] Empty Wishlist');
