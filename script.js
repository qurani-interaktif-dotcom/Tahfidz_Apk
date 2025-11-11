document.addEventListener("DOMContentLoaded", () => {
  const hitungBtn = document.getElementById("hitung");
  const hasilDiv = document.getElementById("hasil");

  if (hitungBtn) {
    hitungBtn.addEventListener("click", () => {
      const tajwid = parseFloat(document.getElementById("tajwid").value) || 0;
      const kelancaran = parseFloat(document.getElementById("kelancaran").value) || 0;
      const hafalan = parseFloat(document.getElementById("hafalan").value) || 0;

      const rata2 = ((tajwid + kelancaran + hafalan) / 3).toFixed(2);

      let kategori = "";
      if (rata2 >= 90) kategori = "Sangat Baik";
      else if (rata2 >= 75) kategori = "Baik";
      else if (rata2 >= 60) kategori = "Cukup";
      else kategori = "Perlu Bimbingan";

      hasilDiv.innerHTML = `
        <h3>Hasil Penilaian</h3>
        <p><strong>Rata-rata:</strong> ${rata2}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
      `;
    });
  }
});
