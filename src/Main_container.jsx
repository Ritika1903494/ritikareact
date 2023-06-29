import Nabvar_prod from "./Nabvar_prod.jsx";
import NavBars from './NavBars.jsx';
import { Outlet } from "react-router-dom";

function Main_container(){

    return(
        <>
        <NavBars/>
        {/* <Nabvar_prod/> */}
        <Outlet/>
        </>
    )
}

export default Main_container;