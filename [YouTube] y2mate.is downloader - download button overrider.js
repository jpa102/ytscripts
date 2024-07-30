// ==UserScript==
// @name         [YouTube] y2mate,is downloader - download button overrider
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  simple userscript to override the native download button to download videos from y2mate.is
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20y2mate.is%20downloader%20-%20download%20button%20overrider.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20y2mate.is%20downloader%20-%20download%20button%20overrider.js
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==

// script settings 「スクリプトの設定」
var waitTimeMs = 5500; // the wait time for this userscript to load, default is 5.5 seconds (5500 milliseconds)
var DisplayConsentOption = false; // show a dialog whether you want to download the video to y2mate.is or in the youtube site (there's an option for offline playback in itself)
var DownloaderSite = "https://www.youtubepi.com/watch?v="; // redirects to y2mate.is, this is stated as a tip to quickly download from their site
var oldDownloadButton = false; // if it doesn't work, setting this to true checks if the download button comes from a "legacy" version of the watch page (old html elements)



// ====================== [MAIN] ======================
// you may notice the console.log() codes are commented, uncomment them for debugging

// message strings
var DownloaderSiteName = "y2mate.is";
var DownloadConfirmMain = "Do you want to download this video from " + DownloaderSiteName +"?\n\nPress OK if you want to continue, press Cancel to download it offline to your YouTube website client.";
var DebugMessage01 = "[SUCCESS] overriden the download button!";
var DebugMessage02 = "download button is hidden, trying to unhide...";
var DebugMessage03 = "[ERROR] the download button has been removed!";
var DebugMessage04 = "[INFO] the user pressed the OK button.";
var DebugMessage05 = "[INFO] the user pressed the Cancel button.";


// code credit to https://www.github.com/Anarios/return-youtube-dislike
function getVideoId() {
	const urlObject = new URL(window.location.href);
	const pathname = urlObject.pathname;
	if (pathname.startsWith("/clip")) {
		return (document.querySelector("meta[itemprop='videoId']") || document.querySelector("meta[itemprop='identifier']")).content;
	} else {
		if (pathname.startsWith("/shorts")) {
			return pathname.slice(8);
		}
		return urlObject.searchParams.get("v");
	}
}

function downloadButton() {
	if (DisplayConsentOption == true) {
		if (window.confirm(DownloadConfirmMain) == true) {
			window.open("https://www.youtubepi.com/watch?v=" + getVideoId());
			
			setTimeout(function() {
				if (document.querySelector("ytd-download-button-renderer") != null && document.querySelector("ytd-download-button-renderer").hasAttribute("is-hidden") == true) {
					// console.log(DebugMessage02);
					document.querySelector("ytd-download-button-renderer").removeAttribute("is-hidden");
				} else {
					// console.log(DebugMessage03);
					return;
				}
			}, 600);
			
			// console.log(DebugMessage04);
		} else {
			// console.log(DebugMessage05);
		}
	} else {
		window.open("https://www.youtubepi.com/watch?v=" + getVideoId());
		
		setTimeout(function() {
			if (document.querySelector("ytd-download-button-renderer") != null && document.querySelector("ytd-download-button-renderer").hasAttribute("is-hidden") == true) {
				// console.log(DebugMessage02);
				document.querySelector("ytd-download-button-renderer").removeAttribute("is-hidden");
			} else {
				// console.log(DebugMessage03);
				return;
			}
		}, 600);
	}
}

setTimeout(function() {
	// check if the download button is marked as disabled
	if (oldDownloadButton == true) {
		if (document.querySelector("ytd-download-button-renderer > ytd-button-renderer > button").hasAttribute("disabled") == true) {
			document.querySelector("ytd-download-button-renderer > ytd-button-renderer > button").removeAttribute("disabled");
		}
	} else {
		if (document.querySelector("ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button").hasAttribute("disabled") == true) {
			document.querySelector("ytd-download-button-renderer > ytd-button-renderer > yt-button-shape  > button").removeAttribute("disabled");
		}
	}
	
	document.querySelector("ytd-download-button-renderer > ytd-button-renderer").addEventListener("click", downloadButton);
	// console.log(DebugMessage01);
}, waitTimeMs);
