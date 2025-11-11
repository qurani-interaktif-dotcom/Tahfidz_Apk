document.addEventListener("DOMContentLoaded", function() {
  const mulai = document.getElementById("mulai");
  if (mulai) {
    mulai.addEventListener("click", function() {
      window.location.href = "hafalan.html";
    });
  }

  const hitung = document.getElementById("hitung");
  if (hitung) {
    hitung.addEventListener("click", function() {
      const tajwid = Number(document.getElementById("tajwid").value);
      const kelancaran = Number(document.getElementById("kelancaran").value);
      const hafalan = Number(document.getElementById("hafalan").value);
      const total = ((tajwid + kelancaran + hafalan) / 3).toFixed(2);
      document.getElementById("hasil").innerHTML = `Nilai Akhir: ${total}`;
    });
  }
});
