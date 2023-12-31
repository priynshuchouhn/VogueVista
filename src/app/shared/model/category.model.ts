export class Category {
    categoryId: number
    name: string
    description: string
    children? : Category[]

    constructor(categoryId: number, name: string, description: string, children? : Category[]) {
        this.categoryId = categoryId
        this.name = name
        this.description = description
        this.children = children
    }
}