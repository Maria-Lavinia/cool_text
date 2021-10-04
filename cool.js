"use strict";



let text = document.querySelector("#cooltext").innerHTML;
document.querySelector("h1").innerHTML="";
let letter = text.split("");

console.log(letter);


letter.forEach((elm)=>{
    const character = document.createElement("span");
    let content = document.createTextNode(`${elm}`);
    character.appendChild(content);
    document.querySelector("#cooltext").appendChild(character);
    
});


document.querySelectorAll("span").forEach((elm,i)=>{
    elm.classList.add("ani");
    elm.style.animationDelay=`${i/5}s`;
  
});





