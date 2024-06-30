import { callAjax } from "../../MIS/Global";

export const GetProductData = async (data) => {
    let ret = {};
    let url= "getproductimgproduct";
    ret = await callAjax(url,data);
    return ret;
  }

  export const GetImgproductData = async (data) => {
    let ret = {};
    let url= "getimgproductproduct";
    ret = await callAjax(url,data);
    return ret;
  }