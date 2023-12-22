export class Order {
    orderId: number
    userId: number
    orderDate: Date
    shippingAddress: string
    totalAmount: number
    orderStatus: number

    constructor(orderId: number, userId: number, orderDate: Date, shippingAddress: string, totalAmount: number, orderStatus: number) {
        this.orderId = orderId
        this.userId = userId
        this.orderDate = orderDate
        this.shippingAddress = shippingAddress
        this.totalAmount = totalAmount
        this.orderStatus = orderStatus
    }
}