/*
Brandon Ko
15 June 2018
JavaScript for Remove an Element button
*/

'use strict';
function $(id) {return document.getElementById(id);};
chrome.storage.sync.get(['ElementID'], function(res) {
	$(res.ElementID).removeChild($('hptl').childNodes[$(res.ElementID).childNodes.length-1])
	console.log('just completed removeElement on: ' + res.ElementID);
});