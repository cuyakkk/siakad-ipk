const { test } = require('node:test');
const assert = require('node:assert');const test = require('node:test');
const assert = require('node:assert');
const { hitungIpk } = require('./app');

test('IPK satu semester sama dengan IPS-nya', () => {
  assert.strictEqual(hitungIpk([{ ips: 3.5, sks: 20 }]), 3.5);
});
