import { createReducer, on } from "@ngrx/store";
import * as WishlistActions from './wishlist.actions';
import { Wishlist } from "src/app/shared/model/product/wishlist.model";


export interface WishlistState {
    items : Wishlist[]
}

const initialState: WishlistState = {
    items : []
}

export const wishlistReducer = createReducer(
    initialState,
    on(WishlistActions.loadWishlist, (state, { lstWishlist }) => ({
      ...state,
      items: lstWishlist,
    })),
    on(WishlistActions.emptyWishlist, (state) => ({
      ...state,
      items: [],
    })),
    on(WishlistActions.addItemToWishlist, (state, { item }) => ({
      ...state,
      items: [...state.items, item],
    })),
    on(WishlistActions.removeItemFromWishlist, (state, { itemId }) => ({
      ...state,
      items: state.items.filter(item => item.wishlistId !== itemId),
    }))
  );
