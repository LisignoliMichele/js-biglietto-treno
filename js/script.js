// price for every km
var kmCost = 0.21;

// how many km
var howManyKm = parseInt(prompt("How many km will you travel to get your destination?"));
if (isNaN(howManyKm)) {
  howManyKm = prompt("How many km will you travel to get your destination? PLEASE ENTER ONLY NUMBERS");
}
//normal price
var normalPrice = kmCost * howManyKm;
if (isNaN(age)) {
  age = prompt("how old are you? PLEASE ENTER ONLY NUMBERS");
}
// age
var age = parseInt(prompt("how old are you?"));

// discount for young 20%
var youngDiscont = normalPrice * 0.8;
var youngSaved = normalPrice - youngDiscont;

//old discount 40%
var oldDiscount = normalPrice * 0.6;
var oldSaved = normalPrice - oldDiscount;

// result
if (age < 18) {
  alert( "the price for your ticket is " + youngDiscont + "€. " + "You're saving " + youngSaved + "€ on the full price." )
}else if (age >= 65) {
  alert( "the price for your ticket is " +  oldDiscount + "€. " + "You're saving " + oldSaved + "€ on the full price." )
}else{
  alert( "the price for your ticket is " +  normalPrice + "€." )
}
