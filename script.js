function rollDice() {

    return Math.floor(Math.random() * 6) + 1;

}

document.getElementById('roll-button').addEventListener('click', () => {

    const playerRoll = rollDice();

    const computerRoll = rollDice();

    // Update dice visuals

    document.getElementById('player-dice').textContent = `🎲 ${playerRoll}`;

    document.getElementById('computer-dice').textContent = `🎲 ${computerRoll}`;

    // Display result

    const result = document.getElementById('result');

    if (playerRoll > computerRoll) {

        result.textContent = "You win! 🎉";

    } else if (playerRoll < computerRoll) {

        result.textContent = "Computer wins! 😞";

    } else {

        result.textContent = "It's a tie! 🤝";

    }

});