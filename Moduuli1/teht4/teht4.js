'use strict'

const nimi = prompt('Kirjoita nimesi');
const arpa = Math.floor(Math.random()* 4) + 1;

console.log(nimi, arpa);
let talo;
switch (arpa) {
    case 1:
        talo = 'Gryffindor';
        break;
    case 2:
        talo = 'Slytherin';
        break;
    case 3:
        talo = 'Hufflepuff';
        break;
    case 4:
        talo = 'Ravenclaw';
        break;
}

const kohde = document.querySelector('#target');
kohde.innerHTML = `${nimi}, olet ${talo}.`;