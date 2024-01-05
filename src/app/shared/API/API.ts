export class API {

    // ! ===================== Base URL ====================== !//
    
    public static BASE_URL = 'https://vogue-vista.onrender.com/api/';
    // public static BASE_URL = 'http://localhost:3000/api/';
    
    // ! ===================== Auth ====================== !//
    
    public static LOGIN = this.BASE_URL+ 'auth/login';
    public static REGISTER = this.BASE_URL+ 'auth/register';
    
    
    // ! ===================== Banner ====================== !//
    
    public static HOME_BANNER = this.BASE_URL+'banner/homePageBanner'
    public static HOME_PROMO_BANNER = this.BASE_URL+'banner/getHomePromotionalBanner'
    
    // ! ===================== Product ====================== !//
    public static CATEGORY_LIST = this.BASE_URL+'category/list'


    public static PRODUCT_LIST_BY_CATEGORY = this.BASE_URL+'product/listByCategory'
    public static PRODUCT_LIST = this.BASE_URL+'product/list'
    public static PRODUCT_DETAIL = this.BASE_URL+'product/detail'
    public static TRENDING_ARRIVALS = this.BASE_URL+'product/trendingArrivals'
    public static BEST_SELLER = this.BASE_URL+'product/bestSeller'
    public static POPULAR_PRODUCT = this.BASE_URL+'product/popular'
}