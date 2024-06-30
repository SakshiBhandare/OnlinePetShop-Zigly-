import { createSlice } from '@reduxjs/toolkit';
import { callAjax } from '../../MIS/Global';

const subcategorySlice = createSlice ({
    name: "subcategory",
    initialState: {
        subcategories: [],
    },
    reducers: {
        addsubCategory(state, action){
            state.subcategories = action.payload;
        },
    },
});

export const { addsubCategory } = subcategorySlice.actions;

export  default subcategorySlice.reducer;

const uniqueArray = (array) => {
    return array.filter((item, index) => {
      return array.indexOf(item) === index;
    });
  };

//Function to fetch SubCategory data from API
export const fetchsubcategoryall = (data) => {
    return async function GetSubCategoryData(dispatch) {
      let ret = {};
      let url = "searchsubcatg";
      try {
        ret = await callAjax(url, data);
        const distinctArray = uniqueArray(ret?.data);
        // alert(JSON.stringify(distinctArray));
        dispatch(addsubCategory(distinctArray));
      } catch (error) {
        return ret;
      }
  
    }
  }