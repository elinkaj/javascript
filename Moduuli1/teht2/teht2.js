const nimi = prompt('Kirjoita nimesi.');
const tervehdys = `Hei, ${nimi}!`;
console.log(tervehdys);

const elementti = document.querySelector('#tuloste');
elementti.innerHTML = tervehdys;
