var salam = document.getElementById("salam");
var jam = new Date().getHours();
var sapaan;

if (jam < 11) {
    sapaan = "Selamat pagi";
} else if (jam < 15) {
    sapaan = "Selamat siang";
} else if (jam < 18) {
    sapaan = "Selamat sore";
} else {
    sapaan = "Selamat malam";
}

salam.textContent = sapaan + "! Selamat datang di halaman profil saya";


var tombolAtas = document.querySelector(".tombol-atas");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        tombolAtas.classList.add("tampil");
    } else {
        tombolAtas.classList.remove("tampil");
    }
});

tombolAtas.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
