const numbers = [1, 2, 3, 4, 5];
const numbersDoubled = [];
function doubleNumber(num) {
return num * 2;
}
for (let i = 0; i < numbers.length; i++) {
numbersDoubled.push(doubleNumber(numbers[i]));
}
console.log(numbersDoubled);