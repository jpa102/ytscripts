// code source: https://www.reddit.com/r/GoogleAppsScript/comments/185tw8f/comment/kb4t2o4/
// youtube seems to be restrictive now, urban dictionary doesn't behave like this
if (window.trustedTypes && window.trustedTypes.createPolicy) {
	window.trustedTypes.createPolicy('default', {
		createHTML: string => string,
		createScriptURL: string => string,
		createScript: string => string,
	});
}
