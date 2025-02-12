let naam = prompt("Wat is je naam?");
let score = 0;

let vraag1 = prompt("Wat is de output van: console.log(typeof []);?");
if (vraag1.toLowerCase().includes("object")) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: object");
}

let vraag2 = prompt("Welke van de volgende is GEEN programmeertaal?");
if (vraag2.toLowerCase().includes("HTML")) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: HTML");
}

let vraag3 = prompt("Wat is het nieuwe keyword voor variabelen in JS?");
if (vraag3.toLowerCase().includes("let")) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: let");
}

alert(`${naam}, je hebt ${score} van de 3 vragen correct beantwoord!`);
