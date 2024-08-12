document
  .querySelector(".custom-toggler")
  .addEventListener("click", function () {
    const navbarNav = document.getElementById("navbarNav");
    if (this.classList.contains("collapsed")) {
      this.classList.remove("collapsed"); // Menghapus kelas collapsed (membuka navbar)
      navbarNav.style.display = "block"; // Menampilkan navbar
    } else {
      this.classList.add("collapsed"); // Menambahkan kelas collapsed (menutup navbar)
      navbarNav.style.display = "none"; // Menyembunyikan navbar
    }
  });
