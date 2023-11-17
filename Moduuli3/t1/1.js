document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.getElementById('target');

    if (targetElement) {
        targetElement.innerHTML = `
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        `;

    }  else {
        console.error('Elementtiä kyseisellä id ei löytynyt.');
    }
});
