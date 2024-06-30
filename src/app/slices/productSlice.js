import { createSlice } from "@reduxjs/toolkit";
import { callAjax } from "../../MIS/Global";
import { setLoader } from "./loaderSlice";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        productall: [],
        productallorg: [],
        minmaxprice: { min: "0", max: "0" },
    },
    reducers: {
        setProduct: (state, action) => {
            state.productall = action.payload;
        },
        setProductorg: (state, action) => {
            state.productallorg = action.payload;
        },
        setMinMax: (state, action) => {
            state.minmaxprice = action.payload;
        }
    },
});

export const { setProduct, setMinMax, setProductorg } = productSlice.actions;

export default productSlice.reducer;

const uniqueArray = (array) => {
    return array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
};

//Function for Filter
export const RelFilter = (data, istype, whrdata = {}) => {
    let x = data;
    return function Action(dispatch) {
        if (istype === 0) {
            x = data.slice().sort((a, b) => parseInt(b.fprice) - parseInt(a.fprice));
        } else if (istype === 1) {
            // alert(JSON.stringify(data));
            x = data.slice().sort((a, b) => parseInt(b.fprice) - parseInt(a.fprice));
            // alert(JSON.stringify(x));
        } else if (istype === 2) {
            x = data.slice().sort((a, b) => parseInt(a.fprice) - parseInt(b.fprice));
        } else if (istype === 3) {
            // alert()
            x = data.filter(item => {
                return parseInt(item.fprice) >= parseInt(whrdata.min);
            });
            x = x.slice().sort((a, b) => parseInt(a.fprice) - parseInt(b.fprice));
            // x = data.slice().sort((a, b) => parseInt(b.fprice) - parseInt(a.fprice));
            // alert(data)
        }

        dispatch(setProduct(x))
    };
};



//Function for Calculating Price in ViewProduct
export const calprice = (data, varientprice, qty) => {
    return async function ActionData(dispatch) {
        let productprice = Number(varientprice?.mrp) * Number(qty);
        let calcdiscount = Number(productprice) * (Number(varientprice?.pdiscount) / 100);
        let calcfprice = Number(productprice) - Number(calcdiscount);
        const updatearray = [...data];
        updatearray[0] = { ...data[0], mrp: varientprice?.mrp, pdiscount: varientprice?.pdiscount, fprice: Number(calcfprice).toFixed(2) };
        // alert(JSON.stringify(updatearray));
        dispatch(setProduct(updatearray))
    }
}


//Function to Fetch all the Products from API
export const fetchproductall = (data) => {

    return async function GetProductData(dispatch) {

        let ret = {};
        let url = "getimgproductproduct";
        try {
            dispatch(setLoader(true))
            ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
            dispatch(setProduct(ret?.data));
            dispatch(setProductorg(ret?.data));
            const min = ret.data.reduce((min, { minimum: minValue }) => Math.min(min, minValue), Infinity);
            const max = ret.data.reduce((max, { maximum: maxValue }) => Math.max(max, maxValue), -Infinity);
            dispatch(setMinMax({ min: min, max: max }))
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}


