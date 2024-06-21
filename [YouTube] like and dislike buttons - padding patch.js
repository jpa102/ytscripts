// ==UserScript==
// @name         [YouTube] like and dislike buttons - padding patch
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  simple patch to make the like and dislike buttons look "symmetrical" to each other, this is noticeable when you use the Return YouTube Dislike addon
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @connect      youtube.com
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

var waitTimeMs = 3000; // default wait time is 3 seconds (in milliseconds)
var ReturnYouTubeDislikeCompatibility = false; // make this userscript compatible with Return YouTube Dislike - Extension / UserScript verrsions

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

var likebuttonpx;
var dislikebuttonpx;
var newratiobarpx;

setTimeout(function(){
	document.querySelector("like-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // like button
	document.querySelector("dislike-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // dislike button
}, waitTimeMs);

if (ReturnYouTubeDislikeCompatibility == true) {
	setTimeout(function(){
		// check if the ratio bar from "Return YouTube Dislike - Extension" exists in the HTML
		if (document.querySelector(".ryd-tooltip.ryd-tooltip-new-design") != null) {
			likebuttonpx = document.querySelector("like-button-view-model").clientWidth;
			dislikebuttonpx = document.querySelector("dislike-button-view-model").clientWidth;
			newratiobarpx = likebuttonpx + dislikebuttonpx;
			
			document.querySelector(".ryd-tooltip.ryd-tooltip-new-design").style = "width: " + newratiobarpx + "px";
		}
		
		// check if the ratio bar from "Return YouTube Dislike - UserScript" exists in the HTML
		if (document.querySelector(".ryd-tooltip") != null) {
			likebuttonpx = document.querySelector("like-button-view-model").clientWidth;
			dislikebuttonpx = document.querySelector("dislike-button-view-model").clientWidth;
			newratiobarpx = likebuttonpx + dislikebuttonpx;
			
			document.querySelector(".ryd-tooltip").style = "width: " + newratiobarpx + "px";
		}
		
		// this also patches the padding-bottom of the menu buttons container
		document.querySelector("#top-row").style = "border-bottom: 1px solid var(--yt-spec-10-percent-layer); padding-bottom: 6px;"; // originally, this was 10px, making the ratio bar appear to be "floating" away
	}, waitTimeMs);
}
