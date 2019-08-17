/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("*** game.js attached! ***");


//Initialize Random Number (between 1 and 26)
computerRandomInt = Math.floor((Math.random() * 25) + 1);
console.log("Random Number = ", computerRandomInt)


$(document).ready(function () {

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
