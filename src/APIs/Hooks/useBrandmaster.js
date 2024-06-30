import { useEffect, useReducer } from "react";
import BrandMasterReducer from "../Reducers/BrandMasterReducer";
import { GetBrandData } from "../Models/brandmodel";

function useBrandmaster() {
    const [brandmasterstate, brandmasterDispach] = useReducer(
        BrandMasterReducer,
        []
    );

    const fetchbrand = async (data) => {
        try {
            let branddata = await GetBrandData(data)
            if (branddata.code === 200) {
                // alert(JSON.stringify(branddata));
                brandmasterDispach({
                    type: 'details',
                    data: branddata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchbrand();

    }, [])

    return {
        brandmasterstate,
    };

}

export default useBrandmaster;

