document.getElementById("mulai").addEventListener("click", () => {
  window.location.href = "hafalan.html";
});
// --- Script untuk tombol "Mulai Hafalan" di halaman utama ---
document.addEventListener("DOMContentLoaded", function() {
  const mulaiBtn = document.getElementById("mulai");
  if (mulaiBtn) {
    mulaiBtn.addEventListener("click", () => {
      window.location.href = "hafalan.html";
    });
  }

  // --- Script untuk menghitung nilai hafalan ---
  const hitungBtn = document.getElementById("hitung");
  if (hitungBtn) {
    hitungBtn.addEventListener("click", () => {
      const tajwid = parseInt(document.getElementById("tajwid").value) || 0;
      const kelancaran = parseInt(document.getElementById("kelancaran").value) || 0;
      const hafalan = parseInt(document.getElementById("hafalan").value) || 0;

      const rata = ((tajwid + kelancaran + hafalan) / 3).toFixed(2);
      let predikat = "";

      if (rata >= 90) predikat = "A (Sangat Baik)";
      else if (rata >= 75) predikat = "B (Baik)";
      else if (rata >= 60) predikat = "C (Cukup)";
      else predikat = "D (Perlu Bimbingan)";

      document.getElementById("hasil").innerHTML =
        `Nilai akhir: <b>${rata}</b><br>Predikat: <b>${predikat}</b>`;
    });
  }
});
