// Fungsi untuk berpindah halaman
function nextPage(current, next) {
    document.getElementById(current).classList.remove("show");
    document.getElementById(next).classList.add("show");
}

// Fungsi untuk mengecek tebakan umur
function checkAge() {
    let ageInput = document.getElementById("age-guess").value;
    let result = document.getElementById("game-result");
    
    if (ageInput == 25) {
        result.innerHTML = "Benar! 🎉";
    } else {
        result.innerHTML = "Coba lagi! 😆";
    }
}

// Fungsi untuk membagikan halaman
function sharePage() {
    alert("Bagikan halaman ini ke temanmu! 🎁");
}





