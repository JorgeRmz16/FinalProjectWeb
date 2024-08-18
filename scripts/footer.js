
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <head>
            <link rel="stylesheet" href="../style/footer.css">
        <head>
        <div class="footer">
            <a href="../pages/about_us.html" id="about">Sobre Nosotros</a>
            <p>&copy; Mass Muscle. Todos los derechos reservados.</p>
        </div>
    `;

    document.getElementById('footer').innerHTML = footerHTML;
});
