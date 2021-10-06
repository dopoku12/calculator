"use strict";

const btnNum = document.querySelectorAll(".btn")

const btnSym = document.querySelectorAll(".btnS");

// const Input = document.querySelectorAll("input");

const remove = document.querySelector(".hide");

const display = document.querySelector(".display");

btnNum.addEventListener("click", function () {

  console.log(btnNum);
});

const selection1= 3
const selection2=6

function mul(){
  console.log(selection1*selection2)
}
mul()
console.log('pillow')