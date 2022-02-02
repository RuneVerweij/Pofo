//configuratie van de knoppen
const backBtn = document.querySelector(".buttonback");
const nextBtn = document.querySelector(".buttonnext");
//de img die aangewezen wordt
let currentImg = 1;
//de functies van de knoppen
//de "vorige" knop
backBtn.addEventListener('click', function(){
//de img die nu zichtbaar is moet onzichtbaar worden
    document.getElementById(`img${currentImg}`).style.display = "none";
//er is geen img 0 dus we gaan naar de laatste img mogelijk
    if(currentImg == 1){
        currentImg = 5;
    }
    else{
//1 img terug in de lijst
    currentImg = currentImg - 1;
    }
    console.log(currentImg);
//de nieuwe img wordt zichtbaar
    document.getElementById(`img${currentImg}`).style.display = "block";
})
//de "volgende" knop
nextBtn.addEventListener('click', function(){
//de img die nu zichtbaar is moet onzichtbaar worden
    document.getElementById(`img${currentImg}`).style.display = "none";
//er is geen img 6 dus we gaan naar de eerste img mogelijk
    if(currentImg == 5){
        currentImg = 1;
    }
    else{
//1 img naar voren in de lijst
    currentImg = currentImg + 1;
    }
    console.log(currentImg);
//de nieuwe img wordt zichtbaar
    document.getElementById(`img${currentImg}`).style.display = "block";
})