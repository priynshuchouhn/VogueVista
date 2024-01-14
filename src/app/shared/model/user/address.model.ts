export class Address {
    addressId: string
    userId: string
    name: string
    phone: number
    addressLine1: string
    addressLine2?: string
    city: string
    state: string
    pincode: number
    isDefault: boolean
addressType: string

    constructor(
        addressId: string,
        userId: string,
        addressType: string,
        name: string,
        phone: number,
        addressLine1: string,
        city: string,
        state: string,
        pincode: number,
        isDefault: boolean,
        addressLine2?: string,
    ) {
        this.addressId = addressId
        this.userId = userId
        this.addressType = addressType
        this.name = name
        this.phone = phone
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
        this.city = city
        this.state = state
        this.pincode = pincode
        this.isDefault = isDefault
    }
}