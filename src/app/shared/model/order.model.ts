import { Product } from "./product/product.model"
import { Address } from "./user/address.model"

export class Order {
    orderId: number
    userId: number
    orderNumber: string
    orderDate: Date
    shippingAddress: Address
    totalAmount: number
    orderStatus: number
    paymentId: string
    paymentMethod : string
    products: ProductDetail[]
    discount?: number
    shippingCharges?: number

    constructor(orderId: number, userId: number,orderNumber: string, orderDate: Date, shippingAddress: Address, totalAmount: number, orderStatus: number,  paymentId: string, paymentMethod : string, products: ProductDetail[], discount?: number, shippingCharges?: number) {
        this.orderId = orderId
        this.userId = userId
        this.orderNumber = orderNumber
        this.orderDate = orderDate
        this.shippingAddress = shippingAddress
        this.totalAmount = totalAmount
        this.orderStatus = orderStatus
        this.paymentId = paymentId
        this.paymentMethod = paymentMethod
        this.products = products
        this.discount = discount
        this.shippingCharges = shippingCharges
    }
}


export class ProductDetail {
    constructor(public productId:String,public product:Product, public quantity: number, public sizeVariant?: string){}
}