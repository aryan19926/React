import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello JSX</h1>;

const Heading2 = () => {
    return (
        <h1>Hello JSX</h1>
    );
};

// component composition --> we can use a component inside another component
const HeadingComponent = () => {
    return (
        <div>
            {heading}
            {Heading2()}
            {/*{Heading2()} and <Heading2 /> are the same*/}
            <Heading2 />
            <h1>Hello JSX Functional</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

// React components --> 1. Functional 2. Class based