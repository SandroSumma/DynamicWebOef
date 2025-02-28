class Student {
    constructor(naam, vakken = []) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {};
    }

    voegPuntToe(vak, punt) {
        if (!this.vakken.includes(vak)) {
            this.vakken.push(vak);
        }

        this.punten[vak] = punt;
        return `Punt ${punt} toegevoegd voor ${vak}`;
    }

    gemiddelde() {
        let totaal = 0;
        let aantalVakken = 0;

        for (const vak in this.punten) {
            totaal += this.punten[vak];
            aantalVakken++;
        }

        return aantalVakken > 0 ? totaal / aantalVakken : 0;
    }

    toonRapport() {
        let rapport = `<h2>Rapport voor ${this.naam}</h2>`;
        rapport += `<ul>`;

        for (const vak in this.punten) {
            rapport += `<li>${vak}: ${this.punten[vak]}/20</li>`;
        }

        rapport += `</ul>`;
        rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(1)}/20</p>`;

        return rapport;
    }
}

// Creëer studenten
const student1 = new Student("Emma", ["Dynamic Web", "Static Web", "Backend Web"]);
const student2 = new Student("Milan", ["Backend Web", "Dynamic Web"]);

// Voeg punten toe aan de studenten
student1.voegPuntToe("Dynamic Web", 15);
student1.voegPuntToe("Static Web", 14);
student1.voegPuntToe("Backend Web", 17);

student2.voegPuntToe("Dynamic Web", 18);
student2.voegPuntToe("Backend Web", 16);

// Toon rapporten op de pagina
document.getElementById("output").innerHTML = `
    <h1>Studenten Rapporten</h1>
    <h3>${student1.toonRapport()}</h3>
    <h3>${student2.toonRapport()}</h3>
`;
