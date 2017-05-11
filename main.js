"use strict";

const FN = require('./format_names');

let test1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
// returns 'Bart, Lisa & Maggie'

let test2 = [ {name: 'Bart'}, {name: 'Lisa'} ];
// returns 'Bart & Lisa'

let test3 = [ {name: 'Bart'} ];
// returns 'Bart'

let test4 = [];
// returns ''

console.log(FN.FormatNames(test1));
console.log(FN.FormatNames(test2));
console.log(FN.FormatNames(test3));
console.log(FN.FormatNames(test4));
