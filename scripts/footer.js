
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <div class="footer">
            <a href="../pages/about_us.html" id="about">Sobre Nosotros</a>
            <p>&copy; Mass Muscle. Todos los derechos reservados.</p>
        </div>
    `;

    document.getElementById('footer').innerHTML = footerHTML;
});

