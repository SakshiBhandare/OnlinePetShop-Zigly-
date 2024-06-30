import { useEffect, useReducer } from "react";
import ProductMasterReducer from "../Reducers/ProductMasterReducer";
import { GetImgproductData, GetProductData } from "../Models/productmodel";

function useProductmaster() {
    const [productmasterstate, productmasterDispach] = useReducer(
    ProductMasterReducer,
        []
    );

    const fetchproduct = async (data) => {
        try {
            let productdata = await GetProductData()
            // alert(JSON.stringify(productdata));
            if (productdata.code === 200) {
                productmasterDispach({
                    type: 'details',
                    data: productdata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchproduct();

    }, [])

    const fetchimgproduct = async (data) => {
        try {
            let productdata = await GetImgproductData()
            // alert(JSON.stringify(productdata));
            if (productdata.code === 200) {
                productmasterDispach({
                    type: 'details',
                    data: productdata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    
    useEffect(() => {
        fetchimgproduct();
    
    }, [])

    return {
        productmasterstate,
    };

}

export default useProductmaster;

