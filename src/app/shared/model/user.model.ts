export class User {
    userId?: number;
    username: string
    email: string
    mobileNo: number
    token?: string



    constructor(id: number, username: string, email:string, moobileNo: number, token: string){
        this.userId = id;
        this.username = username;
        this.email = email
        this.mobileNo = moobileNo
        this.token = token
    }
    
}