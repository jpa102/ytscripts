// ==UserScript==
// @name         [YouTube] m.youtube.com - add 'Open app' intent button or auto execute
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  don't like the 'Open app' opening the original youtube app? now you can change that! it also lets you choose if you want it to be automatically open or manually add the button for you to tap later
// @author       John Patrick Adem
// @license      Unlicense
// @downloadURL  https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20m.youtube.com%20-%20add%20'Open%20app'%20intent%20button.js
// @updateURL    https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20m.youtube.com%20-%20add%20'Open%20app'%20intent%20button.js
// @match        m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document-start
// ==/UserScript==

var waitTimeMs = 5000; //                                wait time for the page to fully load in the background to avoid potential errors, default is 5 seconds (in milliseconds)
var redirPackageName = "org.schabi.newpipe"; //          default is NewPipe
var openAppButtonType = "delhi"; //                      default is delhi style button, other is thin style button
var executionType = "manual"; //                         default is manual, other is auto which will automatically redirect to your desired app
var executionwaitTimeMs = 100; //                        wait time to auto redirect to the desired app



/*
	apologies for this massive code block

	the reason for this is that it has to be constructed manually
	so the button can have a responsive look when tapped, just like any other buttons
*/
function openAppButtonCreator(buttonType) {
	if (buttonType == "delhi") {
		let actionbarbuttons = document.querySelector(".slim-video-action-bar-actions");
		let openappbutton = document.createElement("a");
		openappbutton.id = "injected-open-app-button";
		openappbutton.setAttribute("class", "ytSpecButtonViewModelHost slim_video_action_bar_renderer_button");
		actionbarbuttons.insertBefore(openappbutton, actionbarbuttons.children[2]);

		let newopenappbutton = actionbarbuttons.children[2];

		let openappbutton_button = document.createElement("button");
		openappbutton_button.setAttribute("class", "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading");
		openappbutton_button.setAttribute("title", unsafeWindow.ytcfg.msgs.OPEN_APP);
		openappbutton_button.setAttribute("aria-label", unsafeWindow.ytcfg.msgs.OPEN_APP);
		openappbutton_button.setAttribute("aria-disabled", "false");

		document.querySelector("#injected-open-app-button").insertBefore(openappbutton_button, document.querySelector("#injected-open-app-button").children[0]);

		let openappbutton_icon = document.createElement("div");
		openappbutton_icon.setAttribute("aria-hidden", "true");
		openappbutton_icon.setAttribute("class", "yt-spec-button-shape-next__icon");
		openappbutton_icon.innerHTML = `
			<c3-icon fill-icon="false" style="width: 24px; height: 24px;">
				<span class="yt-icon-shape ytSpecIconShapeHost">
					<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
							<path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z"></path>
						</svg>
					</div>
				</span>
			</c3-icon>
		`;
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_icon, document.querySelector("#injected-open-app-button > button").children[0]);

		let openappbutton_text = document.createElement("div");
		openappbutton_text.setAttribute("class", "yt-spec-button-shape-next__button-text-content");
		openappbutton_text.innerText = unsafeWindow.ytcfg.msgs.OPEN_APP;
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_text, document.querySelector("#injected-open-app-button > button").children[1]);

		let openappbutton_feedbackcontainer = document.createElement("yt-touch-feedback-shape");
		openappbutton_feedbackcontainer.setAttribute("aria-hidden", "true");
		openappbutton_feedbackcontainer.setAttribute("class", "yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response");
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_feedbackcontainer, document.querySelector("#injected-open-app-button > button").children[2]);

		let openappbutton_feedbackstroke = document.createElement("div");
		openappbutton_feedbackstroke.setAttribute("class", "yt-spec-touch-feedback-shape__stroke");
		document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").insertBefore(openappbutton_feedbackstroke, document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").children[0]);

		let openappbutton_feedbackfill = document.createElement("div");
		openappbutton_feedbackfill.setAttribute("class", "yt-spec-touch-feedback-shape__fill");
		document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").insertBefore(openappbutton_feedbackfill, document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").children[1]);
		return;
	}

	if (buttonType == "thin") {
		let actionbarbuttons = document.querySelector(".slim-video-action-bar-actions");
		let openappbutton = document.createElement("a");
		openappbutton.id = "injected-open-app-button";
		openappbutton.setAttribute("class", "ytSpecButtonViewModelHost slim_video_action_bar_renderer_button");
		actionbarbuttons.insertBefore(openappbutton, actionbarbuttons.children[2]);

		let newopenappbutton = actionbarbuttons.children[2];

		let openappbutton_button = document.createElement("button");
		openappbutton_button.setAttribute("class", "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading");
		openappbutton_button.setAttribute("title", unsafeWindow.ytcfg.msgs.OPEN_APP);
		openappbutton_button.setAttribute("aria-label", unsafeWindow.ytcfg.msgs.OPEN_APP);
		openappbutton_button.setAttribute("aria-disabled", "false");

		document.querySelector("#injected-open-app-button").insertBefore(openappbutton_button, document.querySelector("#injected-open-app-button").children[0]);

		let openappbutton_icon = document.createElement("div");
		openappbutton_icon.setAttribute("aria-hidden", "true");
		openappbutton_icon.setAttribute("class", "yt-spec-button-shape-next__icon");
		openappbutton_icon.innerHTML = `
			<c3-icon fill-icon="false" style="width: 24px; height: 24px;">
				<span class="yt-icon-shape ytSpecIconShapeHost">
					<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"></path>
						</svg>
					</div>
				</span>
			</c3-icon>
		`;
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_icon, document.querySelector("#injected-open-app-button > button").children[0]);

		let openappbutton_text = document.createElement("div");
		openappbutton_text.setAttribute("class", "yt-spec-button-shape-next__button-text-content");
		openappbutton_text.innerText = unsafeWindow.ytcfg.msgs.OPEN_APP;
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_text, document.querySelector("#injected-open-app-button > button").children[1]);

		let openappbutton_feedbackcontainer = document.createElement("yt-touch-feedback-shape");
		openappbutton_feedbackcontainer.setAttribute("aria-hidden", "true");
		openappbutton_feedbackcontainer.setAttribute("class", "yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response");
		document.querySelector("#injected-open-app-button > button").insertBefore(openappbutton_feedbackcontainer, document.querySelector("#injected-open-app-button > button").children[2]);

		let openappbutton_feedbackstroke = document.createElement("div");
		openappbutton_feedbackstroke.setAttribute("class", "yt-spec-touch-feedback-shape__stroke");
		document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").insertBefore(openappbutton_feedbackstroke, document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").children[0]);

		let openappbutton_feedbackfill = document.createElement("div");
		openappbutton_feedbackfill.setAttribute("class", "yt-spec-touch-feedback-shape__fill");
		document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").insertBefore(openappbutton_feedbackfill, document.querySelector("#injected-open-app-button > button > yt-touch-feedback-shape").children[1]);
		return;
	}
}

