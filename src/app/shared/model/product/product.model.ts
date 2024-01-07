import { Category } from "./category.model";

export class Product {
    productId: string;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    categoryId: string;
    images: string[]
    sellerName: string;
    category?: Category;
    size?: Size[];
    shippingPolicy?: string;
    otherDetail?: string;
    returnRefundPolicy?: string
    disclaimer?: string

    constructor(productId: string, name: string, description: string, price: number, stockQuantity: number, categoryId: string, sellerName: string, images: string[], category?: Category, size?: Size[], shippingPolicy?: string, otherDetail?: string, returnRefundPolicy?: string, disclaimer?: string) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.categoryId = categoryId;
        this.sellerName = sellerName
        this.images = images
        this.category = category
        this.size = size
        this.shippingPolicy = shippingPolicy
        this.otherDetail = otherDetail
        this.returnRefundPolicy = returnRefundPolicy
        this.disclaimer = disclaimer
    }
}

export class Size {
    sizeName: string;
    price?: number;

    constructor(sizeName: string, price?: number) {
        this.sizeName = sizeName;
        this.price = price
    }

}