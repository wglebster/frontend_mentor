const rate1 = document.getElementById("rate1");
const rate2 = document.getElementById("rate2");
const rate3 = document.getElementById("rate3");
const rate4 = document.getElementById("rate4");
const rate5 = document.getElementById("rate5");
let rating = null;
const submit = document.querySelector("button");
const initialScreen = document.getElementById("initial")
const completedScreen = document.getElementById("completed");

rate1.addEventListener("click", function(){
    rate1.style.backgroundColor = "#fb7413";
    rate2.style.backgroundColor = "";
    rate3.style.backgroundColor = "";
    rate4.style.backgroundColor = "";
    rate5.style.backgroundColor = "";
    rating = rate1.innerHTML;
});
rate2.addEventListener("click", function(){
    rate2.style.backgroundColor = "#fb7413";
    rate1.style.backgroundColor = "";
    rate3.style.backgroundColor = "";
    rate4.style.backgroundColor = "";
    rate5.style.backgroundColor = "";
    rating = rate2.innerHTML;
});
rate3.addEventListener("click", function(){
    rate3.style.backgroundColor = "#fb7413";
    rate2.style.backgroundColor = "";
    rate1.style.backgroundColor = "";
    rate4.style.backgroundColor = "";
    rate5.style.backgroundColor = "";
    rating = rate3.innerHTML;
});
rate4.addEventListener("click", function(){
    rate4.style.backgroundColor = "#fb7413";
    rate2.style.backgroundColor = "";
    rate3.style.backgroundColor = "";
    rate1.style.backgroundColor = "";
    rate5.style.backgroundColor = "";
    rating = rate4.innerHTML;
});
rate5.addEventListener("click", function(){
    rate5.style.backgroundColor = "#fb7413";
    rate2.style.backgroundColor = "";
    rate3.style.backgroundColor = "";
    rate4.style.backgroundColor = "";
    rate1.style.backgroundColor = "";
    rating = rate5.innerHTML;
});

submit.addEventListener("click", function(){
    initialScreen.style.display = "none";
    completedScreen.style.display = "flex";
    document.getElementById("given-rating").innerHTML = "You selected " + rating + " out of 5";
});




/* function changeColor(e){
    e.target.style.background = "#fb7413";
}

let ratings = document.getElementsByTagName("li");
for (let i = 0; i < ratings.length; i++) {
    ratings[i].style.backgroundColor = changeColor;
}; */