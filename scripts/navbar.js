document.addEventListener("DOMContentLoaded", function() {
    const page = window.location.pathname.split("/").pop();
    const navbarPath = page === "index.html" || page === "" ? "./pages/navbar.html" : "../pages/navbar.html";

    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            if (page === "index.html" || page === "") {
                const navbarLinks = document.querySelectorAll('.navbar a');
                navbarLinks.forEach(link => {
                    link.href = link.href.replace("../", "./");
                });

                const dropdownLinks = document.querySelectorAll('.dropdown-content a');
                dropdownLinks.forEach(link => {
                    link.href = link.href.replace("../", "./");
                });
            }

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
