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
			{file: 'scripts/runScript.js'});
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
		chrome.tabs.executeScript(
			{code: str});
	});

	//ID of the HTML element on the website that we are adding/removing elements from
	let setID = $('setID')
	setID.addEventListener('click', function() {
		var x = $('elementIDform');
		var idStr = x.elements[0].value;
		chrome.storage.sync.set({ElementID: idStr}, function() {});
		chrome.storage.sync.get(['ElementID'], function(res){
			chrome.tabs.executeScript(
				{code: 'console.log("ElementID is now: " + "'+res.ElementID+'")'})
		})
	})

	let addElement = $('addElement');
	addElement.addEventListener('click', function() {
		chrome.tabs.executeScript(
			{file: 'scripts/addElement.js'});
	});

	let removeElement = $('removeElement');
	removeElement.addEventListener('click', function() {
		chrome.tabs.executeScript(
			{file: 'scripts/removeElement.js'});
	});

	//Button for running test scripts
	let testButton = $('testButton');
	testButton.addEventListener('click', function() {
		chrome.tabs.executeScript(
			{file: 'scripts/testButton.js'});
	});
}