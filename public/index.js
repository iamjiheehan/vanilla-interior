import Home from "./js/pages/Home.js";
import Design from "./js/pages/Design.js";
import Board from "./js/pages/Board.js";
import Submit from "./js/pages/Submit.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    // console.log(pathToRegex("/design/:id"));
    const routes = [
        { path : "/", pages : Home},
        { path : "/design", pages : Design},
        { path : "/board", pages : Board},
        { path : "/submit", pages : Submit}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            result : location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
    if (!match) {
        match = {
            route : routes[0],
            result : [location.pathname]
        };
    }
    const pages = new match.route.pages(getParams(match));
    

    if (window.navigator.userAgentData && window.navigator.userAgentData.brands.length > 0) {
        const browserName = window.navigator.userAgentData.brands[0].brand;
        const version = parseInt(window.navigator.userAgentData.brands[0].version, 10);
        if (browserName === "Chrome" && version >= 101) {
            console.log("Chrome 101 or later detected. Use navigator.userAgentData instead of navigator.userAgent, navigator.appVersion, and navigator.platform.");
        }
    }

    document.querySelector("#app").innerHTML = await pages.getHTML();
    await pages.executeScript();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
