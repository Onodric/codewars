"use strict";

function list(names){
  if (names.length < 2) {
    return names.length === 1 ? names[0].name : '';
  }
  let nameList = names.map((v)=>{
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
let insert = document.getElementById('names');
let title = document.createElement('h3');
title.innerText = "Format a List of Objects";
insert.appendChild(title);
let newP = document.createElement('p');
newP.innerText = list(test1);
insert.appendChild(newP);
newP = document.createElement('p');
newP.innerText = list(test2);
insert.appendChild(newP);
newP = document.createElement('p');
newP.innerText = list(test3);
insert.appendChild(newP);
newP = document.createElement('p');
newP.innerText = list(test4);
insert.appendChild(newP);
