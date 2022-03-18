"use strict";
const x = require("prompt-sync");
const prompt = x();

function changeWord(selectedText, changedText, text) {
    let res = text.replace(selectedText, changedText);
    return res;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
    "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));

// const text = prompt("Masukkan kalimat: ");
// const selectedText = prompt("Masukkan kata yang ingin diganti: ");
// const changedText = prompt("Masukkan kata penggantinya: ");

// console.log(changeWord(selectedText, changedText, text));