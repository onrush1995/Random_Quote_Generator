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

let quotes = [
  ["Richness is not having many belongings, but richness is contentment of the soul.", "-- Mohammad (Pbuh)"],
  ["Raise your words, not voice. It is rain that grows flowers, not thunder.","-- Rumi"],
  ["You have to keep breaking your heart until it opens.","-- Rumi"],
  ["The best revenge is massive success.","-- Frank Sinatra"],
  ["Start where you are. Use what you have. Do what you can.","-- Arthur Ashe"],
  ["The two most important days in your life are the day you are born and the day you find out why.","-- Mark Twain"],
  ["Success is the sum of small efforts, repeated day-in and day-out.","--Robert Collier"],
  ["A dream doesn't become reality through magic; it takes sweat, determination, and hard work.","--Colin Powell"],
  ["The successful warrior is the average man, with laser-like focus.","-- Bruce Lee"],
  ["As we look ahead into the next century, leaders will be those who empower others.","-- Bill Gates"],
  ["Many of life's failures are people who did not realize how close they were to success when they gave up.","-- Thomas A. Edison"],
  ["If you can't explain it simply, you don't understand it well enough.","-- Albert Einstein"]
];



/***
 * `getRandomQuote` function
 * @function will print by the length of the array 
***/
const getRandomQuote =()=> Math.floor((Math.random()*quotes.length) - 1) + 1;

console.log(quotes[getRandomQuote()]);





/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);