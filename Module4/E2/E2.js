class Product {
    constructor(naam, prijs, voorraad) {
        this.naam = naam;
        this._prijs = 0; // privé
        this._voorraad = 0; // privé

        // Setters
        this.prijs = prijs;
        this.voorraad = voorraad;
    }

    get prijs() {
        return this._prijs;
    }

    set prijs(value) {
        if (value >= 0) {
            this._prijs = value;
        } else {
            console.warn(`Negatieve prijs niet toegestaan voor ${this.naam}`);
            this._prijs = 0;
        }
    }

    get voorraad() {
        return this._voorraad;
    }

    set voorraad(value) {
        if (value >= 0) {
            this._voorraad = value;
        } else {
            console.warn(`Negatieve voorraad niet toegestaan voor ${this.naam}`);
            this._voorraad = 0;
        }

    }
    get verkoopprijs() {
        return this._prijs * 1.21;
    }
    get beschikbaar() {
        return this.voorraad > 0;
    }

    // Methode om productinformatie weer te geven
    toonInfo() {
        return `
        <div class="product-card">
            <h2>${this.naam}</h2>
            <p>Inkoopprijs: <span class="price">€${this.prijs.toFixed(2)}</span></p>
            <p>Verkoopprijs (incl. BTW): <span class="price">€${this.verkoopprijs.toFixed(2)}</span></p>
            <p>Voorraad: ${this.voorraad} stuks</p>
            <p>Status: <span class="${this.beschikbaar ? 'available' : 'unavailable'}">
                ${this.beschikbaar ? 'Op voorraad' : 'Niet op voorraad'}
            </span></p>
        </div>
    `;
    }


}

const product1 = new Product("iPhone SE")
product1.prijs = 450;
product1.voorraad = 50;

const product2 = new Product("Samsung 5")
product2.prijs = 200;
product2.voorraad = 50;

const product3 = new Product("Xiaomi");
product3.prijs = 100;
product3.voorraad = 50;

const outputDiv = document.getElementById('output');
outputDiv.innerHTML = product1.toonInfo() + "<hr>" + product2.toonInfo() + "<hr>" + product3.toonInfo() + "<hr>";
