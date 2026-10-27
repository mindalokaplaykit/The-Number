/** Shared, testable Codebreaker scoring logic. No external dependencies. */
(function (root, factory) {
  const logic = factory();
  if (typeof module === 'object' && module.exports) module.exports = logic;
  if (root) root.NumberLogic = logic;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  function evaluateGuess(secret, guess) {
    const a = String(secret).split('');
    const b = String(guess).split('');
    if (a.length !== b.length || !/^\d+$/.test(String(secret)) || !/^\d+$/.test(String(guess))) {
      throw new Error('Kode dan tebakan harus memiliki panjang yang sama serta hanya berisi digit.');
    }
    let exact = 0;
    const remainingSecret = Object.create(null);
    const remainingGuess = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) exact++;
      else {
        remainingSecret[a[i]] = (remainingSecret[a[i]] || 0) + 1;
        remainingGuess.push(b[i]);
      }
    }
    let misplaced = 0;
    for (const digit of remainingGuess) {
      if (remainingSecret[digit] > 0) {
        misplaced++;
        remainingSecret[digit]--;
      }
    }
    return {exact, misplaced, solved: exact === a.length};
  }
  function validateCode(guess, length, unique) {
    if (!new RegExp('^\\d{' + length + '}$').test(String(guess))) return 'Masukkan tepat ' + length + ' digit angka.';
    if (unique && new Set(String(guess)).size !== length) return 'Pada level ini semua digit harus berbeda.';
    return null;
  }
  return {evaluateGuess, validateCode};
});
