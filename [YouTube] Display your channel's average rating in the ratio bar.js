// ==UserScript==
// @name         Display your channel's average rating in the ratio bar
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Not much going on, but i made this to display the channel's average rating in the ratio bar
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20Display%20your%20channel's%20average%20rating%20in%20the%20ratio%20bar.js
// @updateURL    https://github.com/jpa102/ytscripts/raw/main/%5BYouTube%5D%20Display%20your%20channel's%20average%20rating%20in%20the%20ratio%20bar.js
// @connect      youtube.com
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

/*
	on may 17, 2024, youtube updated the channel page to "modernize" the core design
	this change affected the way this userscript places the bar under "customize channel" & "manage videos" buttons
	
	it will now use the "setAverageRatioBarHtmlNEW()" function as the default
	but the old function will never be stripped off from this userscript, as it occassionally appears in incognito tab(s)
	the easy way to identify the old design is if it has the ">" looking arrow in the tagline
	if you do have it on your normal page, you can change the function name as it's more stable than the new one
*/

const averageRating = 95.5; // your average channel rating, you can see it in youtube studio



function setAverageRatioBarHtmlOLD() {
	let averagebarWidth = document.querySelector("#edit-buttons").clientWidth;

	document.querySelector("#buttons.ytd-c4-tabbed-header-renderer").insertAdjacentHTML(
		"beforeend",
		`
		<div class="ratio-bar-renderer-container">
			<ratio-bar-renderer id="sentiment" class="like-dislike-info-renderer" style="width: ${averagebarWidth}px; top: 40px;">
				<div id="container" class="like-dislike-info-renderer">
					<div id="like-bar" class="like-dislike-info-renderer" style="width: ${averageRating}%;">
					</div>
				</div>
				<tp-yt-paper-tooltip position="top" class="like-dislike-info-renderer" role="tooltip" tabindex="-1">
					${averageRating}% of people liked your channel
				</tp-yt-paper-tooltip>
			</ratio-bar-renderer>
		</div>
		`
	);
}

function setAverageRatioBarHtmlNEW() {
	let customizechannel = document.querySelector("yt-flexible-actions-view-model").clientWidth;

	// new method (2024 beta update ??)
	document.querySelector("yt-flexible-actions-view-model").insertAdjacentHTML(
		"beforeend",
		`
		<div class="ratio-bar-renderer-container">
			<ratio-bar-renderer id="sentiment" class="like-dislike-info-renderer" style="width: ${customizechannel}px; top: 40px;">
				<div id="container" class="like-dislike-info-renderer">
					<div id="like-bar" class="like-dislike-info-renderer" style="width: ${averageRating}%;">
					</div>
				</div>
				<tp-yt-paper-tooltip position="top" class="like-dislike-info-renderer" role="tooltip" tabindex="-1">
					${averageRating}% of people liked your channel
				</tp-yt-paper-tooltip>
			</ratio-bar-renderer>
		</div>
		`
	);
}

(typeof GM_addStyle != "undefined"
	? GM_addStyle
	: (styles) => {
		let styleNode = document.createElement("style");
		styleNode.type = "text/css";
		styleNode.innerText = styles;
		document.head.appendChild(styleNode);
	})(`
	/*
		this is the main container for the ratio bar
	*/
	.ratio-bar-renderer-container {
		position: absolute;
	}

	#sentiment.like-dislike-info-renderer {
		width: 110px;
		position: absolute;
		left: 0;
		padding-top: 6px;
		padding-bottom: 28px;
	}

	#container.like-dislike-info-renderer {
		height: 2px;
		background-color: #909090;
	}

	#like-bar.like-dislike-info-renderer {
		background: #030303;
		height: 2px;
		transition: width 0.3s;
	}

	tp-yt-paper-tooltip.like-dislike-info-renderer {
		margin-top: -6px;
	}
`);

console.log("Setting up the channel rating...");
console.log("Average channel rating is: " + averageRating + "%");



setTimeout(function(){
	document.querySelector("yt-flexible-actions-view-model").style = "position: absolute; right: 0"; // because of an update, this reverts it back
	document.querySelector("#page-header-banner").style = "background: var(--main-body-color)";
	document.querySelector("#page-header").style = "background: var(--main-body-color)";
}, 2000); // waiting for 2 seconds...

setTimeout(function(){
	setAverageRatioBarHtmlNEW();
	document.getElementById("sentiment"); // this is the ratio bar buried in the HTML
}, 2200); // waiting for 2.2 seconds...
