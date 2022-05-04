/* const rate1 = document.getElementById("1st");
const rate2 = document.getElementById("2nd");
const rate3 = document.getElementById("3rd");
const rate4 = document.getElementById("4th");
const rate5 = document.getElementById("5th");

 function changeColor(){
    document.target.style.backgroundColor = "#fb7413";
} 

rate1.addEventListener("click", changeColor);
rate2.addEventListener("click", changeColor);
rate3.addEventListener("click", changeColor);
rate4.addEventListener("click", changeColor);
rate5.addEventListener("click", changeColor); */
/* function changeColor(e){
    e.target.style.background = "#fb7413";
}

let ratings = document.getElementsByTagName("li");
for (let i = 0; i < ratings.length; i++) {
    ratings[i].style.backgroundColor = changeColor;
}; */
const ids = ["rate1", "rate2", "rate3", "rate4", "rate5"];
const ratings = [];
ids.forEach(function(id){
    ratings.push(document.getElementById(id));
});

const changeColor = (e) => {
    e.target.style.backgroundColor = "fb7413";
};

let eventAssignment = (rating) => {
    rating.onclick = function(){
        changeColor(e);
    }
};
