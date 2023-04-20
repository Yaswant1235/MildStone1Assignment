//  var round =Math.round(-12.5);
//     console.log("Number after rounding : " + round);
//     var round =Math.round(12.51);
//     console.log("Number after rounding : " + round);

const round = (value, precision) => {
    const power = Math.pow(10, precision);
    return Math.round(value * power) / power;
};
console.log(round(.5,0));