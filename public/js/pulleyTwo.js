window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const massA = document.querySelector('input[id="email"]');
  const massB = document.querySelector('input[id="beta"]');
  const ans = document.querySelector('.answer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!massA.value && !massB.value) {
      alert('You have not entered any values');
      return;
    }
    const x = 2 * massA.value * massB.value;
    const y = parseFloat(massA.value) + parseFloat(massB.value);
    const z = x / y;
    ans.textContent = `${z * 9.8} Newtons`;
  });
});
