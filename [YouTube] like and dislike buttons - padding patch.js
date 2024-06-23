// ==UserScript==
// @name         [YouTube] like and dislike buttons - padding patch
// @namespace    http://tampermonkey.net/
// @version      1.21
// @description  simple patch to make the like and dislike buttons look "symmetrical" to each other, this is noticeable when you use the Return YouTube Dislike addon
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==

var waitTimeMs = 3000; // default wait time is 3 seconds (in milliseconds)
var ReturnYouTubeDislikeCompatibility = false; // make this userscript compatible with Return YouTube Dislike - Extension / UserScript verrsions
var repeatedApply = false; // EXPERIMENTAL SETTING! only enable this if you want the patch to be applied while navigating through different videos

/*
	style
*/

document.querySelector("head").insertAdjacentHTML(
	"afterbegin",
	`
		<style id="like-dislike-button-padding-patch-css">
			.like-and-dislike-padding-patch {
				padding-left: 20px !important;
			}
		</style>
	`
);

if (ReturnYouTubeDislikeCompatibility == true) {
	document.querySelector("head").insertAdjacentHTML(
		"afterbegin",
		`
			<style id="like-dislike-button-padding-patch-css">
				.like-and-dislike-padding-patch {
					padding-left: 20px !important;
				}
				
				/* this also patches the padding-bottom of the menu buttons container */
				#top-row {
					padding-bottom: 6px !important; /* originally, this was set in 10px, making the ratio bar appear to be "floating" away */
				}
			</style>
		`
	);
}

/*
	MAIN
*/

var likebuttonpx;
var dislikebuttonpx;
var newratiobarpx;

function addPaddingButtonsPatch() {
	document.querySelector("like-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // like button
	document.querySelector("dislike-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // dislike button
}

function RYDCompatibilityPatch() {
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
}

// highly experimental, this may cause bugs or not work at all
if (repeatedApply == true) {
	setInterval(function() {
		setTimeout(addPaddingButtonsPatch, waitTimeMs);
		
		if (ReturnYouTubeDislikeCompatibility == true) {
			setTimeout(function(){
				RYDCompatibilityPatch();
			}, waitTimeMs);
		}
	}, 2000); // hardcoded value, 2000 is 2 seconds in milliseconds
} else {
	// default operation
	setTimeout(addPaddingButtonsPatch, waitTimeMs);
	
	if (ReturnYouTubeDislikeCompatibility == true) {
		setTimeout(function(){
			RYDCompatibilityPatch();
		}, waitTimeMs);
	}
}
