/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("*** game.js attached! ***");

// ===== VARIABLES =====
crystal1Value = 0;
crystal2Value = 0;
crystal3Value = 0;
crystal4Value = 0;

//For when the game starts so each round is different
playerRandomStart = 0;

//For the computer, so the player has a target to aim for
computerRandomStart = 0;

//game data
playerWins = 0;
playerLosses = 0;
playerTotal = 0;



// ===== ===== =====

//Initialize Random Number (between 1 and 26)
function generateRandom() {
    temporaryRandom = Math.floor((Math.random() * 25) + 1);
    return temporaryRandom;
}

function chargeCrystals() {
    crystal1Value = generateRandom();
    console.log("Crystal1 current value: ", crystal1Value);

    crystal2Value = generateRandom();
    console.log("Crystal2 current value: ", crystal2Value);

    crystal3Value = generateRandom();
    console.log("Crystal3 current value: ", crystal3Value);

    crystal4Value = generateRandom();
    console.log("Crystal4 current value: ", crystal4Value);
}

function initializePlayerScore() {
    playerRandomStart = generateRandom();
    console.log("Player Start Score [RANDOM]: ", playerRandomStart);
}

function initializeComputerScore() {
    computerRandomStart = generateRandom();
    console.log("Computer Start Score [RANDOM]: ", computerRandomStart);
}

chargeCrystals();
initializePlayerScore();
initializeComputerScore();

$(document).ready(function () {

    $("#scoreArea").text(playerRandomStart);

    $("#crystal1").on("click", function () {
        console.log("[CLICKED] -- Light Blue Crystal");
    });

    $("#crystal2").on("click", function () {
        console.log("[CLICKED] -- Green Crystal");
    });

    $("#crystal3").on("click", function () {
        console.log("[CLICKED] -- Purple Crystal");
    });

    $("#crystal4").on("click", function () {
        console.log("[CLICKED] -- Red Crystal");
    });

});
