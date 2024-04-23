"use strict";

// rooms of dimension examples
var length = 23.32;
var width = 53.874;


// get the area of the room
var area = length * width;

// calculate the number of tiles
var tilesNeeded = area;
// each boxes has 12 tiles
var boxesNeed = Math.ceil(tilesNeeded /12);
// calculate 10 more percent for chips,breaks ecetra
var extraTiles = Math.ceil(tilesNeeded * 0.1)
// find out the total num of tiles including the 10percent
var totalTiles = tilesNeeded + extraTiles;
// find the total box needed including the 10 %
var totalBoxes = Math.ceil(totalTiles / 12);

console.log("we need " + totalBoxes + " number of boxes")