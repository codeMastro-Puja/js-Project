document.getElementById("checkButton").addEventListener
("click",function(){
//select where to display the results
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";
//get the value from the input
const ageValue = parseInt (document.getElementById("ageInput").value);

if(isNaN(ageValue) || ageValue < 0){
    resultDiv.innerHTML = "Please enter a valid age";
    return;
}
//check for vote
if(ageValue >= 18){
    resultDiv.innerHTML += "You are eligible to vote.<br>";
}
else{
    resultDiv.innerHTML += "You are not eligible to vote.<br>";
}

//check for alcohol
if(ageValue >= 21){
    resultDiv.innerHTML += "You are eligible to drink alcohol.<br>";
}
else{
    resultDiv.innerHTML += "You are not eligible to drink alcohol.<br>";
}

//check for drive
if(ageValue >= 16){
    resultDiv.innerHTML += "You are eligible to drive.<br>";
}
else{
    resultDiv.innerHTML += "You are not eligible to drive.<br>";
}

});