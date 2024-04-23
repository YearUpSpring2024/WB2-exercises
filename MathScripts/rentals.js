"use strict";

// num given going on Drake tour
var totalPeople = 38;

// Drake vans space
var seatsAvaiblePerVan = 15;

// find how many vans Drakes need
var vansNeed = Math.ceil(totalPeople / seatsAvaiblePerVan);

// vans price per day to rent
var vansPricePerDay = 250;

var totalVanPrice = vansNeed + vansPricePerDay;

var costPerPerson = totalVanPrice / totalPeople;

console.log("how many Vans does Drake needs " + vansNeed);
console.log("Total price to rent the van "+ totalVanPrice);
console.log("cost per person if evenly " + costPerPerson.toFixed(2));

/* 
The total amount collect so 38 people and it woud cost 26.32 per person
the total amount 38 people times 26.32 / person =1001.16 dollars

// how much it cost to rent vans?
according to script : 3 
rounded that from 2.53


now the cost per day for the van: 250
so the total then would be 3 vans * 250 /van/day = 750 dollars


The leftover money why would that be?
to find that I took 

$1001.16 - $750 = $251.16

This shows the number of people does not perfectly align with the seating available leaving some empty seats.

Also everyone does not have it all the time so maybe splits per person is not splits evenly or always blame it on taxes

*/