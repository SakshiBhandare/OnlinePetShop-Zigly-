import { useEffect, useReducer } from "react";
import MenuMasterReducer from "../Reducers/MenuMasterReducer";
import { GetMenuData } from "../Models/menumodel";

function useMenumaster() {
    const [menustate, menuDispach] = useReducer(
        MenuMasterReducer,
        []
    );

    const fetchmenu = async (data) => {
        try {
            let menudata = await GetMenuData(data)
            if (menudata.code === 200) {
                // alert(JSON.stringify(categorydata));
                menuDispach({
                    type: 'details',
                    data: menudata?.data
                });
            }
        }
        catch (e) {
                alert("Something went wrong")
            }
    };
    useEffect(() => {
        fetchmenu();

    }, [])

    return {
        menustate,
    };

}

export default useMenumaster;

