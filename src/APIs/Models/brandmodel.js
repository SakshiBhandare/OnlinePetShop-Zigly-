import { callAjax } from "../../MIS/Global";

export const GetBrandData = async (data) => {
    let ret = {};
    let url= "searchbrand";
    ret = await callAjax(url,data);
    return ret;
  }