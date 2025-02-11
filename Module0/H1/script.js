'use strict';

const themaKnop = document.getElementById('themaKnop');
const body = document.body;

themaKnop.addEventListener('click', () => {
    const isDonker = body.style.backgroundColor === 'black';

    // Wissel kleuren
    body.style.backgroundColor = isDonker ? 'white' : 'black';
    body.style.color = isDonker ? 'black' : 'white';

    //Verander link kleur
    const links = document.getElemantsByTagName('a');
    for (let link of links) {
        link.style.color = isDonker ? 'blue' : 'lightblue';
    }

    //Update knop tekst
    themaKnop.textContent = isDonker ? 'Donker thema' : 'Licht thema';

});