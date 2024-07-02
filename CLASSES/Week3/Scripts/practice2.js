//1. Given r (radius) of a circle, calculate the area of a circle (A = 3.14 * r * r).

function areaCircle(radius) {
    let Area = 3.14 * radius * radius;
    console.log(Area);
}
areaCircle(4);

// Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).[You might need Math class or specifically Math.random() to produce a random number in JavaScript]

function roll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log(roll());
console.log(roll(50));

// Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".

function convert(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return `${fahrenheit}°F`;
}
console.log(convert(22));
