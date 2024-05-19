// ==UserScript==
// @name         [YouTube] get precise like count from the like button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  small userscript to get the exact like counts, nothing too special here
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==

// internal settings (設定)
let waitTimerMs = 9000; //  this is necessary because the page might still be loading in the backend
let language = ""; //     "en" - english / "ja" - japanese
let alertPopup = false; //  make it display as a popup



// ================= MAIN =================

setTimeout(function(){
	console.log("getting precise like counts...");
	var potentialLikeCount = document.querySelector("like-button-view-model > toggle-button-view-model > button-view-model > button").ariaLabel;
	var strippedLikeCount;
	
	switch(language) {
		case "en":
			strippedLikeCount = potentialLikeCount.slice(27, -13);
			break;
		case "ja":
			strippedLikeCount = potentialLikeCount.slice(2, 9);
			break;
		default:
			strippedLikeCount = potentialLikeCount.slice(27, -13);
	}

	console.log("Like counts: " + strippedLikeCount);

	if (alertPopup == true) {
		alert("Like counts: " + strippedLikeCount)
	}
}, waitTimerMs);
