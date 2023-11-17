const targetElement = document.getElementById('target');

if (targetElement) {
    const firstItem = document.createElement('li');
    firstItem.textContent = 'First item';
    targetElement.appendChild(firstItem);

    const secondItem = document.createElement('li');
    secondItem.textContent = 'Second item';
    targetElement.appendChild(secondItem);

    const thirdItem = document.createElement('li');
    thirdItem.textContent = 'Third item';
    targetElement.appendChild(thirdItem);

    secondItem.classList.add('my-item');
}