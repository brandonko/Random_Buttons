/*
Brandon Ko
15 June 2018
JavaScript for Add an Element button
*/

'use strict';
function $(id) {return document.getElementById(id);};

chrome.storage.sync.get(['ElementID'], function(res) {
	var x = document.createElement('a');
	var node = document.createTextNode("New Element!");
	x.appendChild(node);
	$(res.ElementID).appendChild(x);
	console.log('just completed addElement on: ' + res.ElementID);
});