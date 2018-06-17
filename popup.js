/*
Brandon Ko
11 June 2018
JavaScript for the popup.html file
*/

'use strict';
window.onload = function () {
	function $(id) {return document.getElementById(id);};


	let changeColor = $('changeColor');
	chrome.storage.sync.get('color', function(data) {
		changeColor.style.backgroundColor = data.color;
		changeColor.setAttribute('value', data.color);
	});

	changeColor.onclick = function(element) {
		let color = element.target.value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.executeScript(
				tabs[0].id,
				{code: 'document.body.style.backgroundColor = "' + color + '";'});
		});
	};

	let reset = $('reset');
	reset.addEventListener('click', function () {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.executeScript(
				tabs[0].id,
				{code: 'document.body.style.backgroundColor = "#ffffff";'});
		});
	});


	let runScript = $('runScript');
	runScript.addEventListener('click', function() {
		chrome.tabs.executeScript(
			{file: 'runScript.js'});
	});

	let submit = $('submit');
	submit.addEventListener('click', function() {
		var x = $('frm1');
		var str = "";
		for (var i = 0; i < x.length-1; i++) {
			str += x.elements[i].value + " ";
		};
		str += x.elements[x.length-1].value;
		chrome.tabs.executeScript(
			{code: 'alert("Why hello "+"'+str+'" +"! How are you today?")'});
	});

	let injectButton = $('injectButton');
	injectButton.addEventListener('click', function() {
		var x = $('injectForm');
		var str = x.elements[0].value;
		var a = 'document.body.style.backgroundColor = "orange"';
		chrome.tabs.executeScript(
			{code: str});
	});

	let addElement = $('addElement');
	addElement.addEventListener('click', function() {
		chrome.tabs.executeScript(
			{file: 'addElement.js'});
	});
}