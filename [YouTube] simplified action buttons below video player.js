// ==UserScript==
// @name         YouTube - simplified action buttons below video player
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove the texts inside other action menu buttons below video player, making them look compact
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @downloadURL  https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20simplified%20action%20buttons%20below%20video%20player.js
// @updateURL    https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20simplified%20action%20buttons%20below%20video%20player.js
// @require      https://raw.githubusercontent.com/jpa102/ytscripts/main/trustedtypes_patch.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document_end
// ==/UserScript==

document.querySelector("head").insertAdjacentHTML(
	"afterbegin",
	`
		<style id="compact-action-buttons-look">
			/* share button */
			#top-level-buttons-computed > yt-button-view-model > button-view-model > button {
				padding: 6px 6px;
			}

			/* text container */
			#top-level-buttons-computed > yt-button-view-model > button-view-model > button > .yt-spec-button-shape-next__button-text-content {
				display: none;
			}

			/* margin of the icon */
			#top-level-buttons-computed > yt-button-view-model > button-view-model > button > .yt-spec-button-shape-next__icon {
				margin-left: 0px;
				margin-right: 0px;
			}

			/* [disabled / not disabled] download button */
			ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button {
				padding: 6px 6px !important;
			}

			/* text container */
			ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button > .yt-spec-button-shape-next__button-text-content {
				display: none;
			}

			/* margin of the icon */
			ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button > .yt-spec-button-shape-next__icon {
				margin-left: 0px !important;
				margin-right: 0px !important;
			}

			/* save button */
			#flexible-item-buttons > yt-button-view-model > button-view-model > button {
				padding: 6px 6px;
			}

			/* text container */
			#flexible-item-buttons > yt-button-view-model > button-view-model > button > .yt-spec-button-shape-next__button-text-content {
				display: none;
			}

			/* margin of the icon */
			#flexible-item-buttons > yt-button-view-model > button-view-model > button > .yt-spec-button-shape-next__icon {
				margin-left: 0px;
				margin-right: 0px;
			}
		</style>
	`
);
