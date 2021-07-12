function test(name, expected, actual) {
    if (expected === actual) {
        console.log(name + "\nTest passed.Expected:" + expected + " is equal to actual: " + actual + ",")
    } else {
        console.log(name + "\nTest Failed.Expected:" + expected + " is  not equal actual: " + actual + ",")

    }
}




function rps(player1, player2) {
    if (player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if (player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "s") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if (player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

test("p1:blah, p2:rock", "Player 1 made an invalid selection.", rps("b", "s"))


// // rock

// test("p1:rock, p2:rock", "Tie", rps("r", "r"))
// test("p1:rock, p2:paper", "Paper beats rock. Player 1 wins.", rps("r", "p"))
// test("p1:rock, p2:scissor", "Rock beats scissors. Player 1 wins.", rps("r", "s"))
// test("p1:rock, p2:blah", "Player 2 made an invalid selection.", rps("r", "b"))




// // paper
// test("p1:paper, p2:rock", "Paper beats rock. Player 2 wins.", rps("p", "r"))
// test("p1:paper, p2:paper", "Tie", rps("p", "p"))
// test("p1:paper, p2:scissor", "Scissors beat paper. Player 2 wins.", rps("p", "s"))
// test("p1:paper, p2:blah", "Player 2 made an invalid selection.", rps("p", "b"))




// scissor
test("p1:scissor, p2:rock", "Rock beats scissors. Player 2 wins.", rps("s", "r"))
test("p1:scissor, p2:paper", "scissor beats paper. player 1 wins", rps("s", "p"))
test("p1:scissor, p2:scissor", "Tie", rps("s", "s"))
test("p1:scissor, p2:blah", "Player 2 made an invalid selection.", rps("s", "b"))