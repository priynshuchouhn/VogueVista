import { createAction, props } from '@ngrx/store';
import { wishlist } from 'src/app/shared/model/product/wishlist.model';

export const addItemToWishlist = createAction('[Wishlist] Add Item', props<{ item: wishlist }>());
export const removeItemFromWishlist = createAction('[Wishlist] Remove Item', props<{ itemId: string }>());
