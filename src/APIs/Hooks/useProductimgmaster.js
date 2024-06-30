import { useEffect, useReducer } from "react";
import ProductimgMasterReducer from "../Reducers/ProductimgMasterReducer";
import { GetProductimgData } from "../Models/productimgmodel";

function useProductimgmaster() {
    const [productimgmasterstate, productimgmasterDispach] = useReducer(
    ProductimgMasterReducer,
        []
    );

    const fetchproductimg = async (data) => {
        try {
            let productimgdata = await GetProductimgData()
            // alert(JSON.stringify(productimgdata));
            if (productimgdata.code === 200) {
                productimgmasterDispach({
                    type: 'details',
                    data: productimgdata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchproductimg();

    }, [])

    return {
        productimgmasterstate,
    };

}

export default useProductimgmaster;

