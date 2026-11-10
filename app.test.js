test('IPK dihitung berdasarkan bobot SKS', () => {
  assert.strictEqual(hitungIpk([{ ips: 4.0, sks: 18 }, { ips: 2.0, sks: 6 }]), 3.5);
});
