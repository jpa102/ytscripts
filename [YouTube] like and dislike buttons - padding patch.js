// ==UserScript==
// @name         [YouTube] like and dislike buttons - padding patch
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  simple patch to make the like and dislike buttons look "symmetrical" to each other, this is noticeable when you use the Return YouTube Dislike addon
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @connect      youtube.com
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

var waitTimeMs = 3000; // default wait time is 3 seconds (in milliseconds)

/*
	style
*/

(typeof GM_addStyle != "undefined"
	? GM_addStyle
	: (styles) => {
		let styleNode = document.createElement("style");
		styleNode.type = "text/css";
		styleNode.innerText = styles;
		document.head.appendChild(styleNode);
	})(`
		.like-and-dislike-padding-patch {
			padding-left: 20px !important;
		}
`);

/*
	MAIN
*/

setTimeout(function(){
	document.querySelector("like-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // like button
	document.querySelector("dislike-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // dislike button
}, waitTimeMs);
