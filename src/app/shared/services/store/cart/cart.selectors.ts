import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";


export const selectCartState = createFeatureSelector<CartState>('cart');


export const selectCartItems = createSelector(selectCartState, (state: CartState) => state.items);
export const selectCartItemsLength = createSelector(selectCartState, (state: CartState) => state.items ? state.items.length : 0);