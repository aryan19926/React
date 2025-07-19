/*

*BUNDLERS examples:
* webpack
* vite
* parcel
* rollup 
* esbuild

* parcel provides --
* Hot module Replacement (HMR) --> it is a feature that allows you to reload the page without refreshing the page
* File watching algorithm --> changes in the file are detected and the file is re-bundled
* npx parcel index.html --> it will start the server and watch for changes in the file, creates a developement build 
* npx parcel build index.html --> it will create a production build and minify the code
* BUNDLING --> it is the process of combining multiple files into a single file
* MINIFICATION --> it is the process of removing the comments and white spaces from the code
* Image optimization --> it is the process of optimizing the images in the code
* Caching while developement
* POLYFILLING --> it is the process of converting the code to a compatible version of the code for older browsers
* HTTPS in dev --> it is a feature that allows you to use HTTPS in the development server (npx parcel index.html --https)
* Zero config
* babel --> it is a tool that converts the code to a compatible version of the codew
*/

import React from "react";
import { createRoot } from "react-dom/client";


// React.createElement(tag, props, children) returns a object which is then converted to a virtual DOM by react

const heading = React.createElement("h1", {
    key: "heading1", // these are called props
}, "Hello Parcel");
const heading2 = React.createElement("h2", {
    key: "heading2",
}, "hey2");
const container = React.createElement("div", {
    key: "container",
}, [heading, heading2]);
const root = createRoot(document.getElementById('root'));
root.render(container);

// JSX --> it is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files.
// babel is a compiler for JavaScript
// babel converts the JSX to a React.createElement call
const heading3 = <h1>Hello JSX</h1>;
const heading4 = (<h1>
    Hello JSX
</h1>);



// Reconciliation in React is the process by which React efficiently updates the User Interface (UI) to reflect changes in a component's state or props. Instead of directly manipulating the actual DOM for every change, which is a performance-intensive operation, React employs a virtual DOM and a diffing algorithm to optimize this process.
// Here's how reconciliation works:
// Virtual DOM:
// React maintains a lightweight, in-memory representation of the actual DOM known as the Virtual DOM. When a component's state or props change, React creates a new Virtual DOM tree representing the updated UI. 
// Diffing Algorithm:
// React then compares this new Virtual DOM tree with the previous one using a "diffing" algorithm. This algorithm efficiently identifies the minimal set of changes required to update the UI. It essentially determines what has been added, removed, or modified between the two Virtual DOM trees.
// Batching Updates:
// Once the differences are identified, React batches these updates together. This means that instead of applying each individual change to the real DOM immediately, React groups them and applies them in a single, optimized operation. This minimizes direct DOM manipulations, which are costly in terms of performance. 
// Applying to Real DOM:
// Finally, React applies these batched updates to the actual browser DOM. This ensures that only the necessary parts of the UI are re-rendered, leading to a more efficient and performant application.
