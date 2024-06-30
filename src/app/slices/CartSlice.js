import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "./loaderSlice";
import { callAjax } from "../../MIS/Global";
import { setMinMax, setProduct, setProductorg } from "./productSlice";
import { HandleLoginChange, HandleLoginValidation } from "./loginSlice";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        setCart(state, action) {
            state.cart = action.payload;
        },
        
    },

});

export const { setCart } = CartSlice.actions;

export default CartSlice.reducer;

export const SaveProductCart = (data) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "savecart";

        try {
            dispatch(setLoader(true))
            ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
            if (ret.data[0]?.dt > 0) {
                dispatch(HandleLoginValidation(true));
                dispatch(HandleLoginChange("Product added to cart successfully ", "msg"))
            } 
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}

export const DeleteProductCart = (data) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "delcart";

        try {
            dispatch(setLoader(true))
            ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
            if (ret.data?.[0]?.dt > 0) {
                dispatch(HandleLoginValidation(true));
                dispatch(GetProductCart({loginid: data?.loginid}))
                dispatch(HandleLoginChange("Product deleted from cart successfully ", "msg"))
            } else {
                dispatch(HandleLoginValidation(true));
                dispatch(HandleLoginChange("Something went wrong", "msg"))
            }
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}

export const GetProductCart = (data) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "getcart";

        try {
            dispatch(setLoader(true))
            ret = await callAjax(url, data);
            dispatch(setCart(ret.data));
            //  alert(JSON.stringify(ret?.data));
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}