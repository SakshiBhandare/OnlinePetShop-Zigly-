import { callAjax } from "../../MIS/Global";

export const GetMenuData = async (data) => {
    let ret = {};
    let url= "searchmenu";
    ret = await callAjax(url,data);
    return ret;
  }