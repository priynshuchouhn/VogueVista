export class API {

    // ! ===================== Base URL ====================== !//
    
    public static BASE_URL = 'http://localhost:3000/api/';
    
    // ! ===================== Auth ====================== !//
    
    public static LOGIN = this.BASE_URL+ 'auth/login';
    public static REGISTER = this.BASE_URL+ 'auth/register';
    
    
    // ! ===================== Banner ====================== !//

    public static HOME_BANNER = this.BASE_URL+'banner/homePageBanner'
    public static HOME_PROMO_BANNER = this.BASE_URL+'banner/getHomePromotionalBanner'
}