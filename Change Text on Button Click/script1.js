const btn1 = document.getElementById("btn");
const heading = document.getElementById("h1");

document.addEventListener('click', hello);
function hello() {
    document.getElementById("h1").innerText = "The most affordable learning platform";
}