class injectCustomIntentLink {
	static signedOutWithOpenApp() {
		document.querySelector(".mobile-topbar-header-sign-in-button > ytm-button-renderer > a").hidden = true;
		document.querySelector(".mobile-topbar-header-sign-in-button > ytm-button-renderer > a").attributes.href.value.replace("com.google.android.youtube", redirPackageName);
		openAppButtonCreator(openAppButtonType);
		document.querySelector("#injected-open-app-button").href = `intent://m.youtube.com/watch?v=${document.querySelector("meta[itemprop='identifier']").content}&feature=mweb_c3_open_app_11268432&itc_campaign=mweb_c3_open_app_11268432&redirect_app_store_ios=1&app=desktop#Intent;package=${redirPackageName};scheme=vnd.youtube;launchFlags=268435456;end`;
	}

	static signedInWithoutOpenApp() {
		openAppButtonCreator(openAppButtonType);
		document.querySelector("#injected-open-app-button").href = `intent://m.youtube.com/watch?v=${document.querySelector("meta[itemprop='identifier']").content}&feature=mweb_c3_open_app_11268432&itc_campaign=mweb_c3_open_app_11268432&redirect_app_store_ios=1&app=desktop#Intent;package=${redirPackageName};scheme=vnd.youtube;launchFlags=268435456;end`;
	}
}



// ======================== [MAIN] ========================
if (executionType == "auto") {
	setTimeout(() => {
		let open_app_auto = document.createElement("a");
		open_app_auto.href = `intent://m.youtube.com/watch?v=${document.querySelector("meta[itemprop='identifier']").content}&feature=mweb_c3_open_app_11268432&itc_campaign=mweb_c3_open_app_11268432&redirect_app_store_ios=1&app=desktop#Intent;package=${redirPackageName};scheme=vnd.youtube;launchFlags=268435456;end`;
		open_app_auto.click();
	}, executionwaitTimeMs);
} else {
	setTimeout(() => {
		// if signed out but contains an 'Open app' button at the topbar
		if (document.querySelector(".mobile-topbar-header-sign-in-button > ytm-button-renderer > a").attributes.href.value.includes("intent")) {
			injectCustomIntentLink.signedOutWithOpenApp();
		// if signed out but the button is a sign in
		} else if (document.querySelector(".mobile-topbar-header-sign-in-button > ytm-button-renderer > a").attributes.href.value.includes("//youtube.com/signin")) {
			injectCustomIntentLink.signedInWithoutOpenApp(); // reuse this function despite the name suggests
		// if signed in
		} else {
			injectCustomIntentLink.signedInWithoutOpenApp();
		}
	}, waitTimeMs);
}
