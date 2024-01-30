import { Product } from "./product.model";

export class Wishlist {
    wishlistId: String
    userId: string;
    product: Product

    constructor(wishlistId: String, userId:string, product: Product){
        this.wishlistId = wishlistId
        this.userId = userId
        this.product = product
    }
}