import { createReducer, on } from "@ngrx/store";
import * as WishlistActions from './wishlist.actions';
import { wishlist } from "src/app/shared/model/product/wishlist.model";


export interface WishlistState {
    items : wishlist[]
}

const initialState: WishlistState = {
    items : []
}

export const wishlistReducer = createReducer(
    initialState,
    on(WishlistActions.addItemToWishlist, (state, { item }) => ({
      ...state,
      items: [...state.items, item],
    })),
    on(WishlistActions.removeItemFromWishlist, (state, { itemId }) => ({
      ...state,
      items: state.items.filter(item => item.wishlistId !== itemId),
    }))
  );