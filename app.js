function hitungIpk(semesters) {
  let totalBobot = 0;
  let totalSks = 0;

  for (const sem of semesters) {
    totalBobot += sem.ips * sem.sks;
    totalSks += sem.sks;
  }

  if (totalSks === 0) return 0;
  
  // Membulatkan hasil ke 2 tempat desimal jika diperlukan, atau kembalikan angka langsung
  return Number((totalBobot / totalSks).toFixed(2));
}

module.exports = hitungIpk;
