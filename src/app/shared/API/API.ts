import { environment } from "src/environments/environment";
export class API {

    // ! ===================== Base URL ====================== !//
    
    public static BASE_URL = environment.API_URL;
    
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
    
    // ! ===================== Cart ====================== !//
    public static ADD_TO_CART = this.BASE_URL+'cart/addToCart'
    public static REMOVE_TO_CART = this.BASE_URL+'cart/delete'
    public static CART_LIST = this.BASE_URL+'cart/list'
    public static UPDATE_CART = this.BASE_URL+'cart/update'
    
    
    // ! ===================== Payment ====================== !//
    public static CREATE_PAYMENT_INTENT = this.BASE_URL+'payment/createPaymentIntent'
    
    // ! ===================== Address ====================== !//
    public static GET_ADDRESSES = this.BASE_URL+'address/getAddress';
    public static ADD_ADDRESS = this.BASE_URL+'address/add';


    // ! ===================== order ====================== !//
    public static GET_ORDER = this.BASE_URL+'order/getOrders'
    public static Add_ORDER = this.BASE_URL+'order/add'
}