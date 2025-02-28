const maakBestelling = (drank = "cola", snack = "chips") => ({
    drank,
    snack,
    timestamp: new Date().toLocaleString()
});

// Bestellingen maken
const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling("fanta");
const bestelling3 = maakBestelling("sprite", "nootjes");

// Bestellingen tonen op de webpagina
const output = document.getElementById("output");

output.innerHTML = `
    <p><strong>Bestelling 1:</strong> Drank: ${bestelling1.drank}, Snack: ${bestelling1.snack}, Tijd: ${bestelling1.timestamp}</p>
    <p><strong>Bestelling 2:</strong> Drank: ${bestelling2.drank}, Snack: ${bestelling2.snack}, Tijd: ${bestelling2.timestamp}</p>
    <p><strong>Bestelling 3:</strong> Drank: ${bestelling3.drank}, Snack: ${bestelling3.snack}, Tijd: ${bestelling3.timestamp}</p>
`;



