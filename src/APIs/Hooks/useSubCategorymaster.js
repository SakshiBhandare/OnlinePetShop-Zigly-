import { useEffect, useReducer } from "react";
import SubCategoryMasterReducer from "../Reducers/SubCategoryMasterReducer";
import { GetSubCategoryData } from "../Models/subcategorymodel";

function useSubCategorymaster() {
    const [subcategorymasterstate, subcategorymasterDispach] = useReducer(
        SubCategoryMasterReducer,
        []
    );

    const fetchsubcategory = async (data) => {
        try {
            let subcategorydata = await GetSubCategoryData(data)
            if (subcategorydata.code === 200) {
                // alert(JSON.stringify(categorydata));
                subcategorymasterDispach({
                    type: 'details',
                    data: subcategorydata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchsubcategory();

    }, [])

    return {
        subcategorymasterstate,
    };

}

export default useSubCategorymaster;

