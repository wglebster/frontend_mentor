let rating = document.getElementsByClassName("rating")[i];

function changeColor(){
    switch(rating) {
        case 0: 
        rating[0].style.backgroundColor = "#fb7413";
        break;
        case 1:
        rating[1].style.backgroundColor = "#fb7413";
        break;
        case 2:
        rating[2].style.backgroundColor = "#fb7413";
        break;
        case 3: 
        rating[3].style.backgroundColor = "#fb7413";
        break;
        case 4:
        rating[4].style.backgroundColor = "#fb7413";
        break;
    }



    rating[i].style.backgroundColor = "#fb7413";
}
