// ...existing code...

// Ajoute une option "Quitter" dans le menu si elle existe et demande confirmation au clic
document.addEventListener('DOMContentLoaded', function () {
    const quitterLink = document.querySelector('a[href="quitter"]');
    if (quitterLink) {
        quitterLink.addEventListener('click', function (e) {
            const confirmation = confirm("Voulez-vous vraiment quitter et revenir à l'acceuil ?");
            if (!confirmation) {
                e.preventDefault();
            } else {
                // Redirige vers une page de déconnexion ou ferme la fenêtre si besoin
                // window.close(); // Attention : window.close() ne fonctionne que si la fenêtre a été ouverte par script
            }
        });
    }
});

// Met en surbrillance le lien actif dans le menu de navigation
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.textDecoration = 'underline';
        }
    });
});

// Confirmation à l'envoi du formulaire de contact
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons rapidement.');
            form.reset();
        });
    }
});