import { createSlice } from '@reduxjs/toolkit';
import { callAjax } from '../../MIS/Global';


const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banner: [],
  },
  reducers: {
    addbanner(state, action) {
      state.banner = action.payload;
    },
  },
});

export const { addbanner } = bannerSlice.actions;

export default bannerSlice.reducer;

const uniqueArray = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

export const fetchbannerall = (data) => {
  return async function GetBannerData(dispatch) {
    let ret = {};
    let url = "searchbanner";
    try {
      ret = await callAjax(url, data);
      const distinctArray = uniqueArray(ret?.data);
      // alert(JSON.stringify(distinctArray));
      dispatch(addbanner(distinctArray));
    } catch (error) {
      return ret;
    }

  }
}



