window.onload = () => {
    const input = document.querySelector('input');

    input.addEventListener('input', (e) => {
        const h2 = document.querySelector('h2');
        h2.textContent = `Hello, ${e.target.value}`;
    });

};