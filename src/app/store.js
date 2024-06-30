import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice';
import  productsReducer from '../app/slices/productSlice';
import categoryReducer from '../app/slices/categorySlice';
import bannerReducer from '../app/slices/bannerSlice';
import menuReducer from '../app/slices/menuSlice';
import loaderReducer from '../app/slices/loaderSlice';
import subcategoryReducer from '../app/slices/subcategorySlice';
import loginReducer from '../app/slices/loginSlice';
import wishlistReducer from '../app/slices/wishlistSlice';
import brandReducer from '../app/slices/brandSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productsReducer,
    category: categoryReducer,
    banner: bannerReducer,
    menu: menuReducer,
    loader: loaderReducer,
    subcategory: subcategoryReducer,
    login: loginReducer,
    wishlist: wishlistReducer,
    brands: brandReducer,
  },
});