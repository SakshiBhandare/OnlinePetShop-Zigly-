import { callAjax } from "../../MIS/Global";

export const GetSubCategoryData = async (data) => {
    let ret = {};
    let url= "searchsubcatg";
    ret = await callAjax(url,data);
    return ret;
  }