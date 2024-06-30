import { callAjax } from "../../MIS/Global";

export const GetProductimgData = async (data) => {
    let ret = {};
    let url= "searchproductimg";
    ret = await callAjax(url,data);
    return ret;
  }