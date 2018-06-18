/*
Brandon Ko
15 June 2018
Script for random button that appends a button to the website
*/

'use strict';
function $(id) {return document.getElementById(id);};

let btn = document.createElement('button');
btn.innerHTML = 'click to log btn click';
btn.addEventListener('click', function() {
	console.log('btn has been clicked');
});
$('prm-pt').appendChild(btn);