//linken aan html classes
let quoteShow = document.querySelector(".quoteShow");
let byShow = document.querySelector(".byShow");
//quotes in de lijst zetten
const quotes = [

{
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    by: "- Chris Pine"
},
{
    quote: "Java is to JavaScript what car is to Carpet.",
    by: "- Chris Heilmann"
},
{
    quote: "The question of whether computers can think is like the question of whether submarines can swim.",
    by: "- Unknown"
},
{
    quote: "First, solve the problem. Then, write the code.",
    by: "- John Johnson"
}
];
//random quote kiezen
let quotePicker = Math.floor(Math.random() * quotes.length);
let quoteChooser = quotes[quotePicker];
//quotes in html zetten
quoteShow.innerHTML = quoteChooser.quote;
byShow.innerHTML = quoteChooser.by;
//zorgen dat de quote die aan staat niet gekozen wordt
let quoteNotAgain = quoteChooser.quote;

const quoteBtn = document.querySelector(".quoteButton");
quoteBtn.addEventListener('click', function(){
    //opnieuw een random quote kiezen
    for(; quoteNotAgain == quoteChooser.quote;){
        quotePicker = Math.floor(Math.random() * quotes.length);
        quoteChooser = quotes[quotePicker];
    }
    //quote in html afbeelden
    quoteShow.innerHTML = quoteChooser.quote;
    byShow.innerHTML = quoteChooser.by;
    quoteNotAgain = quoteChooser.quote;
})