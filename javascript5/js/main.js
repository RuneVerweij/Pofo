const timeBtn = document.querySelector(".timeButton");
timeBtn.addEventListener('click', function(){

let today = new Date();

let time = today.getHours();

if(time >= 6 && time < 12){
    console.log("Het is ochtend");
} else if(time >= 12 && time < 18){
    console.log("Het is middag");
} else if(time >= 18 && time < 24){
    console.log("Het is avond");
} else{
    console.log("Het is nacht");
}

//console.log(`${time}`)
});



const timeBtn2 = document.querySelector(".timeButton2");
timeBtn2.addEventListener('click', function(){

let time2;
time2 = prompt("Wat is de tijd?");

if(time2 >= 6 && time2 < 12){
    document.body.innerHTML += ("Het is ochtend");
} else if(time2 >= 12 && time2 < 18){
    document.body.innerHTML += ("Het is middag");
} else if(time2 >= 18 && time2 < 24){
    document.body.innerHTML += ("Het is avond");
} else if(time2 >= 0 && time2 < 6 || time2 == 24){
    document.body.innerHTML += ("Het is nacht");
} else{
    alert("Deze tijd kan niet");
}

//console.log(`${time}`)
});



const btwBtn = document.querySelector(".btwButton");
btwBtn.addEventListener('click', function(){

let priceNoBtw = 100;
let btwPercentage = "HOOG";
let btwNumber;
let priceWithBtw;

if(btwPercentage = "HOOG"){
    btwNumber = 21;
}
else if(btwPercentage = "LAAG"){
    btwNumber = 9;
}
else{
    btwNumber = 0;
}

priceWithBtw = priceNoBtw + (priceNoBtw * (btwNumber / 100));

console.log(`${priceWithBtw}`);
document.body.innerHTML += (`Voor het product van ${priceNoBtw} Euro moet ik met BTW ${btwPercentage} ${btwNumber} Euro BTW betalen dus in totaal ${priceWithBtw} Euro BTW`);
});



const numberBtn = document.querySelector(".numberButton");
numberBtn.addEventListener('click', function(){

let number1 = 20;
let number2 = 30;
console.log(Math.max(number1, number2));

});



const animalBtn = document.querySelector(".animalButton");
animalBtn.addEventListener('click', function(){

    let animalChosen = prompt("Input an animal");
    let animalSound;

    if(animalChosen == "Kikker"){
        animalSound = "Kwaak";
    }
    else if(animalChosen == "Paard"){
        animalSound = "Hinnik";
    }
    else if(animalChosen == "Koe"){
        animalSound = "Loei";
    }
    else if(animalChosen == "Leeuw"){
        animalSound = "Brul";
    }
    else if(animalChosen == "Slang"){
        animalSound = "Slis";
    }
    else if(animalChosen == "Goudvis"){
        animalSound = "Blub";
    }
    else{
        animalSound = "Dit dier staat niet in ons systeem";
    }

    document.body.innerHTML += (`${animalChosen} zegt ${animalSound}`);

});