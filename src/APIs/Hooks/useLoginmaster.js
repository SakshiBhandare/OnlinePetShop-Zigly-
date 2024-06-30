import { useEffect, useReducer } from "react";
import LoginMasterReducer from "../Reducers/LoginMasterReducer";
import { GetLoginData } from "../Models/loginmodel";

function useLoginmaster() {
    const [loginmasterstate, loginmasterDispach] = useReducer(
        LoginMasterReducer,
        []
    );

    const fetchlogin = async (data) => {
        try {
            let logindata = await GetLoginData(data)
            if (logindata.code === 200) {
                // alert(JSON.stringify(logindata));
                loginmasterDispach({
                    type: 'details',
                    data: logindata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchlogin();

    }, [])

    return {
        loginmasterstate,
    };

}

export default useLoginmaster;

