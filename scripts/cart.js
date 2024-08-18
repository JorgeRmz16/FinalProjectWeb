document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const confirmationMessage = document.getElementById('confirmation-message');

    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
            cartTotal.textContent = 'Total: $0.00';
            return;
        }

        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="../resources/img/${item.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${item.name}">
                <div class="details">
                    <h2>${item.name}</h2>
                    <p>${item.quantity} x $${item.price.toFixed(2)}</p>
                </div>
                <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-button" data-name="${item.name}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.getAttribute('data-name');
                removeFromCart(productName);
            });
        });
    }

    function removeFromCart(productName) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.name !== productName);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    checkoutButton.addEventListener('click', () => {
        localStorage.removeItem('cart');

        cartItemsContainer.innerHTML = '';
        cartTotal.textContent = 'Total: $0.00';

        confirmationMessage.classList.remove('hidden');
    });

    displayCartItems();
});
