$(document).ready(function () {
console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
	console.log(message);
	let paragraphs = $('#_chatText');
	console.log(paragraphs);
}
});