document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.addbutton');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find(product => product.name === productName);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartCount();
        });
    });

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        document.getElementById('cart-count').textContent = totalItems;
    }

    updateCartCount();
});