document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});