let myCar = new Car("Audi", "A5", 2023, 100);
console.log(myCar.displayInfo());
console.log(`Time to cross 600 km: ${myCar.calculateTravelTime(600)} ч.`);

let frac1 = new Fraction(3, 7);
let frac2 = new Fraction(1, 5);
let sum = frac1.add(frac2);
console.log(`Sum: ${sum.a}/${sum.b}`);

let diff = frac1.subtract(frac2);
console.log(`Difference: ${diff.a}/${diff.b}`);

let mult = frac1.multiply(frac2);
console.log(`Multiplication: ${mult.a}/${mult.b}`);

let div = frac1.divide(frac2);
console.log(`Division: ${div.a}/${div.b}`);


let currentTime = new Time(12, 47, 3);
console.log("Current time", currentTime.displayTime());

currentTime.addSec(52);
console.log("Add 52 sec:", currentTime.displayTime());

currentTime.addMin(2);
console.log("Add 2 min:", currentTime.displayTime());

currentTime.addHr(11);
console.log("Add 11 h:", currentTime.displayTime());