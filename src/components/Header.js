import { Link } from "react-router-dom";


// Link tag is using anchor tag but it is not reloading the page, it is using the browser's history API to navigate to a new page.
// Instead, it intercepts the click event and uses the browser’s History API (pushState, replaceState) to change the URL and update the view without reloading the page.

// SPA --> Single Page Application
// SPA is a web application that does not require the user to reload the page to navigate to a new page.
// SPA is a web application that uses the browser's history API to navigate to a new page.

// 2 types of routing
// 1. Client Side Routing
// 2. Server Side Routing

// Client Side Routing --> React Router // no need to reload the page to navigate to a new page , no network request is made to the server
// Server Side Routing --> Node.js // need to reload the page to navigate to a new page , network request is made to the server



const Header = () => {
    return (

        <div className="header">
            <a href="/">
                <img className="burger-logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
            </a>
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
        </div>

    );
};

export default Header;