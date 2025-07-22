import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
// Named import
import * as Aryan from "./components/Footer";
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


// Config driven UI
// AppLayout Component
// JSX can have only 1 parent element  <React.Fragment> </React.Fragment> is equivalent to <></>
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            {/* <Body /> */}
            <Aryan.Footer />
        </React.Fragment>
    );
};



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// React components --> 1. Functional 2. Class based