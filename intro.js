/**
 * Name: Drishya Nair
 * Date: May 15, 2025
 * 
 * This file contains the javscript code for the intro page of the website.
 */

"use strict";
(function() {

    let numOfCards;
    let gameMode;
    let difficulty;

    let player1Name;
    let player2Name;

    const cardCounter = document.getElementById("card-count");
    const computerButton = document.getElementById("computer-btn");
    const playerButton = document.getElementById("player-btn");
    const startButton = document.getElementById("start-btn");

    const easyButton = document.getElementById("easy-btn");
    const mediumButton = document.getElementById("medium-btn");
    const hardButton = document.getElementById("hard-btn");
    
    window.addEventListener("load", init);

    function init() {
        cardCounter.addEventListener("change", () => {
            numOfCards = parseInt(cardCounter.value);
        }); 
        computerButton.addEventListener("click", () => {
            gameMode = "computer";
            setUpComputerMode();
        });
        playerButton.addEventListener("click", () => {
            gameMode = "player";
            setUpPlayerMode();
        });
    }

    function setUpComputerMode() {
        hideInitialSetup()
        let computerSetup = document.getElementById("computer-setup");
        computerSetup.classList.remove("hidden");
        easyButton.addEventListener("click", () => {
            difficulty = "easy";
            startButton.classList.remove("hidden");
        });
        mediumButton.addEventListener("click", () => {
            difficulty = "medium";
            startButton.classList.remove("hidden");
        });
        hardButton.addEventListener("click", () => {
            difficulty = "hard";
            startButton.classList.remove("hidden");
        });
        startButton.addEventListener("click", startComputerGame);
    }

    function setUpPlayerMode() {
        hideInitialSetup()
        let playerSetup = document.getElementById("player-setup");
        playerSetup.classList.remove("hidden");
        startButton.classList.remove("hidden");
        startButton.addEventListener("click", startPlayerGame);
    }

    function hideInitialSetup() {
        let initialSetup = document.getElementById("initial-setup");
        initialSetup.classList.add("hidden");
    }

    function startPlayerGame() {
        console.log("test start player game");
        player1Name = document.getElementById("player1-name").value;
        player2Name = document.getElementById("player2-name").value;
        console.log("Player 1 Name: " + player1Name);
        console.log("Player 2 Name: " + player2Name);
        window.location.href = "game.html";
    }

    function startComputerGame() {
        player1Name = "You";
        player2Name = "Computer";
        window.location.href = "game.html";
    }

})();  