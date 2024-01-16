export class MenuItems{
    menuItemId: number
    menuItemTitle: string
    path?: string
    children?: MenuItems[]
    constructor(
        menuItemId: number,
        menuItemTitle: string,
        children?: MenuItems[],
        path?: string,
    ){
        this.menuItemId = menuItemId,
        this.menuItemTitle = menuItemTitle
        this.children = children
        this.path = path
    }
}