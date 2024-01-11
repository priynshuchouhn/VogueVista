import { Product } from "./product.model"

export class Cart {
    cartId: string
    userId: string
    productId: string
    quantity: number
    sizeVariant?: string
    product?: Product

    constructor(cartId: string,  userId: string,  productId: string, quantity: number ,sizeVariant?: string,
        product?: Product,) {
        this.cartId = cartId
        this.userId = userId
        this.productId = productId
        this.quantity = quantity

    }
}