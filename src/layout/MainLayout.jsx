import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";


const MainLayout = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;