import { callAjax } from "../../MIS/Global";

export const GetBannerData = async (data) => {
    let ret = {};
    let url= "searchbanner";
    ret = await callAjax(url,data);
    return ret;
  }