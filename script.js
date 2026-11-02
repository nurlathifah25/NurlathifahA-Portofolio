
document.addEventListener("DOMContentLoaded", function() {

    const tahun = document.getElementById("year");

    if (tahun !== null) {
        tahun.textContent = new Date().getFullYear();
    }

    const menuNavigasi = document.querySelectorAll(".navbar nav a");

    menuNavigasi.forEach(function(menu) {

        menu.addEventListener("click", function() {

            menuNavigasi.forEach(function(item) {
                item.classList.remove("active");
            });

            menu.classList.add("active");

        });

    });


    const tombolExplore = document.querySelector(".hero .button");

    if (tombolExplore !== null) {

        tombolExplore.addEventListener("click", function() {

            alert("Selamat datang di portofolio saya! Silakan lihat karya-karya yang tersedia.");

        });

    }


    const tombolKarya = document.querySelectorAll(".portofolio-card a");

    tombolKarya.forEach(function(tombol) {

        tombol.addEventListener("click", function() {

            const kartu = tombol.closest(".portofolio-card");
            const judul = kartu.querySelector("h3");

            if (judul !== null) {
                alert("Kamu memilih kategori: " + judul.textContent);
            }

        });

    });

});
