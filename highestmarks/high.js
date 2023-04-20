const marks=[65,23,21,98,45];
const highestmarks=marks.length>0?Math.max(...marks):null;
if(highestmarks !== null){
    console.log(`The highest marks scored by a students in the class is ${highestmarks}`);

}else{
    console.log("no marks found");
}