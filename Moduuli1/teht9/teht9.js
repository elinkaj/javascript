'use strict';

const luku = prompt('Syötä kokonaisluku.');

let alkuluku = 'on';

for (let i = 2; i < luku; i++) {
    const jakojaanos = luku % i;
    if (jakojaanos === 0){
    alkuluku = 'ei ole';
    break;
    }
}
document.querySelector('#kohde').innerHTML = `${luku} ${alkuluku} alkuluku`;