    document.addEventListener("DOMContentLoaded", function() {
        var navbarLinks = document.querySelectorAll(".navbar-nav a");

        navbarLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navbarLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
                this.classList.add("active");
            });
        });

        // Menandai tautan aktif berdasarkan URL halaman saat ini
        var currentURL = window.location.href;

        navbarLinks.forEach(function(link) {
            if (currentURL.includes(link.getAttribute("href"))) {
                link.classList.add("active");
            }
        });
    });