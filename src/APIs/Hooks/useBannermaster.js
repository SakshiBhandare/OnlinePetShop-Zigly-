import { useEffect, useReducer } from "react";
import BannerMasterReducer from "../Reducers/BannerMasterReducer";
import { GetBannerData } from "../Models/bannermodel";

function useBannermaster() {
    const [bannermasterstate, bannermasterDispach] = useReducer(
        BannerMasterReducer,
        []
    );

    const fetchbanner = async (data) => {
        try {
            let bannerdata = await GetBannerData(data)
            if (bannerdata.code === 200) {
                // alert(JSON.stringify(categorydata));
                bannermasterDispach({
                    type: 'details',
                    data: bannerdata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchbanner();

    }, [])

    return {
        bannermasterstate,
    };

}

export default useBannermaster;

