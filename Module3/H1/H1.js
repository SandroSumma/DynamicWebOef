// Arrow function om een speler te maken
const maakSpeler = (naam = "Player 1") => ({
    naam,
    level: 1,
    health: 100
});

// Arrow function om schade toe te voegen aan een speler
const doeSchade = (speler, schade) => {
    speler.health = Math.max(speler.health - schade, 0); // Zorg ervoor dat gezondheid niet onder 0 komt
};

// Arrow function om het level van een speler te verhogen
const levelOmhoog = (speler) => {
    speler.level++;
    speler.health = 100; // Zet gezondheid terug naar 100
};

// Variabele om de speler op te slaan
let speler = null;

// Functie om een nieuwe speler aan te maken
const maakNieuweSpeler = () => {
    const playerName = document.getElementById("playerName").value.trim() || "Player 1"; // Gebruik "Player 1" als de naam leeg is
    speler = maakSpeler(playerName); // Maak een nieuwe speler aan
    toonStats(); // Toon de speler stats
};

// Functie om schade toe te voegen aan de speler
const doeSchadeBijSpeler = () => {
    if (speler) {
        doeSchade(speler, 25); // Voeg 25 schade toe
        toonStats(); // Toon de bijgewerkte stats
    } else {
        alert("Maak eerst een speler!");
    }
};

// Functie om het level van de speler te verhogen
const levelSpelerOp = () => {
    if (speler) {
        levelOmhoog(speler); // Verhoog level van de speler
        toonStats(); // Toon de bijgewerkte stats
    } else {
        alert("Maak eerst een speler!");
    }
};

// Functie om de stats van de speler te tonen
const toonStats = () => {
    if (speler) {
        const statsDiv = document.getElementById("playerStats");
        statsDiv.innerHTML = `
            <h2>Speler Stats</h2>
            Naam: ${speler.naam}<br>
            Level: ${speler.level}<br>
            Gezondheid: ${speler.health}
        `;
    }
};
