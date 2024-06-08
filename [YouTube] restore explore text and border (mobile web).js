// ==UserScript==
// @name         restore explore text and border (mobile web)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  basically readds the explore text in explore button and the border separator (last seen in native youtube apps below 17.34.36)
// @author       John Patrick Adem
// @match        *://*m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20restore%20explore%20text%20and%20border%20(mobile%20web).js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20restore%20explore%20text%20and%20border%20(mobile%20web).js
// @grant        none
// ==/UserScript==

// interval timer (in milliseconds, 5000 is 5 seconds | applies the mods repeatedly in specified time)
var applyTimeMs = 5000;

// the explore text (planning to make it automated in the future)
var ExploreText = "Explore";

// the color of the border separator
var BorderColor = "rgba(255, 255, 255, 0.2)";

// [optional] make the filter buttons look like from 2021 layout
var Rounded2021Buttons = true;



// =================== [MAIN] ====================

setInterval(function() {
	if (document.querySelector("#explore-text-container") == null) {
		document.querySelector("ytm-chip-cloud-chip-renderer.more-drawer > div").insertAdjacentHTML(
			"beforeend",
			`
			<span id="explore-text-container" class="chip-text modern">
				<span style="margin-left: 6px; margin-right: 12px;" class="yt-core-attributed-string" role="text">
					${ExploreText}
				</span>
			</span>
			`
		);

		document.querySelector("ytm-chip-cloud-chip-renderer.more-drawer > div > c3-icon").style.marginLeft = "6px";
		document.querySelector("ytm-chip-divider-renderer").style = "border-left: 2px solid " + BorderColor;
	} else {
		return;
	}
}, applyTimeMs);

if (Rounded2021Buttons == true) {
	document.querySelector("ytm-chip-cloud-chip-renderer.more-drawer > .chip-container").style = "border-radius: 2px !important";
	document.querySelector("head").insertAdjacentHTML(
		"afterbegin",
		`
		<style id="rounded-buttons-2021">
			.chip-container {
				border-radius: 20px !important;
			}
		</style>
		`
	);
}
