import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import ErrorMessage from "./components/ErrorMessage";
import RestaurantMenu from "./components/RestaurantMenu";

const AppComponents = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponents />,
        children:[
            {
                path: "/help",
                element: <Help />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement : <ErrorMessage />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);