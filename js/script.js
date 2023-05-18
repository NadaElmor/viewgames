"use strict";
import * as allGames from "./games.js";
import * as allUi from "./ui.js";

//display all games when page load
let rg = new allGames.returnGamesinfo();

let category = "MMORPG".toLowerCase();
let responseAllGames = await rg.returnGames(category);

let g = new allUi.games();
g.dispalyAllGames(responseAllGames);

//choose by category
let selectedGame = document.querySelectorAll("#nav-bar .navbar li a");
for (let i = 0; i < selectedGame.length; i++) {
  selectedGame[i].addEventListener("click", async function () {
    //get games
    category = selectedGame[i].innerHTML.toLowerCase();
    responseAllGames = await rg.returnGames(category);
    g.dispalyAllGames(responseAllGames);
    //change color
    if (i != 0) {
      selectedGame[i].classList.remove("blue-color");
      selectedGame[0].classList.add("text-white");
    } else {
      selectedGame[i].classList.remove("text-white");
      selectedGame[i].classList.add("blue-color");
    }
  });
}

//click on a game
let chosenGame = document.querySelectorAll("#main-content .item");
for (let i = 0; i < chosenGame.length; i++) {
  chosenGame[i].addEventListener("click", async function (e) {
    // console.log(responseAllGames[i]);

    let id = responseAllGames[i].id;
    let responseGame = await rg.detailsOfGame(id);
    // console.log(responseGame);
    g.displayGame(responseGame);
  });
}

//close icon
document
  .querySelector("#details .colse-icon")
  .addEventListener("click", function () {
    g.closeDetailsSection();
  });

//change navbar when scroll
let x = document.querySelector("#main-content");

let navbar = document.querySelector("#nav-bar");
document.addEventListener("scroll", function () {
  console.log(navbar.scrollHeight);
  console.log(window.scrollY);
  if (navbar.scrollHeight <= window.scrollY) {
    document.querySelector(".navbar").classList.add("fixed-top");
  } else {
    document.querySelector(".navbar").classList.remove("fixed-top");
  }
});
