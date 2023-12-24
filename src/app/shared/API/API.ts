export class API {

    // ! ===================== Base URL ====================== !//
    
    public static BASE_URL = 'http://localhost:3000';
    
    // ! ===================== Auth ====================== !//

    public static LOGIN = this.BASE_URL+ '/api/auth/login';
    public static REGISTER = this.BASE_URL+ '/api/auth/register';
}