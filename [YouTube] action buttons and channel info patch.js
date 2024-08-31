// ==UserScript==
// @name         [YouTube] action buttons and channel info patch
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  simple patch to make the action buttons and channel info "separate" to each other (not combined)
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20action%20buttons%20and%20channel%20info%20patch.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20action%20buttons%20and%20channel%20info%20patch.js
// @require      https://raw.githubusercontent.com/jpa102/ytscripts/main/trustedtypes_patch.js
// @connect      youtube.com
// @run-at       document-start
// ==/UserScript==

document.querySelector("head").insertAdjacentHTML(
	"afterbegin",
	`
		<style>
			#top-row {
				display: block !important;
			}
			
			#actions {
				margin-top: -40px !important;
			}
		</style>
	`
);
