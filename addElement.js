/*
Brandon Ko
15 June 2018
JavaScript for Add an Element button
*/

'use strict';
function $(id) {return document.getElementById(id);};
var x = document.createElement('a');
var node = document.createTextNode("New Element Created!");
x.appendChild(node);
$('hptl').appendChild(x);

console.log(x);
console.log('just completed addElement');