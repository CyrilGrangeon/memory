let plateau = document.querySelector("#plateau");
let btnReset = document.querySelector("#reset");
let carteRetournees = [];
let cartesFaces = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14];

function melange(faces){
    faces.sort(() => Math.random()-0.5);
    return faces;
    
}
cartesFaces = melange(cartesFaces);
console.log(cartesFaces);

function creePlateau(cartesFaces, i){

    let newimage = document.createElement("img");
    newimage.setAttribute("id", i+1);
    newimage.setAttribute("data-value", cartesFaces[0]);
    // newimage.setAttribute("src", "images/"+cartesFaces[0] +".png");
    newimage.setAttribute("src", "images/back.png");
    cartesFaces.shift();
    plateau.appendChild(newimage);
    newimage.addEventListener("click",flipCard)
    
}

let carteLength = cartesFaces.length;


for (let i = 0; i < carteLength; i++){
    creePlateau(cartesFaces, i);
}

//mettre la fonction dans une boucle jusqu'à 28 fois en changeant le numero de l'image et en les stockant dans le tableau d'image.

creePlateau();

function flipCard(){
    let clickedCardId = this.getAttribute("id")
    let clickedCardValue = this.getAttribute("data-value")
    this.setAttribute("src", "images/"+clickedCardValue +".png");
    console.log(clickedCardId)
    console.log(clickedCardValue)
}