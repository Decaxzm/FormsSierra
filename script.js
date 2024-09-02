document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const productPanels = document.querySelectorAll('.producto-panel');

    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        productPanels.forEach(panel => {
            const productName = panel.querySelector('h3').textContent.toLowerCase();
            const productDescription = panel.querySelector('p').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                panel.style.display = 'flex'; // Mostrar panel si coincide
            } else {
                panel.style.display = 'none'; // Ocultar panel si no coincide
            }
        });
    });
});