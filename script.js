document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah navigasi default

            // Membuat container balon
            const container = document.createElement("div");
            container.classList.add("balloons-container");
            document.body.appendChild(container);

            // Menambahkan 3 balon
            for (let i = 0; i < 3; i++) {
                const balloon = document.createElement("div");
                balloon.classList.add("balloon");
                container.appendChild(balloon);

                // Posisi awal balon di sekitar teks navbar yang diklik
                const rect = link.getBoundingClientRect();
                balloon.style.left = `${rect.left + rect.width / 2 - 20}px`;
                balloon.style.top = `${rect.top}px`;

                // Animasi muncul dan turun ke bawah
                setTimeout(() => {
                    balloon.style.opacity = "1";
                    balloon.style.animation = "floatDown 3s ease-in-out forwards";
                }, i * 300); // Delay antar balon agar muncul bergantian
            }

            // Hapus container setelah animasi selesai
            setTimeout(() => {
                container.remove();
            }, 3500);
        });
    });
});