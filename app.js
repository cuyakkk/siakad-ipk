// Versi awal (masih salah): IPK dihitung dengan rata-rata biasa
function hitungIpk(semester) {
  if (semester.length === 0) return 0;
  const total = semester.reduce((a, s) => a + s.ips, 0);
  return Math.round((total / semester.length) * 100) / 100;
}

module.exports = { hitungIpk };
