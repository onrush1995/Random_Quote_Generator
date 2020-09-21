/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const { get } = require("https");

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 *
 * `quotes` array 
 * Richness is not having many belongings, but richness is contentment of the soul. Mohammad (Pbuh)
 * Raise your words, not voice. It is rain that grows flowers, not thunder. -Rumi
 * You have to keep breaking your heart until it opens. -Rumi
 * "The best revenge is massive success." -- Frank Sinatra
 * "Start where you are. Use what you have. Do what you can." -- Arthur Ashe
 * "The two most important days in your life are the day you are born and the day you find out why." -- Mark Twain
 * "Success is the sum of small efforts, repeated day-in and day-out."- Robert Collier
 * "A dream doesn't become reality through magic; it takes sweat, determination, and hard work."-Colin Powell
 * "The successful warrior is the average man, with laser-like focus." -- Bruce Lee
 * "As we look ahead into the next century, leaders will be those who empower others." -- Bill Gates
 * "Many of life's failures are people who did not realize how close they were to success when they gave up." -- Thomas A. Edison
 * "If you can't explain it simply, you don't understand it well enough."
- Albert Einstein

***/

const quotes = [
  {
    quote : "Richness is not having many belongings, but richness is contentment of the soul.", 
    by : "-- Mohammad (Pbuh)"
  },
  {
    quote : "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    by : "-- Rumi"
  },
  {
    quote : "You have to keep breaking your heart until it opens.",by : "-- Rumi"
  },
  {
    quote : "The best revenge is massive success.",
    by : "-- Frank Sinatra"
  },
  {
    quote : "Start where you are. Use what you have. Do what you can.",
    by : "-- Arthur Ashe"
  },
  {
    quote : "The two most important days in your life are the day you are born and the day you find out why.",
    by : "-- Mark Twain"
  },
  {
    quote : "Success is the sum of small efforts, repeated day-in and day-out.",
    by : "--Robert Collier"
  },
  {quote : "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
  by : "--Colin Powell"
  },
  {
    quote : "The successful warrior is the average man, with laser-like focus.",
    by : "-- Bruce Lee"
  },
  {
    quote : "As we look ahead into the next century, leaders will be those who empower others.",
    by : "-- Bill Gates"
  },
  {
    quote : "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    by : "-- Thomas A. Edison"
  },
  {
    quote : "If you can't explain it simply, you don't understand it well enough.",
    by : "-- Albert Einstein"}
];

/***
 * `getRandomQuote` function
 * @function will print by the length of the array 
***/
let getRandomQuote =()=> Math.floor((Math.random()*quotes.length) - 1) + 1;

/***
 * @function printQuote
 * @function get single item form the object
***/
const randomQuote = quotes[getRandomQuote()];

//Turning object into an array
const array = Object.values(randomQuote);

for (const element of array) {
  console.log(element);
}








/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);