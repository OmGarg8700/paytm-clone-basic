(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require("fs");
// const date = new Date();

// dict_month = {
//     1:"Jan",
//     2:"Feb",
//     3:"Mar",
//     4:"Apr",
//     5:"May",
//     6:"Jun",
//     7:"July",
//     8:"Aug",
//     9:"Sept",
//     10:"Oct",
//     11:"Nov",
//     12:"Dec"
// }

// var new_date = "";
// if(date.getDate() <= 9){
//     new_date = "0"
// }
// new_date += date.getDate()

// var time = ""
// time = time + new_date + " " + dict_month[date.getMonth() + 1] + ", " + date.getHours() + ":" + date.getMinutes()

const a = fs.readFileSync("output.txt", encoding = "utf-8");
console.log(a);
},{"fs":1}]},{},[2]);
