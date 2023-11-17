'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const kohde = document.querySelector('#target');

for (const student of students) {
  const option = document.createElement('option');
  option.value = student.id;
  option.innerText = student.name;
  kohde.appendChild(option);
}