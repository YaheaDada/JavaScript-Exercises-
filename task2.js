// Example birthdays
let day1 = 10, month1 = 5, year1 = 1990;
let day2 = 25, month2 = 7, year2 = 1989;

// Convert each date into total days
let totalDays1 = year1 * 360 + month1 * 30 + day1;
let totalDays2 = year2 * 360 + month2 * 30 + day2;

// Single comparison
let older = totalDays1 < totalDays2 ? "Person 1 is older" : "Person 2 is older";

console.log(older);