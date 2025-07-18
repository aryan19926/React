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
*/

import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", {
    id: "heading", // these are called props
}, "Hello Parcel");
const heading2 = React.createElement("h2", {}, "hey2");
const container = React.createElement("div", {}, [heading, heading2]);
const root = createRoot(document.getElementById('root'));
root.render(container); 