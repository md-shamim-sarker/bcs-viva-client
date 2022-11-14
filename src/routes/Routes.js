import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Filter from "../pages/Filter/Filter";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/filter",
                element: <Filter></Filter>
            }
        ]
    }
]);

export default router;