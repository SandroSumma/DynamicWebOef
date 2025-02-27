'use strict';

const nav = document.getElementById('mainMenu');
const headings = {
    h1: document.getElementsByTagName('h1'),
    h2: document.getElementsByTagName('h2')
};

// Hoofdmenu maken
const ul = document.createElement('ul');
nav.appendChild(ul);

// Bijhouden welke h1 we laatst hebben gezien
let currentH1Item;

// Door alle h1's en h2's gaan in volgorde
document.querySelectorAll('h1, h2').forEach(heading => {
    if (heading.tagName === 'H1') {
        // Hoofdstuk toevoegen
        const li = document.createElement('li');
        const a = document.createElement('a');

        // ID maken als die er nog niet is
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);

        // Submenu container maken
        const subUl = document.createElement('ul');
        li.appendChild(subUl);

        ul.appendChild(li);
        currentH1Item = li;
    } else if (heading.tagName === 'H2' && currentH1Item) {
        // Subitem toevoegen
        const subUl = currentH1Item.querySelector('ul');
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        subUl.appendChild(li);
    }
});
