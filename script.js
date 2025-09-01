// ==UserScript==
// @name         Wide Node-RED forum
// @namespace    https://github.com/HaroldPetersInskipp/
// @version      0.1.2
// @homepageURL  https://github.com/HaroldPetersInskipp/Wide-Node-RED
// @supportURL   https://github.com/HaroldPetersInskipp/Wide-Node-RED/issues
// @downloadURL  https://gist.github.com/HaroldPetersInskipp/8374a6ea6f3bb3f72517e9b4f0f941c6/raw/wide-node-red.user.js
// @updateURL    https://gist.github.com/HaroldPetersInskipp/8374a6ea6f3bb3f72517e9b4f0f941c6/raw/wide-node-red.user.js
// @description  Change Node-RED forum pages to be wide
// @author       Inskipp
// @copyright    2024+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/Wide-Node-RED/blob/main/LICENSE
// @match        *://discourse.nodered.org/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nodered.org
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
