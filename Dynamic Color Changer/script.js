// Select the elements

const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const titleEl = document.querySelector(".title");
const resetbtn = document.querySelector(".reset");
const bodyEl = document.querySelector("body");

// add event listeners to the buttons

// console.log(btn1El,btn2El,titleEl,resetbtn);
btn1El.addEventListener('click', function(){
    bodyEl.style.backgroundColor = "green";
});
btn2El.addEventListener('click', ()=>{
    titleEl.style.fontSize  = "90px";
});
resetbtn.addEventListener('click', function(){
    bodyEl.style.backgroundColor = "";
    titleEl.style.fontSize = "30px";
});