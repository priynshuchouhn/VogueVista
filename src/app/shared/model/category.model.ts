export class Category {
    categoryId: number
    name: string
    description: string

    constructor(categoryId: number, name: string, description: string) {
        this.categoryId = categoryId
        this.name = name
        this.description = description
    }
}