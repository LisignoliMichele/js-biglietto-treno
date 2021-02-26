// price for every km
var kmCost = 0.21;

// how many km
var howManyKm = prompt("how Many Km?");

//normal price
var normalPrice = kmCost * howManyKm;

// age
var age = prompt("how old are you?")

// discount for young 20%
var youngDiscont = normalPrice * 0.8;

//old discount 40%
var oldDiscount = normalPrice * 0.6;

// result
if (age < 18) {
  alert( youngDiscont )
}else if (age >= 65) {
  alert( oldDiscount )
}else{
  alert( normalPrice)
}
