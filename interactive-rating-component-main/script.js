/* declare variables for rating elements */
const rate1 = document.getElementById("rate1");  
const rate2 = document.getElementById("rate2");
const rate3 = document.getElementById("rate3");
const rate4 = document.getElementById("rate4");
const rate5 = document.getElementById("rate5");
/* select all rating elements, create an array and declare a variable */
const ratings = Array.from(document.querySelectorAll("li"));
/* default rating variable */
let rating = null;
/* submit button variable */
const submit = document.querySelector("button");
/* initial state box variable*/
const initialScreen = document.getElementById("initial")
/* variable for screen after sibmitting feedback */
const completedScreen = document.getElementById("completed");

//some more refactoring should be done for setting #fb7413 colour and getting innerHTML
/* first rating element functionality */
rate1.addEventListener("click", function(){ //on first rating elelemt click
    ratings.forEach(r => r.style.backgroundColor = ""); //set default color for all rating elements
    rate1.style.backgroundColor = "#fb7413"; //set color for the cxlicked on rating element
    rating = rate1.innerHTML; //get rating element innerHTML and save value in a variable
});
/* second rating element fuunctionality */
rate2.addEventListener("click", function(){
    ratings.forEach(r => r.style.backgroundColor = "");
    rate2.style.backgroundColor = "#fb7413";
    rating = rate2.innerHTML;
});
/* third rating element fuunctionality */
rate3.addEventListener("click", function(){
    ratings.forEach(r => r.style.backgroundColor = "");
    rate3.style.backgroundColor = "#fb7413";
    rating = rate3.innerHTML;
});
/* fourth rating element fuunctionality */
rate4.addEventListener("click", function(){
    ratings.forEach(r => r.style.backgroundColor = "");
    rate4.style.backgroundColor = "#fb7413";
    rating = rate4.innerHTML;
});
/* fifth rating element fuunctionality */
rate5.addEventListener("click", function(){
    ratings.forEach(r => r.style.backgroundColor = "");
    rate5.style.backgroundColor = "#fb7413";
    rating = rate5.innerHTML;
});
/* submit button functionality */
submit.addEventListener("click", function(){ //on submit button click event
    initialScreen.style.display = "none"; //hide initial screen (box)
    completedScreen.style.display = "flex"; //show completed screen (box)
    document.getElementById("given-rating").innerHTML = `You selected ${rating} out of 5`; //display rating out of 5
});