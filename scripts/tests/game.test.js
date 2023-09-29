/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");


// Load index.html file into Jests mockDOM. Set up DOM before all of tests are run
beforeAll(() => {
    // Install the fs library
    let fs = require("fs");
    // Read contents of index.html file and store in a variable
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // Open the document
    document.open();
    // Write the file contents to it
    document.write(fileContents);
    // Close the document
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    // Set up the game state with some fake values to see if the new game function resets them
    beforeAll(() => {
        //Set the score to 42/add fake info and then call the newGame function
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should clear the player moves array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});