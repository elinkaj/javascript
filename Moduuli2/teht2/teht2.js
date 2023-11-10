'use strict';

const nimet = [];
const lukumaara = +prompt("Kuinka monta osallistujaa? ");

for (let i = 0; i < lukumaara; i++) {
    let nimi = prompt("Anna osallistujan nimi: ");
    nimet.push(nimi);
}

nimet.sort();

let htmlKoodi = `Osallistujat aakkosjärjestyksessä <br>`;
htmlKoodi += `<ol>`;


for (let arvo of nimet) {
    htmlKoodi += `<li> ${arvo} </li>`;
}

htmlKoodi += `</ol>`;

const tpaikka = document.querySelector('#kohde');
tpaikka.innerHTML = htmlKoodi;