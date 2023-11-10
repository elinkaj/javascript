'use strict';

const numerot = [];
let arvo = +prompt("Anna kokonaisluku, nolla lopettaa: ");

while (arvo !== 0) {
    numerot.push(arvo);
    arvo = +prompt("Anna kokonaisluku, nolla lopettaa: ");
}

numerot.sort((a,b) => a-b);
numerot.reverse();

let htmlKoodi = `<ul>`;

for (let alkio of numerot) {
    htmlKoodi += `<li> ${alkio} </li>`;
}
htmlKoodi += `</ul>`;

const tpaikka = document.querySelector('#kohde');
tpaikka.innerHTML = htmlKoodi;