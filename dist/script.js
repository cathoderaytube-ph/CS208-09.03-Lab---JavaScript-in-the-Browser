function myLineUp(event) {
    event.preventDefault();

    // Gather form data
    const statusInput = document.querySelector('input[name="status"]:checked');
    const status = statusInput ? statusInput.value : '';

    const gameDate = document.getElementById('gameDate').value;

    const playerInputs = document.querySelectorAll('input[name="players"]:checked');
    const players = Array.from(playerInputs).map(checkbox => checkbox.value);

    // Print all received data to the console
    console.log("Status:", status);
    console.log("Game Date:", gameDate);
    console.log("Selected Players:", players);

    // Concatenate all information together into one string
    const playersString = players.length > 0 ? players.join(', ') : 'None';
    const combinedString = `Status: ${status} | Date: ${gameDate} | Players: ${playersString}`;

    // Display selections on the web page
    document.getElementById('output').textContent = combinedString;
}

// Attach event listener to the submit button / form
document.getElementById('lineupForm').addEventListener('submit', myLineUp);