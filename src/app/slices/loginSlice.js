import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "./loaderSlice";
import { callAjax } from "../../MIS/Global";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: {},
        loginValidation: false,
    },
    reducers: {
        setLogin (state, action) {
            state.login = {
                ...state.login,
                [action.payload.name]: action.payload.value,
              };
        },
        setLoginValidation (state, action) {
            state.loginValidation = action.payload;
        },
        setClearLogin (state, action) {
            state.login = action.payload;
        }

    },
});

export const { setLogin, setLoginValidation, setClearLogin } = loginSlice.actions;

export default loginSlice.reducer;

export const HandleLoginChange = (e, name) => {
    return async function ActionData(dispatch) {
        if (name === "msg") {
            dispatch(setLogin({ name: name, value: e }))
        }
    else if (e && e.target) {
        dispatch(setLogin({ name: e.target.name, value: e.target.value }))
    }
}
}

export const HandleLoginValidation = (data) => {
    return async function ActionData(dispatch) {
        dispatch(setLoginValidation(data))
}
}

export const HandleClearLogin = (data) => {
    return async function ActionData(dispatch) {
        dispatch(setClearLogin(data))
}
}

export const Getlogin = (data) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "signin";
        if (data?.uemail== "" || data?.uemail == undefined) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Please enter valid email" }))
            return
        } else if (data?.paswd == "" || data?.paswd == undefined) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Please enter valid password" }))
            return
        }
        try {
            dispatch(setLoader(true))
            ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
           if (ret?.data?.[0]?.dt==-2) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Invalid Email or Password" }))
           } else{
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Login Successful" }))
            dispatch(setLogin({ name: "islogin", value: true}))
            localStorage.setItem("loginid",  ret?.data?.[0]?.loginid)
           } 
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}

export const GetSignIn = (data, isverify) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "savelogin";
        
        if (data?.uname== "" || data?.uname == undefined) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Please enter valid username." }))
            dispatch(setLogin({ name: "sflag", value: false }))
            return
        } else if (data?.uemail== "" || data?.uemail == undefined) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Please enter valid email." }))
            dispatch(setLogin({ name: "sflag", value: false }))
            return
        } else if (data?.paswd == "" || data?.paswd == undefined) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Please enter valid password." }))
            dispatch(setLogin({ name: "sflag", value: false }))
            return
        } else if (data?.cpaswd !== data?.paswd ) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Password does not match." }))
            dispatch(setLogin({ name: "sflag", value: false }))
            return
        } else {
            if ( isverify === false ){
                dispatch(setLogin({ name: "sflag", value: true }))
                return
            }
        }
        try {
            dispatch(setLoader(true))
            if ( isverify === true ) {
                ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
           if (ret?.data?.[0]?.dt==-1) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Email already exists" }))
           } else {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Signup Successful" }))
           } 
            } 
            
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

    }
}

export const SendOtpEmail = (data) => {
    return async function ActionData(dispatch) {
        let ret = {};
        let url = "sendemail";
        
        try {
            dispatch(setLoader(true))
            
            ret = await callAjax(url, data);
            //  alert(JSON.stringify(ret?.data));
           if (ret?.code === 100) {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", value: "Invalid email" }))
           } else {
            dispatch(setLoginValidation(true))
            dispatch(setLogin({ name: "msg", 
            value: `Otp sent successfully to your registered email:${data?.emailid}
            `}))
           } 
            
            
            dispatch(setLoader(false))
        } catch (error) {
            dispatch(setLoader(false))
            return ret;
        }

}
}