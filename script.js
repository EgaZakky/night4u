document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const messageBox = document.getElementById("message-box");
    const messageText = document.getElementById("message-text"); // Elemen teks
    const messageImage = document.getElementById("message-image"); // Elemen gambar
    const bgMusic = document.getElementById("bg-music");
    const playMusicBtn = document.getElementById("play-music");

    // Menentukan sumber musik dan memuatnya
    bgMusic.src = "The 1975 - About You.mp3"; // Pastikan file ada di lokasi yang benar
    bgMusic.load();

    // Fungsi untuk memunculkan pesan & gambar saat bintang diklik
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const message = this.getAttribute("data-message");
            const imageSrc = this.getAttribute("data-image"); // Ambil gambar dari atribut
            showMessage(message, imageSrc, this);
        });
    });

    // Fungsi untuk menampilkan pesan & gambar
    function showMessage(message, imageSrc, starElement) {
        messageText.innerText = message; // Set teks pesan

        // Tampilkan gambar jika ada
        if (imageSrc) {
            messageImage.src = imageSrc;
            messageImage.style.display = "block";
        } else {
            messageImage.style.display = "none"; // Sembunyikan gambar jika tidak ada
        }

        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.style.display = "none";
        }, 20000);

        // Efek animasi bintang dikembalikan seperti sebelumnya
        starElement.style.transform = "scale(2)";
        starElement.style.opacity = "0";
        setTimeout(() => {
            starElement.style.transform = "scale(1)";
            starElement.style.opacity = "1";
        }, 500);
    }

    // Memainkan musik saat tombol diklik
    playMusicBtn.addEventListener("click", function () {
        bgMusic.play().then(() => {
            playMusicBtn.style.display = "none"; // Sembunyikan tombol setelah dipencet
        }).catch(error => {
            console.error("Gagal memutar musik:", error);
        });
    });

    // Fungsi untuk membuat efek bintang jatuh
    function createShootingStar() {
        const star = document.createElement("div");
        star.classList.add("shooting-star");
        star.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 1500);
    }

    // Interval untuk efek bintang jatuh setiap 1 detik
    setInterval(createShootingStar, 1000);
});
