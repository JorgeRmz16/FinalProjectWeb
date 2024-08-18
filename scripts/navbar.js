document.addEventListener("DOMContentLoaded", function() {
    fetch('../pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    })
    .catch(error => console.error('Error al cargar la navbar:', error));
    const cartCountElement = document.getElementById('cart-count');

});
