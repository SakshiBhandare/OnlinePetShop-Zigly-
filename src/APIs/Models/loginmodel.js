import { callAjax } from "../../MIS/Global";

export const GetLoginData = async (data) => {
    let ret = {};
    let url= "searchlogin";
    ret = await callAjax(url,data);
    return ret;
  }