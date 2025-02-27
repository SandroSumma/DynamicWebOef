let specialElements = document.querySelectorAll('.special');

specialElements.forEach(element => {
    element.style.color = 'red';
});

let secondP = document.querySelector('.container p:nth-of-type(2)');
if (secondP) {
    secondP.style.textDecoration = 'underline';
}

let output = document.getElementById('output');
output.textContent = `Aantal special elementen: ${specialElements.length}`;

let specialElementsAlt = document.getElementsByClassName('special');
console.log(`Gevonden met getElementsByClassName: ${specialElementsAlt.length}`);
