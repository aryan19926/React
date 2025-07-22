// bundlers --> webpack, vite, parcel

// "devDependencies": {
//     "parcel": "^2.15.4"  
// }

// ~version “Approximately equivalent to version”, 
// will automatically update you to all future patch versions that are backwards-compatible, 
// without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

// ^version “Compatible with version”, 
// will automatically update you to all future minor/patch versions that are backwards-compatible, 
// without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.  

// package.json is a file that contains the dependencies and scripts for a project.
// package-lock.json is a file that contains the exact version of the dependencies that are installed in the node_modules folder.


// CORS --> Cross-Origin Resource Sharing
// CORS is a security feature that allows or restricts resources on a web page to be requested from another domain outside the domain from which the resource originated.
// cors is mechanism that uses additional HTTP headers to tell the browser to let a web application running at one origin have permission to access selected resources from a server at a different origin.
// preflight request --> a request that is sent by the browser to the server to check if the server allows the request to be made.
// options call and preflight call are the same. 
// additonal headers are sent in the preflight request to check if the server allows the request to be made.
// if the server allows the request, the preflight request is sent and the actual request is sent.
// if the server does not allow the request, the preflight request is not sent and the actual request is not sent.
// header --> Access-Control-Allow-Origin: *
// Access-Control-Allow-Origin: * means that the server allows the request to be made from any domain.
// Access-Control-Allow-Origin: http://localhost:3000 means that the server allows the request to be made from the specified domain.
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS --> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS means that the server allows the request to be made from the specified methods.
