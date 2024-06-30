import { useEffect, useReducer } from "react";
import CategoryMasterReducer from "../Reducers/CategoryMasterReducer";
import { GetCategoryData } from "../Models/categorymodel";

function useCategorymaster() {
    const [categorymasterstate, categorymasterDispach] = useReducer(
        CategoryMasterReducer,
        []
    );

    const fetchcategory = async (data) => {
        try {
            let categorydata = await GetCategoryData(data)
            if (categorydata.code === 200) {
                // alert(JSON.stringify(categorydata));
                categorymasterDispach({
                    type: 'details',
                    data: categorydata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchcategory();

    }, [])

    return {
        categorymasterstate,
    };

}

export default useCategorymaster;

