import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WishlistState } from "./wishlist.reducer";


export const selectWishlistState = createFeatureSelector<WishlistState>('wishlist');


export const selectWishlistItems = createSelector(selectWishlistState, (state: WishlistState) => state.items);
export const selectWishlistItemsLength = createSelector(selectWishlistState, (state: WishlistState) => state.items ? state.items.length : 0);