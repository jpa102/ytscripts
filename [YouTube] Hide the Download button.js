// ==UserScript==
// @name         [YouTube] Hide the Download button
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  simple css patch to hide the download button (and other buttons too!)
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20Hide%20the%20Download%20button.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20Hide%20the%20Download%20button.js
// @require      https://raw.githubusercontent.com/jpa102/ytscripts/main/trustedtypes_patch.js
// @connect      youtube.com
// @run-at       document-end
// ==/UserScript==



/*
	Developer's note:
	
	
	
	Hello there! This is the 1.0 version of this userscript!
	
	Since this is v1.0, there may be some bugs that you may encounter
	Take unintentionally hiding the Thanks button even though it's not set to true for example
*/



// general configs
let HideDownloadButton = true; // Download button - true by default
let HideShareButton = false; //   Share button
let HideClipButton = false; //    Clip button
let HideThanksButton = false; //  Super Thanks button
let HideSaveButton = false; //    Save button 



/*
	==================================
		MAIN EXECUTION
	==================================
*/

// create a container for the styles
document.querySelector("head").insertAdjacentHTML(
	"afterbegin",
	`
		<div id="hide-download-button-js-container">
			
		</div>
	`
);

// download button
if (HideDownloadButton == true) {
	document.querySelector("#hide-download-button-js-container").insertAdjacentHTML(
		"beforeend",
		`
			<style id="hide-download-button">
				ytd-download-button-renderer {
					display: none;
				}
			</style>
		`
	);
}

// share button
if (HideShareButton == true) {
	document.querySelector("#hide-download-button-js-container").insertAdjacentHTML(
		"beforeend",
		`
			<style id="hide-share-button">
				#top-level-buttons-computed > yt-button-view-model {
					display: none;
				}
			</style>
		`
	);
}

// todo: clip button

// todo: thanks button

// save button
if (HideSaveButton == true) {
	document.querySelector("#hide-download-button-js-container").insertAdjacentHTML(
		"beforeend",
		`
			<style id="hide-save-button">
				#flexible-item-buttons > yt-button-view-model {
					display: none;
				}
			</style>
		`
	);
}
