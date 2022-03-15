import "./src/styles/global.css"

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
    console.log("new pathname", location.pathname);
    console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}