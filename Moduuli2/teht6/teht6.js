'use strict';

function heita() {
    const arvottu = Math.floor(Math.random() * 6) + 1;
    return arvottu;
}

const arvotutLuvut = [];

let silmaluku = 0;

while (silmaluku !== 6) {
    silmaluku = heita();
    arvotutLuvut.push(silmaluku);
}

let htmlKoodi = `<ul>`;
for (let alkio of arvotutLuvut) {
    htmlKoodi += `<li> ${alkio} </li>`;
}
htmlKoodi += `</ul>`;

const tpaikka = document.querySelector('#jstulostus');

tpaikka.innerHTML += htmlKoodi;

