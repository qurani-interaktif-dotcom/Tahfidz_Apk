document.addEventListener("DOMContentLoaded", function() {
  const tombolMulai = document.getElementById("mulai");
  const tombolHitung = document.getElementById("hitung");

  // Untuk tombol di halaman index.html
  if (tombolMulai) {
    tombolMulai.addEventListener("click", function() {
      window.location.href = "hafalan.html";
    });
  }

  // Untuk tombol di halaman hafalan.html
  if (tombolHitung) {
    tombolHitung.addEventListener("click", function() {
      const tajwid = parseFloat(document.getElementById("tajwid").value) || 0;
      const kelancaran = parseFloat(document.getElementById("kelancaran").value) || 0;
      const hafalan = parseFloat(document.getElementById("hafalan").value) || 0;

      const rataRata = ((tajwid + kelancaran + hafalan) / 3).toFixed(2);
      let predikat = "";

      if (rataRata >= 90) predikat = "A (Sangat Baik)";
      else if (rataRata >= 80) predikat = "B (Baik)";
      else if (rataRata >= 70) predikat = "C (Cukup)";
      else predikat = "D (Perlu Bimbingan)";

      document.getElementById("hasil").innerHTML = 
        `Nilai Akhir: ${rataRata} <br> Predikat: ${predikat}`;
    });
  }
});
