import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
    return (
        <>
            <MainHeader />

            {/* outlet is where all of the child routes are rendered */}
            <Outlet />
        </>
    );
};

export default RootLayout;