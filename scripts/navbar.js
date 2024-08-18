document.addEventListener("DOMContentLoaded", function() {
    
    fetch('/pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

            const cartCountElement = document.getElementById('cart-count');
            if (cartCountElement) {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const count = cart.reduce((total, item) => total + item.quantity, 0);
                cartCountElement.textContent = count;
            } else {
                console.error('El elemento con ID "cart-count" no se encontró en la navbar.');
            }
        })
        .catch(error => console.error('Error al cargar la navbar:', error));
});
