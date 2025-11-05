// ==UserScript==
// @name         [YouTube] non-cairo icons (sidebar)
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  a small userscript that edits some icons to be "non-cairo" style (kind of like 1px styled icons)
// @author       John Patrick Adem
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

let YouTabText = "ライブラリ"; //      default is "ライブラリ" (Library in japanese)
let waitTimerMs = 7777; //             wait time for the script to execute, default is 7777 ms
let FontWeight = 400 //                the weight of the text, how bold or thin it is
let FontSize = 1.4 //                  the size of the text in rem, how big or small it is



// ============================ [MAIN] ============================



// in case the sidebar is collapsed (when clicked, the "You" text will be changed)
var guidebutton = document.querySelector("#container > #start > #guide-button");

function setLibraryIcon() {
	// i'd like to assign these selectors to a variable for simplicity, but they seem to fail for no reason

	if (document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg") != null) {
		document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg").remove();
		document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div").insertAdjacentHTML(
			"afterbegin",
			`
				<style id="force-display-library-icon-if-hidden">ytd-guide-entry-renderer[is-header] .guide-icon.ytd-guide-entry-renderer { display: block !important; }</style>
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" aria-hidden="true" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g width="24" height="24" viewBox="0 0 24 24" class="style-scope tp-yt-iron-icon">
						<path d="M11 6.99982V13.9998L17 10.4998L11 6.99982Z" class="style-scope tp-yt-iron-icon"></path>
						<path d="M18 20.9998H3V5.99982H4V19.9998H18V20.9998ZM21 2.99982H6V17.9998H21V2.99982ZM7 3.99982H20V16.9998H7V3.99982Z" class="style-scope tp-yt-iron-icon"></path>
					</g>
				</svg>
			`
		);
	}

	if (document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[3] != null) {
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[3].remove();
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div")[3].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" aria-hidden="true" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g width="24" height="24" viewBox="0 0 24 24" class="style-scope tp-yt-iron-icon">
						<path d="M11 6.99982V13.9998L17 10.4998L11 6.99982Z" class="style-scope tp-yt-iron-icon"></path>
						<path d="M18 20.9998H3V5.99982H4V19.9998H18V20.9998ZM21 2.99982H6V17.9998H21V2.99982ZM7 3.99982H20V16.9998H7V3.99982Z" class="style-scope tp-yt-iron-icon"></path>
					</g>
				</svg>
			`
		);
	}
}

function setHomeIcon() {
	// i'd like to assign these selectors to a variable for simplicity, but they seem to fail for no reason

	// uncollapsed sidebar
	if (document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[0] != null) {
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[0].remove();
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[0].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}

	// collapsed sidebar
	if (document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[0] != null) {
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[0].remove();
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div")[0].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}
}

function setShortsIcon() {
	// i'd like to assign these selectors to a variable for simplicity, but they seem to fail for no reason

	// uncollapsed sidebar
	if (document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[1] != null) {
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[1].remove();
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[1].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}

	// collapsed sidebar
	if (document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[1]) {
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[1].remove();
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div")[1].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}
}

function setSubscriptionsIcon() {
	if (document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[2] != null) {
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[2].remove();
		document.querySelectorAll("#items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[2].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}
}

function setHistoryIcon() {
	if (document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[0] != null) {
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[0].remove();
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[0].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path>
					</g>
				</svg>
			`
		);
	}
}

function setPlaylistsIcon() {
	if (document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[1] != null) {
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[1].remove();
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[1].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
					</g>
				</svg>
			`
		);
	}
}

function setYourVideosIcon() {
	if (document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[2] != null) {
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[2].remove();
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[2].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
					</g>
				</svg>
			`
		);
	}
}

function setWatchLaterIcon() {
	if (document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[3] != null) {
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[3].remove();
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[3].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
					</g>
				</svg>
			`
		);
	}
}

function setLikeVideosIcon() {
	if (document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[4] != null) {
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg")[4].remove();
		document.querySelectorAll("#section-items > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div")[4].insertAdjacentHTML(
			"afterbegin",
			`
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="style-scope yt-icon">
						<path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
					</g>
				</svg>
			`
		);
	}
}

function setDownloadsIcon() {
	// i'd like to assign these selectors to a variable for simplicity, but they seem to fail for no reason

	// uncollapsed sidebar
	if (document.querySelector("#section-items > ytd-guide-downloads-entry-renderer > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg") != null) {
		document.querySelector("#section-items > ytd-guide-downloads-entry-renderer > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div > svg").remove();
		document.querySelector("#section-items > ytd-guide-downloads-entry-renderer > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-icon > span > div").insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
				</svg>
			`
		);
	}

	// collapsed sidebar
	if (document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[4]) {
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div > svg")[4].remove();
		document.querySelectorAll("ytd-mini-guide-renderer > #items > ytd-mini-guide-entry-renderer > #endpoint > yt-icon > span > div")[4].insertAdjacentHTML(
			"afterbegin",
			`
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
					<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
				</svg>
			`
		);
	}
}

function setNotificationIcon() {
	document.querySelector("#container > #end > #buttons > ytd-notification-topbar-button-renderer > yt-icon-button > button > yt-icon-badge-shape > div > div > span > span > div > svg").remove();
	document.querySelector("#container > #end > #buttons > ytd-notification-topbar-button-renderer > yt-icon-button > button > yt-icon-badge-shape > div > div > span > span > div").insertAdjacentHTML(
		"afterbegin",
		`
			<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope tp-yt-iron-icon" aria-hidden="true" style="pointer-events: none; display: block; width: 100%; height: 100%;">
				<g class="style-scope tp-yt-iron-icon">
					<path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope tp-yt-iron-icon"></path>
				</g>
			</svg>
		`
	);
}

function setText() {
	// delay it by 1 second in case the user taps the already collapsed guide (ex: in watch page)
	setTimeout(function(){ document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-formatted-string").innerText = YouTabText; }, 1000);

	// change the tooltip text
	document.querySelector("#header > ytd-guide-entry-renderer > #endpoint").title = YouTabText;

	// adjust the text so it's consistent with the other texts
	document.querySelector("#header > ytd-guide-entry-renderer > #endpoint > tp-yt-paper-item > yt-formatted-string").style = "font-weight: " + FontWeight + "; font-size: " + FontSize + "rem;"

	//console.log("guide button pressed"); // uncomment this for debugging
}

function listenToGuideButton() {
	setTimeout(function(){
		guidebutton.addEventListener("click", setText);
	}, 3200);
}

setTimeout(function(){
	setText();
	setHomeIcon();
	setShortsIcon();
	setSubscriptionsIcon();
	setLibraryIcon();
	setHistoryIcon();
	setPlaylistsIcon();
	setYourVideosIcon();
	setWatchLaterIcon();
	setLikeVideosIcon();
	setDownloadsIcon();
	setNotificationIcon();
	listenToGuideButton();
}, waitTimerMs);
