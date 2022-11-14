import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import AddQuestions from "../pages/AddQuestions/AddQuestions";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Filter from "../pages/Filter/Filter";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyQuestions from "../pages/MyQuestions/MyQuestions";
import Registration from "../pages/Registration/Registration";

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
            },
            {
                path: "/my-questions",
                element: <MyQuestions></MyQuestions>
            },
            {
                path: "/add-questions",
                element: <AddQuestions></AddQuestions>
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Registration></Registration>
    },
]);

export default router;