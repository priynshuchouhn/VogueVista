import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";


export const selectCartState = createFeatureSelector<CartState>('cart');


export const selectCartItems = createSelector(selectCartState, (state: CartState) => state.items);
export const selectCartItemsLength = createSelector(selectCartState, (state: CartState) => state.items ? state.items.length : 0);
export const selectCartItemById = (productId: string, sizeName:string) => createSelector( selectCartItems, (cartItems) => cartItems.find((item) => item.productId == productId && item.sizeVariant == sizeName));
export const selectCartTotal = createSelector(  selectCartItems, items => items.reduce((total, item) => total + item.product!.price*item.quantity, 0));