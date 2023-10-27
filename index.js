import Home from "./public/pages/Home.js";
import Design from "./public/pages/Design.js";
import Board from "./public/pages/Board.js";
import Submit from "./public/pages/Submit.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
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
