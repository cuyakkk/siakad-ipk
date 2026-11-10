// Menghitung IPK dari daftar semester: [{ ips, sks }, ...]
// IPK = jumlah (IPS x SKS) dibagi jumlah SKS seluruh semester
function hitungIpk(semester) {
  const totalSks = semester.reduce((a, s) => a + s.sks, 0);
  if (totalSks === 0) return 0;
  const totalMutu = semester.reduce((a, s) => a + s.ips * s.sks, 0);
  return Math.round((totalMutu / totalSks) * 100) / 100;
}

module.exports = { hitungIpk };
