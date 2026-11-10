const test = require('node:test');
const { strictEqual } = require('node:assert');
const hitungIpk = require('./app');

test('dihitung berdasarkan bobot SKS', () => {
  strictEqual(hitungIpk([{ ips: 4.0, sks: 18 }, { ips: 2.0, sks: 6 }]), 3.5);
});

test('satu semester sama dengan IPS-nya', () => {
  strictEqual(hitungIpk([{ ips: 3.5, sks: 20 }]), 3.5);
});
