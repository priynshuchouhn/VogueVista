import { createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/shared/model/product/cart.model";
import * as CartActions from './cart.actions';


export interface CartState {
    items : Cart[]
}

const initialState: CartState = {
    items : []
}

export const cartReducer = createReducer(
    initialState,
    on(CartActions.emptyCart, (state) => ({
      ...state,
      items: [],
    })),
    on(CartActions.loadCartItems, (state, { items }) => ({
      ...state,
      items: items,
    })),
    on(CartActions.addItemToCart, (state, { item }) => ({
      ...state,
      items: [...state.items, item],
    })),
    on(CartActions.removeItemFromCart, (state, { itemId }) => ({
      ...state,
      items: state.items.filter(item => item.cartId !== itemId),
    })),
    on(CartActions.updateCartItem, (state, { updatedItem }) => {
      const index = state.items.findIndex(item => item.cartId == updatedItem.cartId);
      if(index > -1){
        const updatedCart = [...state.items];
        updatedCart[index] = updatedItem
        return { ...state, items: updatedCart };
      }
      return state;
    })
  );