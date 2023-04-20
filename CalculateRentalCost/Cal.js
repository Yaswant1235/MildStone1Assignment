// The rental costs are
// - Economy = Rs. 4000 /- per day.
// - Midsize = Rs. 10,000 /- per day.
// - Luxury = Rs. 20,000 /- per day.
// */
function calculateRentalCost(numDays, carType) {
let rentalCost = 0;
switch (carType) {
case "economy":
rentalCost = 4000;
break;
case "midSize":
rentalCost = 10000;
break;
case "luxury":
rentalCost = 20000;
break;
default:
console.log("Invalid car type");
return;
}
return rentalCost * numDays;
}
console.log(calculateRentalCost(5, "midSize"));