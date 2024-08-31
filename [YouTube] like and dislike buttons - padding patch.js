// ==UserScript==
// @name         [YouTube] like and dislike buttons - padding patch
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  simple patch to make the like and dislike buttons look "symmetrical" to each other, this is noticeable when you use the Return YouTube Dislike addon
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20like%20and%20dislike%20buttons%20-%20padding%20patch.js
// @require      https://raw.githubusercontent.com/jpa102/ytscripts/main/trustedtypes_patch.js
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==

var waitTimeMs = 5200; // default wait time is 5.2 seconds (in milliseconds)
var ReturnYouTubeDislikeCompatibility = false; // make this userscript compatible with Return YouTube Dislike - Extension / UserScript versions
var repeatedApply = false; // only enable this if you want the patch to be applied while navigating through different videos natively

var paddingLeftPxSize = 20; // the px for the padding-left css; default is 20px
var paddingRightPxSize = 15; // the px for the padding-right css; default is 15px



/*
	style
*/

if (ReturnYouTubeDislikeCompatibility == true) {
	document.querySelector("head").insertAdjacentHTML(
		"afterbegin",
		`
			<style id="like-dislike-button-padding-patch-css">
				.like-and-dislike-padding-patch {
					padding-left: ${paddingLeftPxSize}px !important;
					padding-right: ${paddingRightPxSize}px !important;
				}
				
				/* this also patches the padding-bottom of the menu buttons container */
				#top-row {
					padding-bottom: 6px !important; /* originally, this was set in 10px, making the ratio bar appear to be "floating" away */
				}
			</style>
		`
	);
} else {
	// default operation
	document.querySelector("head").insertAdjacentHTML(
		"afterbegin",
		`
			<style id="like-dislike-button-padding-patch-css">
				.like-and-dislike-padding-patch {
					padding-left: ${paddingLeftPxSize}px !important;
					padding-right: ${paddingRightPxSize}px !important;
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
	
	// if the user has the experimental watch layout (2024 ui)
	if (document.querySelector("ytd-watch-grid") != null) {
		document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > like-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // like button
		document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > dislike-button-view-model > toggle-button-view-model > button-view-model > button").classList.add("like-and-dislike-padding-patch"); // dislike button
	}
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
	
	// if the user has the experimental watch layout (2024 ui)
	if (document.querySelector("ytd-watch-grid") != null) {
		if (document.querySelector(".ryd-tooltip.ryd-tooltip-new-design") != null) {
			likebuttonpx = document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > like-button-view-model").clientWidth;
			dislikebuttonpx = document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > dislike-button-view-model").clientWidth;
			newratiobarpx = likebuttonpx + dislikebuttonpx;
			
			document.querySelector(".ryd-tooltip.ryd-tooltip-new-design").style = "width: " + newratiobarpx + "px";
		}
		
		// check if the ratio bar from "Return YouTube Dislike - UserScript" exists in the HTML
		if (document.querySelector(".ryd-tooltip") != null) {
			likebuttonpx = document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > like-button-view-model").clientWidth;
			dislikebuttonpx = document.querySelector("#bottom-actions > #actions > #actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > .smartimation__content > .YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > dislike-button-view-model").clientWidth;
			newratiobarpx = likebuttonpx + dislikebuttonpx;
			
			document.querySelector(".ryd-tooltip").style = "width: " + newratiobarpx + "px";
		}
	}
}

// remember, only set it to true if you want the patch to be applied while navigating through different videos
if (repeatedApply == true) {
	setInterval(function() {
		setTimeout(addPaddingButtonsPatch, waitTimeMs);
		
		if (ReturnYouTubeDislikeCompatibility == true) {
			setTimeout(function(){
				RYDCompatibilityPatch();
			}, waitTimeMs);
		}
	}, waitTimeMs); // uses the same wait time value as in the config
} else {
	// default operation
	setTimeout(addPaddingButtonsPatch, waitTimeMs);
	
	if (ReturnYouTubeDislikeCompatibility == true) {
		setTimeout(function(){
			RYDCompatibilityPatch();
		}, waitTimeMs);
	}
}
