"use strict";

var _Home = _interopRequireDefault(require("./js/pages/Home.js"));
var _Design = _interopRequireDefault(require("./js/pages/Design.js"));
var _Board = _interopRequireDefault(require("./js/pages/Board.js"));
var _Submit = _interopRequireDefault(require("./js/pages/Submit.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
};
const router = async () => {
  // console.log(pathToRegex("/design/:id"));
  const routes = [{
    path: "/",
    pages: _Home.default
  }, {
    path: "/design",
    pages: _Design.default
  }, {
    path: "/board",
    pages: _Board.default
  }, {
    path: "/submit",
    pages: _Submit.default
  }];
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }
  const pages = new match.route.pages(getParams(match));
  document.querySelector("#app").innerHTML = await pages.getHTML();
  await pages.executeScript();
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});