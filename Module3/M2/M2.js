// Functie om score te verwerken
const verwerkScore = (naam = "Onbekend", score = 0) => {
    // Valideer naam en score
    if (naam.trim() === "") {
        alert("Naam mag niet leeg zijn!");
        return null;
    }

    if (isNaN(score) || score < 0) {
        alert("Score moet een geldig getal zijn en mag niet negatief zijn!");
        return null;
    }

    // Return het scoreobject als de input geldig is
    return { naam, score };
};

// Functie om de score toe te voegen en weer te geven
const voegScoreToe = () => {
    const playerName = document.getElementById("playerName").value;
    const score = parseInt(document.getElementById("score").value);

    const scoreObject = verwerkScore(playerName, score);

    // Als de score valid is, voeg deze toe aan het scorebord
    if (scoreObject) {
        // Haal het scorebord op en voeg de nieuwe score toe
        const scoreBoard = document.getElementById("scoreBoard");
        const scoreElement = document.createElement("p");
        scoreElement.innerText = `${scoreObject.naam}: ${scoreObject.score}`;
        scoreBoard.appendChild(scoreElement);
    }

    // Reset de invoervelden
    document.getElementById("playerName").value = "";
    document.getElementById("score").value = "";
};
