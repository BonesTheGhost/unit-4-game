/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("*** game.js attached! ***");

// ===== VARIABLES =====
crystal1Value = 0;
crystal2Value = 0;
crystal3Value = 0;
crystal4Value = 0;

//For when the game starts so each round is different
roundScore = 0;

//For the computer, so the player has a target to aim for
computerRandomStart = 0;

//A control value for re-using the generateRandom() function for the players starting score,
//the computers starting score, AND the values of the crystals.
randomControl = 0;

//game data
playerWins = 0;
playerLosses = 0;
roundScore = 0;
playerTotal = 0;




// ===== ===== =====

//Initialize Random Number (between ## and ##)
function generateRandom() {
    if (randomControl === 0) {
        //For the computers starting score.
        temporaryRandom = Math.floor((Math.random() * 50) + 20);

        //Set the randomControl to 1, so that the player's score can be created.
        randomControl = 1;
        return temporaryRandom;
    }
    else if (randomControl === 1) {
        //For the player's starting score.
        temporaryRandom = Math.floor((Math.random() * 10) + 1);

        //Set the randomControl to 2, so the crystals can be charged.
        randomControl = 2;
        return temporaryRandom;
    }
    else {
        //For the crystals.
        temporaryRandom = Math.floor((Math.random() * 10) + 1);

        //Set the randomControl back to default of 0 so that the whole game can run again.
        randomControl = 0;
        return temporaryRandom;
    }
}



function chargeCrystals() {

    //Setting randomControl back to 2 to counteract the exit condition of randomControl.
    crystal1Value = generateRandom();
    randomControl = 2;
    console.log("Crystal1 current value: ", crystal1Value);

    crystal2Value = generateRandom();
    randomControl = 2;
    console.log("Crystal2 current value: ", crystal2Value);

    crystal3Value = generateRandom();
    randomControl = 2;
    console.log("Crystal3 current value: ", crystal3Value);

    crystal4Value = generateRandom();
    //no randomControl reset here so the next game runs properly.
    console.log("Crystal4 current value: ", crystal4Value);
}



function initializePlayerScore() {
    roundScore = generateRandom();
    console.log("Player Start Score [RANDOM]: ", roundScore);

    $("#scoreArea").text(roundScore);
}



function initializeComputerScore() {
    computerRandomStart = generateRandom();
    console.log("Computer Start Score [RANDOM]: ", computerRandomStart);

}



function checkForWin() {
    if (roundScore === computerRandomStart) {
        console.log("Player Wins");

        $("#alertArea").text(" [  YOU WIN!   ] ");

        //Record the players new total score.
        playerTotal += roundScore;
        $("#totalArea").text(playerTotal);

        playerWins += 1;
        $("#winsArea").text(playerWins);

        //Re-run the game.
        initializeComputerScore();
        initializePlayerScore();
        chargeCrystals();
    }
    else if (roundScore < computerRandomStart) {
        console.log("Oooh, almost there!!");
    }
    else {
        playerLosses += 1;
        $("#lossesArea").text(playerLosses);
        console.log("*** LOSS RECORDED ***");

        //Re-run the game
        initializeComputerScore();
        initializePlayerScore();
        chargeCrystals();
    }
}

// ===== FUNCTION CALLS =====
//ORDER MATTERS HERE FORE RANDOMIZATION. (1)COMPUTER -- 0 by default;
// (2) PLAYER -- 1; (3) CRYSTALS -- 2;
initializeComputerScore();
initializePlayerScore();
chargeCrystals();


// ===== ===== =====





$(document).ready(function () {

    $("#scoreArea").text(roundScore);
    $("#totalArea").text(playerTotal);
    $("#alertArea").text(" [ Results Area ] ");

    $("#winsArea").text(playerWins);
    $("#lossesArea").text(playerLosses);

    $("#crystal1").on("click", function () {
        console.log("[CLICKED] -- Light Blue Crystal");

        roundScore += crystal1Value;
        $("#scoreArea").text(roundScore);
        console.log("roundScore Updated: ", roundScore);

        checkForWin();
    });

    $("#crystal2").on("click", function () {
        console.log("[CLICKED] -- Green Crystal");

        roundScore += crystal2Value;
        $("#scoreArea").text(roundScore);
        console.log("roundScore Updated: ", roundScore);

        checkForWin();
    });

    $("#crystal3").on("click", function () {
        console.log("[CLICKED] -- Purple Crystal");

        roundScore += crystal3Value;
        $("#scoreArea").text(roundScore);
        console.log("roundScore Updated: ", roundScore);

        checkForWin();
    });

    $("#crystal4").on("click", function () {
        console.log("[CLICKED] -- Red Crystal");

        roundScore += crystal4Value;
        $("#scoreArea").text(roundScore);
        console.log("roundScore Updated: ", roundScore);

        checkForWin();
    });




});
