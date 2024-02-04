import { Product } from "./product.model";

export class Wishlist {
    wishlistId: string
    userId: string;
    product: Product

    constructor(wishlistId: string, userId:string, product: Product){
        this.wishlistId = wishlistId
        this.userId = userId
        this.product = product
    }
}