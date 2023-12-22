export class Product {
    productId: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    categoryId: number;

    constructor(productId: number, name: string, description: string, price: number, stockQuantity: number, categoryId: number) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.categoryId = categoryId;
    }
}