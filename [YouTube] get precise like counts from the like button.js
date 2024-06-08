// ==UserScript==
// @name         [YouTube] get precise like count from the like button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  small userscript to get the exact like counts, nothing too special here
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20get%20precise%20like%20counts%20from%20the%20like%20button.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20get%20precise%20like%20counts%20from%20the%20like%20button.js
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==

// internal settings (設定)
let waitTimerMs = 6000; //        this is necessary because the page might still be loading in the backend
let language = "en"; //           "en" - english / "ja" - japanese
let DisplayAsAPopup = false; //   display the result as a alert popup



// ================= MAIN =================
console.log("getting precise like counts...");
var PotentialLikeCount = document.querySelector("like-button-view-model > toggle-button-view-model > button-view-model > button").ariaLabel;

var NewLikeCount; // empty variable
var FinalLikeCountAsInt; // empty variable
var DisplayLikeCountsAsString; // empty variable

// language strings (they are placed here so it's modular than hardcoding them inside)
var likesString = "likes"; // english
var kouhyoukaString = "の高評価"; // 日本語

setTimeout(function(){
	switch(language) {
		case "en":
			NewLikeCount = PotentialLikeCount.replace(/\D/g, '');
			FinalLikeCountAsInt = parseInt(NewLikeCount);

			DisplayLikeCountsAsString = "int: " + FinalLikeCountAsInt + "\n" + FinalLikeCountAsInt.toLocaleString() + " " + likesString;
			break;
		case "ja":
			NewLikeCount = PotentialLikeCount.replace(/\D/g, '');
			FinalLikeCountAsInt = parseInt(NewLikeCount);

			DisplayLikeCountsAsString = "int: " + FinalLikeCountAsInt + "\n" + FinalLikeCountAsInt.toLocaleString() + " " + kouhyoukaString;
			break;
		// defaults to english as a fallback
		default:
			NewLikeCount = PotentialLikeCount.replace(/\D/g, '');
			FinalLikeCountAsInt = parseInt(NewLikeCount);

			DisplayLikeCountsAsString = FinalLikeCountAsInt.toLocaleString() + " " + likesString;
	}

	console.log(DisplayLikeCountsAsString);

	if (DisplayAsAPopup == true) {
		alert(DisplayLikeCountsAsString);
	}
}, waitTimerMs);
