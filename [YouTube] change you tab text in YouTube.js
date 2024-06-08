// ==UserScript==
// @name         change "you" tab text in YouTube
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  a super tiny userscript that edits the text inside the new "you" tab
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

let YouTabText = "Library"; //   default is "Library"
let waitTimerMs = 6000; //       wait time for the script to execute, default is 5000 ms
let FontWeight = 400 //          the weight of the text, how bold or thin it is
let FontSize = 1.4 //            the size of the text, how big or small it is



// ============================ [MAIN] ============================



// in case the sidebar is collapsed (when clicked, the "You" text will be changed)
var guidebutton = document.querySelector("#container > #start > #guide-button");

function setText() {
	document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-formatted-string").innerText = YouTabText;
	
	// change the tooltip text
	document.querySelector("#header > ytd-guide-entry-renderer > #endpoint").title = YouTabText;
	
	// adjust the text so it's consistent
	document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-formatted-string").style = "font-weight: " + FontWeight + "; font-size: " + FontSize + "rem;"
	
	//console.log("guide button pressed"); // uncomment this for debugging
}

function listenToGuideButton() {
	setTimeout(function(){
		guidebutton.addEventListener("click", setText);
	}, 1200);
}

setTimeout(function(){
	setText();
	listenToGuideButton();
}, waitTimerMs);
