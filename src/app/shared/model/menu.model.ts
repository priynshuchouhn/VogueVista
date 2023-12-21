export class MenuItems{
    menuItemId: number
    menuItemTitle: string
    children?: MenuItems[]
    constructor(
        menuItemId: number,
        menuItemTitle: string,
        children?: MenuItems[]
    ){
        this.menuItemId = menuItemId,
        this.menuItemTitle = menuItemTitle
        this.children = children
    }
}