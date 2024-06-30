import { callAjax } from "../../MIS/Global";

export const GetCategoryData = async (data) => {
    let ret = {};
    let url= "searchcatg";
    ret = await callAjax(url,data);
    return ret;
  }