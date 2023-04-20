
let array = [3, 6, 5, 9, 12, 15];
for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num % 2 === 0) {
        continue;
    }
    if (num % 3 === 0) {
        console.log(num);
    }
}
