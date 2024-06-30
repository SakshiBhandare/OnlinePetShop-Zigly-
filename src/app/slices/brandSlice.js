import { createSlice } from '@reduxjs/toolkit';
import { callAjax } from '../../MIS/Global';


const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    brand: [],
  },
  reducers: {
    addbrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export const { addbrand } = brandSlice.actions;

export default brandSlice.reducer;

const uniqueArray = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

export const fetchbrandall = (data) => {
  return async function GetBrandData(dispatch) {
    let ret = {};
    let url = "searchbrand";
    try {
      ret = await callAjax(url, data);
      const distinctArray = uniqueArray(ret?.data);
      // alert(JSON.stringify(distinctArray));
      dispatch(addbrand(distinctArray));
    } catch (error) {
      return ret;
    }

  }
}



