class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.model} is nu verhuurd.`;
        } else {
            return `${this.model} is al verhuurd.`;
        }
    }

    retourneer() {
        if (!this.beschikbaar) {
            this.beschikbaar = true;
            return `${this.model} is nu beschikbaar.`;
        } else {
            return `${this.model} is al beschikbaar.`;
        }
    }
}

class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.model} (Auto) is nu verhuurd. Het aantal deuren is ${this.aantalDeuren} en het brandstoftype is ${this.brandstofType}.`;
        } else {
            return `${this.model} (Auto) is al verhuurd.`;
        }
    }
}

class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderInhoud, type) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderInhoud = cilinderInhoud;
        this.type = type;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.model} (Motor) is nu verhuurd. Het heeft een cilinderinhoud van ${this.cilinderInhoud}cc en is een ${this.type} motor.`;
        } else {
            return `${this.model} (Motor) is al verhuurd.`;
        }
    }
}

// Maak enkele voertuigen
const voertuigen = [
    new Auto("Toyota", "Corolla", 2020, 50, 4, "Benzine"),
    new Auto("Volkswagen", "Golf", 2019, 60, 5, "Diesel"),
    new Motor("Yamaha", "YZF-R1", 2021, 100, 998, "Sport"),
    new Motor("Honda", "CBR500R", 2020, 75, 471, "Tour")
];

// Voeg voertuigen toe aan de tabel
const voegVoertuigenToe = () => {
    const voertuigLijst = document.getElementById("voertuigLijst");
    voertuigLijst.innerHTML = ''; // Reset de lijst

    voertuigen.forEach((voertuig, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${voertuig.merk}</td>
            <td>${voertuig.model}</td>
            <td>${voertuig.jaar}</td>
            <td>${voertuig.verhuurPrijs} EUR</td>
            <td>${voertuig.beschikbaar ? 'Beschikbaar' : 'Verhuurd'}</td>
            <td>
                <button onclick="verhuurVoertuig(${index})">Verhuur</button>
                <button onclick="retourneerVoertuig(${index})">Retourneer</button>
            </td>
        `;
        voertuigLijst.appendChild(row);
    });
};

// Verhuur een voertuig
const verhuurVoertuig = (index) => {
    const voertuig = voertuigen[index];
    const bericht = voertuig.verhuur();
    document.getElementById("output").innerHTML = bericht;
    voegVoertuigenToe(); // Update de tabel
};

// Retourneer een voertuig
const retourneerVoertuig = (index) => {
    const voertuig = voertuigen[index];
    const bericht = voertuig.retourneer();
    document.getElementById("output").innerHTML = bericht;
    voegVoertuigenToe(); // Update de tabel
};

// Laad de voertuigen in de tabel bij het laden van de pagina
window.onload = voegVoertuigenToe;
