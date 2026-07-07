// ==UserScript==
// @name         [YouTube] add the dislike button in shorts
// @version      1.0
// @description  this only adds back the dislike button html in the shorts page, making add-ons like return youtube dislike display the count. it does not give a visual dislike feedback when clicked as that is the limitation
// @author       John Patrick Adem
// @license      Unlicense
// @downloadURL  https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20add%20the%20dislike%20button%20in%20shorts.js
// @updateURL    https://raw.githubusercontent.com/jpa102/ytscripts/main/%5BYouTube%5D%20add%20the%20dislike%20button%20in%20shorts.js
// @match        www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at       document-start
// ==/UserScript==

// i know what you're thinking, using setInterval and a fixed time is bad practice
// until there's more room to improve this userscript, it will behave this way as of initial 1.0 release

setInterval(() => {
	if (document.querySelector("dislike-button-view-model.injectedDislikeButton") == null) {
		let shortsActionBar = document.querySelector("reel-action-bar-view-model");
		let dislikeButton_Main = document.createElement("dislike-button-view-model");
		dislikeButton_Main.setAttribute("class", "injectedDislikeButton ytLikeButtonViewModelHost ytwReelActionBarViewModelHostDesktopActionButton");
		dislikeButton_Main.innerHTML = `
			<toggle-button-view-model>
				<button-view-model class="ytSpecButtonViewModelHost">
					<label class="ytSpecButtonShapeWithLabelHost">
						<button class="ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextMono ytSpecButtonShapeNextSizeL ytSpecButtonShapeNextIconButton ytSpecButtonShapeNextEnableBackdropFilterExperiment" title="" aria-pressed="false" aria-label="" aria-disabled="false" style="">
							<div aria-hidden="true" class="ytSpecButtonShapeNextIcon dislikeSvgContainerInject">
								<yt-icon style="width: 24px; height: 24px;">
									<!--css-build:shady-->
									<!--css_build_scope:yt-icon-->
									<!--css_build_styles:video.youtube.src.web.polymer.shared.ui.styles.yt_base_styles.yt.base.styles.css.js,video.youtube.src.web.polymer.shared.core.yt_icon.yt.icon.css.js-->
									<span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
										<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
											<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
												<path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path>
											</svg>
										</div>
									</span>
								</yt-icon>
							</div>
							<yt-touch-feedback-shape aria-hidden="true" class="ytSpecTouchFeedbackShapeHost ytSpecTouchFeedbackShapeTouchResponse">
								<div class="ytSpecTouchFeedbackShapeStroke"></div>
								<div class="ytSpecTouchFeedbackShapeFill"></div>
							</yt-touch-feedback-shape>
						</button>
						<div class="ytSpecButtonShapeWithLabelLabel" aria-hidden="false">
							<span class="ytAttributedStringHost ytAttributedStringWhiteSpacePreWrap ytAttributedStringTextAlignmentCenter ytAttributedStringWordWrapping" role="text" style=""></span>
						</div>
					</label>
				</button-view-model>
			</toggle-button-view-model>
		`;
		shortsActionBar.insertBefore(dislikeButton_Main, shortsActionBar.children[1]);

		// this part is necessary because without it, the button doesn't have the svg icon for some reason
		document.querySelector(".dislikeSvgContainerInject").innerHTML = `
			<span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
				<div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
						<path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z"></path>
					</svg>
				</div>
			</span>
		`;
	} else {
		// do not log errors or create exception handlers here
	}
}, 100);
