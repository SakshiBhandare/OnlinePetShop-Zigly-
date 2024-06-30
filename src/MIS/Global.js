import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

export const BASE_URL_Local_img = "http://localhost:4000/";
export const BASE_URL_SERVER_img = "https://spbackend.playspgames.com/";

export const BASE_URL_Local = "http://localhost:4000/api/";
export const BASE_URL_SERVER = "https://spbackend.playspgames.com/api/";


export const callAjax = async (url,data) => {
    try {  
      let BASE_URL=window.location.hostname==="localhost"?BASE_URL_Local:BASE_URL_SERVER;      
      const config = {
        method: "post",
        url: BASE_URL + url,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
   
    //   ReactDOM.render(<Loader />, document.getElementById("root1")); // Show Loader before API call
      const response = await axios(config);
    //   ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader after API call
      let ret;
      ret = { msg:"", code: 200, data: response.data.data };    
      return ret;
    } catch (error) {
    //   ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader on error
      return { msg: "something went wrong! please try again ", code: 500 };
    }
  };
  
  export const callAjax_File = async (url,data) => {
    try {
      let BASE_URL=window.location.hostname==="localhost"?BASE_URL_Local:BASE_URL_SERVER;
      const config = {
        method: "post",
        url: BASE_URL + url,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };
  
    //   ReactDOM.render(<Loader />, document.getElementById("root1")); // Show Loader before API call
      const response = await axios(config);
  
    //   ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader after API call
      let ret;
      ret = { msg:"", code: 200, data: response.data.data };    
      return ret;
    } catch (error) {
    //   ReactDOM.render(<Loader bal={false} />, document.getElementById("root1")); // Hide Loader on error
      return { msg: "something went wrong! please try again ", code: 500 };
    }
  };

  export const getimgurl = () => {
return window.location.hostname==="localhost"?BASE_URL_Local_img:BASE_URL_SERVER_img;      

  }