'use strict'

const lomake = document.querySelector('form');
const tulokset = document.querySelector('#tulokset');

lomake.addEventListener('submit', async function(event){
    event.preventDefault();
    tulokset.innerHTML = '';
    const hakusana = document.querySelector('#query').value;
    const vastaus = await fetch(
        `https://api.tvmaze.com/search/shows?q=${hakusana}`);
    const sarjat = await vastaus.json();
    for(const sarja of sarjat) {
        console.log(sarja.show);
        const artikkeli = document.createElement('article');
        const otsikko = document.createElement('h3');
        otsikko.innerText = sarja.show.name;

        //kuva
        const kuva = document.createElement('img');
        kuva.src = sarja.show.image? sarja.show.image.medium : 'https://placekitten.com/210/295';
        kuva.alt = sarja.show.name;

        //html näkyviin
        artikkeli.appendChild(otsikko);
        artikkeli.appendChild(kuva);
        tulokset.appendChild(artikkeli);
    }
});