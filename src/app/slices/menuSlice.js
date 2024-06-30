import { createSlice } from '@reduxjs/toolkit';
import { callAjax } from '../../MIS/Global';


const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
  },
  reducers: {
    addmenu(state, action) {
      state.menu = action.payload;
    },
  },
});

export const { addmenu } = menuSlice.actions;

export default menuSlice.reducer;

const uniqueArray = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

export const fetchmenuall = (data) => {
  return async function GetMenuData(dispatch) {
    let ret = {};
    let url = "searchmenu";
    try {
      ret = await callAjax(url, data);
      const distinctArray = uniqueArray(ret?.data);
      // alert(JSON.stringify(distinctArray));
      dispatch(addmenu(distinctArray));
    } catch (error) {
      return ret;
    }

  }
}



