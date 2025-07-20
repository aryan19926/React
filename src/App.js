import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
// Named import
import * as Aryan from "./components/Footer";
import Body from "./components/Body"
import { IMAGE_URL } from "./components/config";




// Config driven UI

// AppLayout Component
// JSX can have only 1 parent element  <React.Fragment> </React.Fragment> is equivalent to <></>
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Aryan.Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

// React components --> 1. Functional 2. Class based