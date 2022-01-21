let myAge;

const ageBtn = document.querySelector(".ageButton");
ageBtn.addEventListener('click', function() {

    myAge = prompt('Wat is jouw leeftijd?', '15');

    if(myAge >= 21){
        document.body.innerHTML += ("U mag whiskey.");
    } else if(myAge >= 18){
        document.body.innerHTML += ("U mag bier.");
    } else{
        document.body.innerHTML += ("U mag geen bier.");
    }
    //Omwisselen zorgt ervoor dat de enige opties "U mag whiskey." en "U mag geen bier." worden.
});

let myAge2;

const ageBtn2 = document.querySelector(".ageButton2");
ageBtn2.addEventListener('click', function() {

    myAge2 = prompt('Wat is jouw leeftijd?', '15');

    if(myAge2 >= 18 && myAge2 <= 21 && myAge2 != 21){
        document.body.innerHTML += ("U mag bier.");
    } else if(myAge2 >= 21){
        document.body.innerHTML += ("U mag whiskey.");
    } else{
        document.body.innerHTML += ("U mag geen bier.");
    }
});
