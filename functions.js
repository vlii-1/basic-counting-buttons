const increase = document.getElementById("increase");
const decrease =document.getElementById("decrease");
const reset = document.getElementById("reset");
const countingNumber = document.getElementById("countingNumber");
let number = 0;

increase.onclick = function(){
    number++;
    countingNumber.textContent = number;
}
decrease.onclick = function(){
    number--;
    countingNumber.textContent = number;
}
reset.onclick = function(){
    number = 0;
    countingNumber.textContent = number;
}