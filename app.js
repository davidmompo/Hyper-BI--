const container = document.getElementById('cards-container');
const searchInput = document.getElementById('functionSearch');

// Crear tarjetas
daxFunctions.forEach(func => {

    const card = document.createElement('div');
    card.className = 'card';

    // ⚠️ Quitamos func.syntax del innerHTML
    card.innerHTML = `
        <div class="inner">
            <div class="front">
                <div class="func-title">${func.name}</div>
                <div class="description">${func.description}</div>
            </div>
            <div class="back">
                <button class="copy-btn">Copiar</button>
                <div class="syntax-text"></div>
            </div>
        </div>
    `;

    // 🔥 Insertamos la sintaxis correctamente
    const syntaxElement = card.querySelector('.syntax-text');
    syntaxElement.textContent = func.syntax;

    container.appendChild(card);
});


// Botón copiar
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        const formula = btn.nextElementSibling.textContent.trim();
        navigator.clipboard.writeText(formula);

        btn.textContent = '¡Copiado!';
        setTimeout(() => btn.textContent = 'Copiar', 1500);
    });
});


// Buscador en tiempo real
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll('.card').forEach(card => {
        const funcName = card.querySelector('.func-title').textContent.toLowerCase();

        if (funcName.includes(query) && query !== "") {
            card.style.boxShadow = '0 0 20px 5px #00ffff, 0 0 40px 10px #00ffff inset';
        } else {
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }
    });
});
