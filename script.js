// ==UserScript==
// @name         Wide Node-RED forum
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.1
// @homepageURL  https://github.com/HaroldPetersInskipp/Wide-Node-RED
// @supportURL   https://github.com/HaroldPetersInskipp/Wide-Node-RED/issues
// @description  Change Node-RED forum pages to be wide
// @author       Inskipp
// @copyright    2022+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/Wide-Node-RED/blob/main/LICENSE
// @match        *://discourse.nodered.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nodered.org
// @grant        none
// ==/UserScript==

var styleSheet = "" +
".wrap {" +
  "max-width: 96% !important;" +
"}" +
".container.posts {" +
	"grid-template-columns: 92% 8% !important;" +
"}" +
".topic-body {" +
	"width: 96% !important;" +
"}" +
"";

(function () {
    var s = document.createElement('style');
    s.type = "text/css";
    s.innerHTML = styleSheet;
    (document.head || document.documentElement).appendChild(s);
})();
