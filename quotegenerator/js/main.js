let quoteShow = document.querySelector(".quoteShow");
let byShow = document.querySelector(".byShow");

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
let quotePicker = Math.floor(Math.random() * quotes.length);
let quoteChooser = quotes[quotePicker];

quoteShow.innerHTML = quoteChooser.quote;
byShow.innerHTML = quoteChooser.by;

let quoteNotAgain = quoteChooser.quote;

const quoteBtn = document.querySelector(".quoteButton");
quoteBtn.addEventListener('click', function(){

    quotePicker = Math.floor(Math.random() * quotes.length);
    quoteChooser = quotes[quotePicker];

    for(; quoteNotAgain == quoteChooser.quote;){
    quotePicker = Math.floor(Math.random() * quotes.length);
    quoteChooser = quotes[quotePicker];
    }

    quoteShow.innerHTML = quoteChooser.quote;
    byShow.innerHTML = quoteChooser.by;
    quoteNotAgain = quoteChooser.quote;
})