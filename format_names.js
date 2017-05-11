"use strict";

function list(names){
  if (names.length < 2) {
    return names.length === 1 ? names[0].name : '';
  }
  let nameList = names.map((v, i)=>{
    return v.name;
  });
  let end = [nameList.pop()];
  end.unshift(nameList.pop());
  nameList.push(end.join(" & "));
  return nameList.join(", ")
}

let test1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
// returns 'Bart, Lisa & Maggie'

let test2 = [ {name: 'Bart'}, {name: 'Lisa'} ];
// returns 'Bart & Lisa'

let test3 = [ {name: 'Bart'} ];
// returns 'Bart'

let test4 = [];
// returns ''

console.log(list(test1));
console.log(list(test2));
console.log(list(test3));
console.log(list(test4));