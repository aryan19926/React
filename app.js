import React from "react";
import ReactDOM from "react-dom/client";


// Header Component
const Header = () => {
    return (
        <a href="/">
            <div className="header">
                <img className="burger-logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </a>
    );
};
//Body Component
const Body = () => {
    return (
        <h1>Body</h1>
    );
};

//Footer Component
const Footer = () => {
    return (
        <h1>Footer</h1>
    );
};

// AppLayout Component
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

// React components --> 1. Functional 2. Class based