import { createSlice } from '@reduxjs/toolkit';
import { callAjax } from '../../MIS/Global';


const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;

// Selectors (optional)
export const selectAllCategories = state => state.category.categories;

const uniqueArray = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

export const fetchcategoryall = (data) => {
  return async function GetCategoryData(dispatch) {
    let ret = {};
    let url = "searchcatg";
    try {
      ret = await callAjax(url, data);
      const distinctArray = uniqueArray(ret?.data);
      // alert(JSON.stringify(distinctArray));
      dispatch(addCategory(distinctArray));
    } catch (error) {
      return ret;
    }

  }
}



