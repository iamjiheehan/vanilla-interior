import Home from "./pages/Home.js";
import Design from "./pages/Design.js";
import Board from "./pages/Board.js";
import Submit from "./pages/Submit.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    
    const routes = [
        { path : "/", pages : Home},
        { path : "/design", pages : Design},
        { path : "/board", pages : Board},
        { path : "/submit", pages : Submit},

    ];

    const potentialMatches = routes.map( route => {
        return {
            route : route,
            isMatch : location.pathname === route.path
        };
    });

    let match = potentialMatches.find( potentialMatch => potentialMatch.isMatch );
    
    if (!match) {
        match = {
            route : routes[0],
            isMatch : true
        };
    }
    const pages = new match.route.pages();
    
    
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
