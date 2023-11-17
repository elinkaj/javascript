'use strict';
const names = ['John', 'Paul', 'Jones'];

for (const name of names) {
    const html =`<li>${name}</li>`;
    document.querySelector('#target').innerHTML += html;
}