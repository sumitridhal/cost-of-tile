"use strict"
var readlineSync = require('readline-sync');

let tiles = 0;

function cost(farea, tarea, price) {
  tiles = Math.ceil(farea / tarea);
  return tiles * price;
}

console.log(`Floor / Wall Dimensions in Inches`)
var fwidth = readlineSync.question('Width: ')
var flength = readlineSync.question('Length: ')
console.log(`Tile Size in Inches`)
var twidth = readlineSync.question('Width: ')
var tlength = readlineSync.question('Length: ')
var price = readlineSync.question('Price (per tile): ')

let tcost = cost(fwidth * flength, twidth * tlength, price);
console.log(`You would have to buy ${tiles} tiles, which would total ${tcost}.`)
