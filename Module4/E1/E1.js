class Student {
    constructor(naam) {
        this.naam = naam;
        this.vakken = {};
    }

    voegPuntToe(vak, punt) {
        this.vakken[vak] = punt;
    }

    gemiddelde() {
        const punten = Object.values(this.vakken);
        return punten.reduce((a, b) => a + b, 0) / punten.length;
    }

    toonRapport() {
        return `${this.naam}'s Rapport: ${Object.entries(this.vakken).map(([vak, punt]) => `${vak}: ${punt}`).join(', ')}. Gemiddeld: ${this.gemiddelde().toFixed(2)}`;
    }
}

let studenten = [];

const voegPuntToe = () => {
    const naam = document.getElementById("studentName").value.trim();
    const vak = document.getElementById("vak").value.trim();
    const punt = parseInt(document.getElementById("punt").value);

    if (!naam || !vak || isNaN(punt)) {
        alert("Vul alle velden correct in!");
        return;
    }

    let student = studenten.find(s => s.naam === naam);
    
    if (!student) {
        student = new Student(naam);
        studenten.push(student); // Voeg de nieuwe student toe aan de lijst
    }

    student.voegPuntToe(vak, punt);

    // Reset de velden na het toevoegen van een punt
    document.getElementById("vak").value = "";
    document.getElementById("punt").value = "";
};

const toonRapport = () => {
    if (studenten.length === 0) {
        alert("Er zijn nog geen studenten toegevoegd!");
        return;
    }

    const output = document.getElementById("output");
    output.innerHTML = studenten.map(student => `<p>${student.toonRapport()}</p>`).join('');
};

